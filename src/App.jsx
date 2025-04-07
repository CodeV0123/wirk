import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import JobPost from "./components/JobPost/JobPost";
import Applications from "./components/Applications/Applications";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobpost" element={<JobPost />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
