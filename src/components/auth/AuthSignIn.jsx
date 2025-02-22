
import React, { useState } from "react";
import "./Auth.css";
import {auth} from "./Firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Signing in with", { email, password });
    setError("");

    try{
      await signInWithEmailAndPassword(auth, email, password)
      console.log("User logged in successfully");
      window.location.href ="/mainpage"

    } catch(error){
      console.error("Error logging in:", error.message);
       setError(error.message);
       toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSignIn}>
          <div className="auth-field">
            <label htmlFor="email" className="auth-label">Email</label>
            <input
              id="email"
              type="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="auth-field">
            <label htmlFor="password" className="auth-label">Password</label>
            <input
              id="password"
              type="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="auth-button">Sign In</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <a href="/signup" className="auth-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
