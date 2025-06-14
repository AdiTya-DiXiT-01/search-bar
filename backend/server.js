const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/api/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  if (query.length < 3) return res.json([]);

  const data = JSON.parse(fs.readFileSync("student_data.json"));
  const result = data
    .filter(student =>
      student.name.toLowerCase().includes(query)
    )
    .slice(0, 5);

  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
