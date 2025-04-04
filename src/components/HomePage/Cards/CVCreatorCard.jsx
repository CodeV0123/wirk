import React from "react";
import createCV from "../assets/createCV.png";
import logoBg from "../assets/logoBg.png";

const CVCreatorCard = () => {
  return (
    <div>
      {/* Background Logo */}
      <div className="absolute bottom-[-1890px] left-1/2 transform -translate-x-1/2  z-0 ">
        <img
          src={logoBg}
          alt="Background Logo"
          className="w-auto h-auto max-w-3xl"
        />
      </div>
      {/* Fifth Card - CV Create Card */}
      <section className="relative flex items-center justify-between px-12 py-16 bg-[#f9dc5c] rounded-xl mx-auto max-w-5xl mt-[120px] shadow-lg overflow-hidden z-20">
        {/* Left Text Section */}
        <div className="w-1/2 text-white text-center max-w-md flex flex-col items-center tracking-[0.04rem]">
          <h2
            className="text-4xl font-bold leading-tight mb-3 text-[#141414]"
            style={{ fontFamily: "Urbanist" }}
          >
            Create your Perfect CV
          </h2>
          <p
            className="text-lg opacity-90 mb-6 max-w-md text-[#141414]"
            style={{ fontFamily: "Poppins" }}
          >
            Create the CV that will send you to the top with our top class tool
            that will make you look like the best of the best.
          </p>
          <button
            className="mt-6 px-9 py-1.5 bg-white text-[#141414] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            style={{ fontFamily: "Urbanist" }}
          >
            Try Now!
          </button>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-end items-center pr-6">
          <img
            src={createCV}
            alt="Hiring"
            className="absolute right-0 bottom-0 w-130 object-contain z-10"
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
            CV Creator
          </h2>
          <p
            className="text-[#141414] max-w-3xl mx-auto leading-relaxed text-normal"
            style={{ fontFamily: "Poppins" }}
          >
            Empower job seekers with a professional, AI-enhanced CV builder.
            Bandr’s CV Creator helps candidates craft impactful resumes by
            highlighting key achievements, optimizing structure, and tailoring
            content for specific industries. With customizable templates and
            real-time suggestions, users can create standout CVs that grab
            recruiter attention and increase hiring chances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVCreatorCard;
