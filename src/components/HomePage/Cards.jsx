import React from "react";
import hiringImage from "./assets/hiringImage.png";
import logoBg from "./assets/logoBg.png";
import bestImage from "./assets/bestImage.png";
import interviewImage from "./assets/interviewImage.png";
import talent from "./assets/talent.png";
import createCV from "./assets/createCV.png";
import workHistoryImage from "./assets/workHistoryImage.png";

const Cards = () => {
  return (
    <>
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
            className="mt-6 px-9 py-1.5 bg-white text-[#141414] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            style={{ fontFamily: "Urbanist" }}
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

      {/* Fifth Card - CV Create Card */}
      <section className="relative flex items-center justify-between px-12 py-16 bg-[#ffda49] rounded-xl mx-auto max-w-5xl mt-[120px] shadow-lg overflow-hidden z-20">
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
    </>
  );
};

export default Cards;
