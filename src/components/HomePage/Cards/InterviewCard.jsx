import React from "react";
import interviewImage from "../assets/interviewImage.png";
import logoBg from "../assets/logoBg.png";
import { useNavigate } from "react-router-dom";

const InterviewCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Third Card interview */}
      {/* Background Logo */}
      <div className="absolute bottom-[-1890px] left-1/2 transform -translate-x-1/2  z-0 ">
        <img
          src={logoBg}
          alt="Background Logo"
          className="w-auto h-auto max-w-3xl"
        />
      </div>

      {/* Third Card - Interview Card */}
      <section className="relative flex items-center justify-between px-12 py-16 bg-[#C2B3DE] rounded-xl mx-auto max-w-5xl mt-[120px] shadow-lg overflow-hidden z-20">
        {/* Left Text Section */}
        <div className="w-1/2 text-white text-center max-w-md flex flex-col items-center tracking-[0.04rem]">
          <h2
            className="text-4xl font-bold leading-tight mb-3"
            style={{ fontFamily: "Urbanist" }}
          >
            We find them for you
          </h2>
          <p
            className="text-lg opacity-90 mb-6 max-w-md"
            style={{ fontFamily: "Poppins" }}
          >
            Let us filter through all your applications and find you the best
            one that fits your needs.
          </p>
          <button
            className="mt-6 px-9 py-1.5 bg-white text-[#141414] font-semibold rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer"
            style={{ fontFamily: "Urbanist" }}
            onClick={() => navigate("/generate-interview-questions")}
          >
            Try Now!
          </button>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-end items-center pr-6">
          <img
            src={interviewImage}
            alt="Hiring"
            className="absolute right-0 bottom-0 w-122 object-contain z-10"
          />
        </div>
      </section>

      {/* Interview and CV context */}
      <div className="relative mx-auto max-w-5xl mt-8 mb-16 tracking-[0.04rem] ">
        <div className="relative z-10 text-center px-6">
          <h2
            className="text-2xl font-bold text-[#141414] mb-4"
            style={{ fontFamily: "Urbanist" }}
          >
            Interview & CV Evaluation
          </h2>
          <p
            className="text-[#141414] max-w-3xl mx-auto leading-relaxed text-normal"
            style={{ fontFamily: "Poppins" }}
          >
            Streamline your hiring process with Bandr’s interview and CV
            assessment tools. Our AI-driven evaluation system analyzes resumes
            for key qualifications, flags potential matches, and provides
            insights on candidate strengths. Additionally, our interview
            analysis tools assess responses, sentiment, and communication skills
            to help recruiters make data-driven hiring decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
