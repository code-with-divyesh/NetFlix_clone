// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer theme="dark" />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/movie/:title"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
