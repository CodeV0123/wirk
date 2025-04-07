import React from "react";
import logoBg from "../assets/logoBg.png";
import talent from "../assets/talent.png";

const TalentCard = () => {
  return (
    <div>
      {/* Forth Card - "Talent and Skills" */}
      <div className="absolute bottom-[-2530px] left-65 transform z-0">
        <img
          src={logoBg}
          alt="Background Logo"
          className="w-auto h-auto max-w-3xl"
        />
      </div>

      <section className="mt-40 relative flex items-center justify-between px-12 py-16 bg-[#00ade7] rounded-xl mx-auto max-w-5xl shadow-lg overflow-hidden">
        {/* Left Image */}
        <img
          src={talent}
          alt="Talent and Skills"
          className="absolute left-0 bottom-0 w-120 object-contain"
        />

        {/* Right Text Section */}
        <div className=" text-[#fff] max-w-md flex flex-col items-center ml-auto tracking-[0.04rem]">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Urbanist" }}>
            More than just a CV
          </h2>
          <p
            className="text-lg opacity-90 mt-3 leading-relaxed text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Delve deeper than the CV to find more information on what makes them
            the best.
          </p>
          <button
            className="mt-6 px-9 py-1.5 bg-white text-[#141414] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            style={{ fontFamily: "Urbanist" }}
          >
            Try Now!
          </button>
        </div>
      </section>
      {/* content */}
      <div className="relative mx-auto max-w-5xl mt-8 mb-16 tracking-[0.04rem]">
        <div className="relative z-10 text-center px-6">
          <h2
            className="text-2xl font-bold text-[#141414] mb-4"
            style={{ fontFamily: "Urbanist" }}
          >
            Talent, Skill & Sentiment Analysis
          </h2>
          <p
            className="text-[#141414] max-w-3xl mx-auto leading-relaxed text-normal"
            style={{ fontFamily: "Poppins" }}
          >
            Beyond resumes and interviews, Wirk’s AI delves deeper into a
            candidate’s capabilities and mindset. Our advanced analytics
            evaluate skills through portfolio work, past experience, and even
            social presence. Sentiment analysis helps gauge cultural fit by
            analyzing communication styles, career goals, and professional
            interactions, ensuring candidates align with company values and team
            dynamics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
