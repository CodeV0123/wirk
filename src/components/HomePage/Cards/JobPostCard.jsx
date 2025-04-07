import React from "react";
import hiringImage from "../assets/hiringImage.png";
import logoBg from "../assets/logoBg.png";

const JobPostCard = () => {
  return (
    <div>
      {/* Background Logo */}
      <div className="absolute bottom-[-580px] left-1/2 transform -translate-x-1/2 z-0 ">
        <img
          src={logoBg}
          alt="Background Logo"
          className="w-auto h-auto max-w-3xl"
        />
      </div>

      {/* First Card - Create Job Card */}
      <section className="relative flex items-center justify-between px-12 py-16 bg-[#ff5c91] rounded-xl mx-auto max-w-5xl mt-[120px] shadow-lg overflow-hidden z-20">
        {/* Left Text Section */}
        <div className="relative z-10 text-white max-w-md flex flex-col items-center tracking-[0.04rem]">
          <h2
            className="text-4xl font-bold "
            style={{ fontFamily: "Urbanist" }}
          >
            Create Job Posts
          </h2>
          <p
            className="text-lg opacity-90 mt-3 leading-relaxed text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Use our innovative tools to advertise an opening in your company in
            the style you want it to be.
          </p>
          <button
            className="mt-6 px-9 py-1.5 bg-white text-[#141414] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            style={{ fontFamily: "Urbanist" }}
          >
            Try Now!
          </button>
        </div>

        {/* Right Image */}
        <img
          src={hiringImage}
          alt="Hiring"
          className="absolute right-0 bottom-0 w-90 object-contain z-10"
        />
      </section>

      {/* Job Post context */}
      <div className="relative mx-auto max-w-5xl mt-8 mb-16 tracking-[0.04rem] ">
        <div className="relative z-10 text-center px-6">
          <h2
            className="text-2xl font-bold text-[#141414] mb-4"
            style={{ fontFamily: "Urbanist" }}
          >
            Job Posts & Advertising
          </h2>
          <p
            className="text-[#141414] max-w-3xl mx-auto leading-relaxed text-normal"
            style={{ fontFamily: "Poppins" }}
          >
            Maximize your job post visibility with Sands' intelligent
            advertising tools. Whether you're a startup looking for fresh talent
            or an enterprise seeking experienced professionals, our targeted job
            postings ensure your listing reaches the right audience. Our
            AI-driven platform strategically places job ads across premium job
            boards and social networks, increasing application rates and
            attracting high-quality candidates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
