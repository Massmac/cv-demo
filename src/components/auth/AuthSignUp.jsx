import React, { useState } from "react";
import "./Auth.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";


/*
 Author: Michael Tamatey
 Date: 20250222
 Description: This class allows users to Register
*/


export const AuthSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Initialize navigate
  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await setDoc(doc(db, "Users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: user.email,
      });
  
      alert("User signed up successfully! Please log in.");
      
      // Sign out user immediately after signup
      await signOut(auth);
  
      navigate("/signin");
  
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Sign Up to get started</h1>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSignUp}>
          <div className="auth-field">
            <label htmlFor="firstName" className="auth-label">First Name</label>
            <input
              id="firstName"
              type="text"
              className="auth-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="auth-field">
            <label htmlFor="lastName" className="auth-label">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="auth-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="auth-field">
            <label htmlFor="email" className="auth-label">Email</label>
            <input
              id="email"
              type="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              required
            />
          </div>
          <div className="auth-field">
            <label htmlFor="confirmPassword" className="auth-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="auth-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/signin" className="auth-link">Log In</a>
        </p>
      </div>
    </div>
  );
};