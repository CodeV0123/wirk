import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateInterviewQuestions,
  resetInterviewQuestions,
} from "../../redux/slice/GenerateInterviewQuestions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const GenerateInterviewQuestions = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const { questions, loading, error } = useSelector((state) => state.interview);

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (file) {
      dispatch(generateInterviewQuestions(file));
    }
  };

  const handleReset = () => {
    dispatch(resetInterviewQuestions());
    setFile(null);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavBar />
        <div className="flex px-[150px] py-6 gap-6">
          {/* Sidebar */}
          <aside className="w-[22%]" style={{ fontFamily: "Urbanist" }}>
            <form
              onSubmit={handleFileSubmit}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 space-y-4"
            >
              <label className="font-medium text-lg text-[#141414]">
                Generate Interview Questions
              </label>
              <input
                accept=".pdf,.doc,.docx"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="text-base text-[#141414] border border-gray-300 rounded-full p-2 w-full"
              />
              {file && (
                <p className="text-sm text-gray-500">Selected: {file.name}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-[#e9532b] text-white rounded-full hover:bg-orange-500 disabled:opacity-50"
              >
                {loading ? "Generating..." : "Generate Questions"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className=" text-[#fff] rounded-full bg-[#737373] hover:bg-gray-700 w-full px-4 py-2"
              >
                Reset
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </aside>

          {/* Main Content */}
          <main className="w-[78%]" style={{ fontFamily: "Urbanist" }}>
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-center text-[#141414] text-xl">
                General Interview Questions
              </h2>
              {Array.isArray(questions?.questions) &&
              questions.questions.length > 0 ? (
                <ul className="list-disc pl-6 space-y-2">
                  {questions.questions.map((q, index) => (
                    <li key={index} className="text-gray-700">
                      {q.question}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">
                  No questions generated yet.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GenerateInterviewQuestions;
