import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import './App.css';
import axios from 'axios';

function LoginPage({ setUser }) {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false); // ✅ For Google login protection

  // Manual login handler
  const handleManualLogin = async () => {
    if (!identifier || !password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post('https://todotask-im6j.onrender.com/login', {
        identifier,
        password
      });

      const manualUser = {
        uid: res.data.userId,
        email: res.data.email,
        type: 'manual'
      };

      localStorage.setItem('taskUser', JSON.stringify(manualUser));
      setUser(manualUser);
      navigate('/task');
    } catch (err) {
      console.error("Login error:", err);
      alert('❌ Invalid username/email or password');
    }
  };

  // Google login handler (✅ Updated to avoid multiple sign-ins)
  const handleGoogleLogin = async () => {
    if (isSigningIn) return; // prevent duplicate popup errors
    setIsSigningIn(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        type: "google",
      };

      setUser(userData);
      localStorage.setItem("taskUser", JSON.stringify(userData));
      navigate("/task");
    } catch (error) {
      console.error("❌ Google login failed:", error);
      alert("Google login failed. Check console.");
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Login to Your Account</h2>

        <input
          type="text"
          placeholder="Username or Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="terms">
          <input type="checkbox" required /> I read and agree to Terms & Conditions
        </label>

        <button onClick={handleManualLogin}>Login with ID</button>

        <hr />

        <button onClick={handleGoogleLogin} disabled={isSigningIn}>
          {isSigningIn ? 'Signing in...' : 'Sign in with Google'}
        </button>

        <p>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>

      <div className="info-section">
        <h1>Katomaran To-Do</h1>
        <p>
          Stay organized and get things done efficiently with your personal task manager.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
}

export default LoginPage;
