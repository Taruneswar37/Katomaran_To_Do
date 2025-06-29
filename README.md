# ✅ Katomaran To-Do Task Manager

This project is a part of a hackathon run by https://www.katomaran.com.

A modern and user-friendly **To-Do Task Manager** built with **React.js**, **Firebase Authentication**, **MongoDB**, and **Express.js**, featuring both **manual** and **Google Sign-In** support.

**📘 Project Description**

Katomaran To-Do Task Manager is a modern, full-stack web application designed to help users efficiently manage their daily tasks. Built using React.js, Firebase Authentication, Node.js, and MongoDB, it offers a clean and user-friendly interface for adding, editing, completing, and deleting tasks.

The application supports both manual login/registration and Google Sign-In, making it flexible and easy to use. Tasks are stored securely in a cloud-based database and are uniquely associated with each authenticated user. The frontend is deployed on Vercel and the backend is hosted via Render, ensuring reliable performance and accessibility.

This project demonstrates integration of modern technologies and deployment tools to create a real-world productivity application.

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

2. Start the backend

cd backend
npm install
node server.js

3. Start the frontend

cd frontend
npm install
npm start

