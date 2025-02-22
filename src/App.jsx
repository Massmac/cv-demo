import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthSignIn } from "./components/auth/AuthSignIn";
import { AuthSignUp } from "./components/auth/AuthSignUp";
import { MainPage } from "./components/mainPage/MainPage";
import Layout from "./components/navbar/Layout";
import { useEffect, useState } from "react";
import { auth } from "./components/auth/Firebase";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false); // Only stop loading once we have checked auth status
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading) return <p>Loading...</p>; // Prevent flickering of login page while checking auth

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect logged-in users to mainpage */}
          <Route path="/" element={user ? <Navigate to="/mainpage" replace /> : <AuthSignIn />} />
          <Route path="/signin" element={user ? <Navigate to="/mainpage" replace /> : <AuthSignIn />} />
          <Route path="/signup" element={user ? <Navigate to="/mainpage" replace /> : <AuthSignUp />} />

          {/* Protected Routes (only accessible if user is logged in) */}
          <Route 
            path="/mainpage" 
            element={user ? <><Layout /><MainPage /></> : <Navigate to="/signin" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;