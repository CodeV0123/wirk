import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import JobPost from "./components/JobPost/JobPost";
import Applications from "./components/Applications/Applications";
import Dashboard from "./components/Dashboard/Dashboard";
import TopTalent from "./components/TopTalent/TopTalent";
import GenerateInterviewQuestions from "./components/InterviewQuestions/GenerateInterviewQuestions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobpost" element={<JobPost />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/top-talent" element={<TopTalent />} />
      <Route
        path="/generate-interview-questions"
        element={<GenerateInterviewQuestions />}
      />
    </Routes>
  );
}

export default App;
