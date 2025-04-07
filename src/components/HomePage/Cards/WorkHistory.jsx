import React from "react";
import logoBg from "../assets/logoBg.png";
import workHistoryImage from "../assets/workHistoryImage.png";

const WorkHistory = () => {
  return (
    <div>
      {/* Sixth Card - "Work History" */}
      <div className="absolute bottom-[-3880px] left-65 transform z-0">
        <img
          src={logoBg}
          alt="Background Logo"
          className="w-auto h-auto max-w-3xl"
        />
      </div>

      <section className="mt-40 relative flex items-center justify-between px-12 py-16 bg-[#fd6d27] rounded-xl mx-auto max-w-5xl shadow-lg overflow-hidden">
        {/* Left Image */}
        <img
          src={workHistoryImage}
          alt="Talent and Skills"
          className="absolute left-0 bottom-0 w-110 object-contain"
        />

        {/* Right Text Section */}
        <div className=" text-[#fff] max-w-md flex flex-col items-center ml-auto tracking-[0.04rem]">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Urbanist" }}>
            Reputation is Everything
          </h2>
          <p
            className="text-lg opacity-90 mt-3 leading-relaxed text-center"
            style={{ fontFamily: "Poppins" }}
          >
            We track the employment history of every future employee for you
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
      <div className="relative mx-auto max-w-5xl mt-8 mb-60 tracking-[0.04rem]">
        <div className="relative z-10 text-center px-6">
          <h2
            className="text-2xl font-bold text-[#141414] mb-4"
            style={{ fontFamily: "Urbanist" }}
          >
            Work History & Employee Reputation
          </h2>
          <p
            className="text-[#141414] max-w-3xl mx-auto leading-relaxed text-normal"
            style={{ fontFamily: "Poppins" }}
          >
            Verify your potential employee’s work history and reputation to make
            sure you get the talent that deserves to work under you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
