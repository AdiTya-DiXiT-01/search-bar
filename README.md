
# 🎓 Student Search Bar (React + Node.js)

A single-page application (SPA) built with React and Node.js that provides real-time, lazy-loaded search functionality for a list of students.

> 🔍 Built as a technical assignment to demonstrate search optimization, API integration, and UI/UX design.

---

## 🚀 Features

- 🔎 Search students by name (min 3 characters)
- 🕵️ Lazy loading & debounce for performance
- ⚡ Fast dropdown with top 5 matching results
- ✅ Case-insensitive search
- 🙋 Student selection displays full details (Name, Class, Roll Number)
- 📜 "No results found" handling
- 🌐 Fully responsive for mobile and desktop

---

## 📁 Project Structure

```
student-search/
├── backend/               # Node.js + Express API
│   └── students.json      # Mock student data (50+ records)
├── frontend/              # React.js app
│   └── src/
│       └── components/    # Search bar, result card, etc.
├── README.md
```

---

## 🧪 Demo

> [🔗 Live Demo on Netlify / Vercel](https://your-live-link.netlify.app) *(optional)*

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite / CRA), HTML, CSS
- **Backend:** Node.js, Express.js
- **Data:** JSON file (no DB used)

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AdiTya-DiXiT-01/search-bar.git
cd search-bar
```

---

### 2. Start the Backend (Node.js)

```bash
cd backend
npm install
node server.js
```

Backend runs on: `http://localhost:5000`

---

### 3. Start the Frontend (React)

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🔄 API Endpoint

| Method | Route                | Description                      |
|--------|----------------------|----------------------------------|
| GET    | `/api/students?q=xxx` | Returns up to 5 matched results |

---

## 📦 Deployment

- Frontend: Deploy to **Vercel** or **Netlify**
- Backend: Use **Render**, **Railway**, or **Heroku** *(if needed)*

---

## ⚠️ Edge Cases Handled

- Case-insensitive matches
- Same-name students with different roll numbers
- Names with spaces or special characters
- Empty states and no-match handling

---

## 🙌 Acknowledgements

- [React.js](https://reactjs.org)
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)

---

## 📃 License

MIT License
