# 📋 Task Tracker

A modern, responsive Task Tracker web application built using the **MERN Stack**. The application allows users to create, update, delete, search, filter, and sort tasks through a clean and intuitive interface.

---

## 🚀 Live Demo

**Frontend:**
https://task-tracker-theta-weld-43.vercel.app

**Backend API:**
https://task-tracker-hgda.onrender.com

---

# ✨ Features

- Create Tasks
- Update Tasks
- Delete Tasks
- View All Tasks
- Search Tasks
- Filter by Status
- Sort by Date and Priority
- Dashboard Statistics
- Responsive Design
- Form Validation using React Hook Form
- Loading Skeleton
- Toast Notifications
- RESTful API
- MongoDB Database Integration

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- React Hot Toast
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors

---

# 📁 Folder Structure

```
task-tracker/

│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── utils/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── .env
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Negiditya/Task_Tracker.git
```

Move into the project

```bash
cd task-tracker
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Run the backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api
```

Run the frontend

```bash
npm run dev
```

---

# REST API Endpoints

## Get All Tasks

```
GET /api/tasks
```

## Create Task

```
POST /api/tasks
```

## Update Task

```
PUT /api/tasks/:id
```

## Delete Task

```
DELETE /api/tasks/:id
```

---

# Database Schema

```javascript
{
  title: String,
  description: String,
  priority: String,
  status: String,
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

# Environment Variables

Backend

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Future Improvements

- User Authentication (JWT)
- User-specific Tasks
- Drag and Drop Task Management
- Dark Mode
- Categories & Tags
- Due Date Notifications
- Pagination
- Charts & Analytics Dashboard
