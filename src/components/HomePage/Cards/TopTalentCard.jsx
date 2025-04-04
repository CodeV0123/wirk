import React from "react";
import bestImage from "../assets/bestImage.png";
import logoBg from "../assets/logoBg.png";

const TopTalentCard = () => {
  return (
    <div>
      {/* Second Card - "Only the Best" */}
      <div className="absolute bottom-[-1210px] left-65 transform z-0">
        <img
          src={logoBg}
          alt="Background Logo"
          className="w-auto h-auto max-w-3xl"
        />
      </div>

      <section className="mt-40 relative flex items-center justify-between px-12 py-16 bg-[#8deca8] rounded-xl mx-auto max-w-5xl shadow-lg overflow-hidden">
        {/* Left Image */}
        <img
          src={bestImage}
          alt="Only the Best"
          className="absolute left-0 bottom-0 w-130 object-contain"
        />

        {/* Right Text Section */}
        <div className=" text-[#141414] max-w-md flex flex-col items-center ml-auto tracking-[0.04rem]">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Urbanist" }}>
            Only the Best
          </h2>
          <p
            className="text-lg opacity-90 mt-3 leading-relaxed text-center"
            style={{ fontFamily: "Poppins" }}
          >
            We go through them all to find you only the best of the best for the
            position you'd like filled.
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
            Top Talent Identifier
          </h2>
          <p
            className="text-[#141414] max-w-3xl mx-auto leading-relaxed text-normal"
            style={{ fontFamily: "Poppins" }}
          >
            Finding the right candidate has never been easier. Bandr’s
            cutting-edge technology scans thousands of profiles, filtering the
            best talent based on skills, experience, and industry relevance.
            With real-time insights and smart recommendations, hiring managers
            can instantly connect with top-tier professionals who fit their
            exact needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopTalentCard;
