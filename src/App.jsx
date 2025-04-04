import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import JobPost from "./components/JobPost/JobPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobpost" element={<JobPost />} />
    </Routes>
  );
}

export default App;
