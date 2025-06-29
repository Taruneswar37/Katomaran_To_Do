# ✅ Katomaran To-Do Task Manager

This project is a part of a hackathon run by https://www.katomaran.com.

A modern and user-friendly **To-Do Task Manager** built with **React.js**, **Firebase Authentication**, **MongoDB**, and **Express.js**, featuring both **manual** and **Google Sign-In** support.

## 🚀 Features

- 🔐 Manual Login & Registration (username/email + password)
- 🔑 Google Authentication (via Firebase)
- 📝 Add, Edit, Mark Done/Undo, and Delete Tasks
- 📌 Task Filtering (All / Completed / Pending)
- 🔄 Real-time UI updates without refresh
- 🌐 Fully Deployed on [Vercel](https://katomaran-to-mq08nqb74-taruneswar-m-rs-projects.vercel.app)

---

## 📁 Project Structure

TodoTask-main/
├── backend/ # Node.js + Express + MongoDB API
│ ├── models/
│ │ ├── Task.js
│ │ └── User.js
│ └── server.js
│
├── frontend/ # React Frontend
│ ├── src/
│ │ ├── firebase.js
│ │ ├── LoginPage.js
│ │ ├── RegisterPage.js
│ │ ├── TaskPage.js
│ │ ├── App.js
│ │ └── App.css

---

## 🛠️ Technologies Used

- **Frontend**: React, Axios, CSS
- **Backend**: Express, MongoDB (Mongoose)
- **Authentication**: Firebase (Google Sign-In), Custom API for manual login
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render
  - Database: MongoDB Atlas

---

**Future Improvements**

✅ Add due dates and reminders
🌈 Light/Dark mode toggle
📱 Make it PWA and mobile responsive
🔄 Drag-and-drop task sorting

---

## 🔧 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/todo-task-manager.git
cd TodoTask-main

**Future Improvements**

✅ Add due dates and reminders
🌈 Light/Dark mode toggle
📱 Make it PWA and mobile responsive
🔄 Drag-and-drop task sorting

### 2. Start the backend

cd backend
npm install
node server.js

### 3. Start the frontend

cd frontend
npm install
npm start

