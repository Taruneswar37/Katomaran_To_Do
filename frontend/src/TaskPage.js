import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function TaskPage({ user }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState('');
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const userId = user?.uid || user?.displayName;

  useEffect(() => {
    if (!userId) return;

    axios.get(`https://todotask-im6j.onrender.com/tasks?userId=${userId}`)
      .then(res => setTasks(res.data))
      .catch(err => {
        console.error("❌ Fetch error:", err.message);
        alert("❌ Failed to fetch data");
      });
  }, [userId]);

  const addTask = () => {
    if (!input.trim()) return;
    axios.post('https://todotask-im6j.onrender.com/tasks', { title: input, userId })
      .then(res => {
        setTasks([...tasks, res.data]);
        setInput('');
      });
  };

  const toggleTask = (id, done) => {
    axios.put(`https://todotask-im6j.onrender.com/tasks/${id}`, { done: !done, userId })
      .then(res => {
        setTasks(tasks.map(t => (t._id === id ? res.data : t)));
      });
  };

  const deleteTask = (id) => {
    axios.delete(`https://todotask-im6j.onrender.com/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(t => t._id !== id));
      });
  };

  const startEdit = (task) => {
    setEditId(task._id);
    setEditInput(task.title);
  };

  const saveEdit = (id) => {
    if (!editInput.trim()) return;
    axios.put(`https://todotask-im6j.onrender.com/tasks/${id}`, { title: editInput, userId })
      .then(res => {
        setTasks(tasks.map(t => (t._id === id ? res.data : t)));
        setEditId(null);
        setEditInput('');
      });
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('taskUser');
    navigate('/login');
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true :
    filter === 'done' ? task.done :
    !task.done
  );

  return (
    <div className="task-container">
      <nav className="task-header">
        <h2>Welcome, <span>{user.displayName}</span></h2>
        {user.email && <p>{user.email}</p>}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <main className="task-main">
        <h1>Task Manager</h1>

        <div className="task-input-area">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="task-filter">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setFilter('done')} className={filter === 'done' ? 'active' : ''}>Completed</button>
          <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
        </div>

        <ul className="task-list">
          {filteredTasks.map(task => (
            <li key={task._id} className={task.done ? 'completed' : ''}>
              {editId === task._id ? (
                <>
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button onClick={() => saveEdit(task._id)}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{task.title}</span>
                  <div className="task-actions">
                    <button onClick={() => toggleTask(task._id, task.done)}>
                      {task.done ? 'Undo' : 'Done'}
                    </button>
                    <button onClick={() => startEdit(task)}>Edit</button>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default TaskPage;
