import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gradient-to-r from-[#e9532b] to-[#f992ec] text-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: "Urbanist" }}
        >
          Find the best Talent, <br /> Place the Perfect Job.
        </h1>
        <p
          className="mt-4 text-lg opacity-80 "
          style={{ fontFamily: "Poppins" }}
        >
          Through Bandr, the assisted job market.
        </p>
      </div>

      {/* Right Side - Circular Images */}
      <div className="relative w-full md:w-1/2 flex flex-wrap justify-center gap-4">
        {/* Circular images with random positions */}
        {[
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/3.jpg",
          "https://randomuser.me/api/portraits/women/4.jpg",
          "https://randomuser.me/api/portraits/men/5.jpg",
          "https://randomuser.me/api/portraits/women/6.jpg",
          "https://randomuser.me/api/portraits/men/7.jpg",
          "https://randomuser.me/api/portraits/women/8.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src={src}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
