import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Portfolio from "./assets/Portfolio.png";

const TopTalent = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavBar />
        <div className="flex px-[90px] py-6 ">
          {/* SideBar */}
          <aside className="w-[15%] space-y-6">
            {/* Industry Card */}
            <div
              className="flex flex-col  bg-[#fff] rounded-lg shadow-2xl"
              style={{ fontFamily: "Urbanist" }}
            >
              <h2 className="text-2xl mt-4 font-semibold text-[#141414] text-center">
                Industry
              </h2>
              <ul className="space-y-4 p-5 text-lg font-medium text-[#141414]">
                {[
                  "Design",
                  "Art",
                  "Accounting",
                  "Photography",
                  "Engineering",
                  "Fashion",
                  "Education",
                  "Marketing",
                  "Architecture",
                  "Human Resource",
                  "Finance",
                  "Healthcare",
                  "IT",
                  "Law",
                  "Writing",
                ].map((industry) => (
                  <li key={industry} className="flex items-center gap-4 ">
                    <input
                      type="checkbox"
                      id={industry}
                      className="appearance-none w-5 h-5 border-2 border-[#ff77e3] rounded-sm checked:bg-[#ff77e3] checked:border-[#ff77e3]"
                    />
                    <label htmlFor={industry}>{industry}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="flex flex-col  bg-[#fff] rounded-lg shadow-2xl"
              style={{ fontFamily: "Urbanist" }}
            >
              <h2 className="text-2xl mt-4 font-semibold text-[#141414] text-center">
                Work Times
              </h2>
              <ul className="space-y-4 p-5 text-lg font-medium text-[#141414]">
                {["Full time", "Part time", "Freelance"].map((worktimes) => (
                  <li key={worktimes} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id={worktimes}
                      className="appearance-none w-5 h-5 border-2 border-[#ff77e3] rounded-sm checked:bg-[#ff77e3] checked:border-[#ff77e3]"
                    />
                    <label htmlFor={worktimes}>{worktimes}</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-[85%] space-y-6">
            {/* Heading */}
            <div
              className="flex flex-col justify-center items-center bg-[#fff] rounded-lg shadow-lg max-w-5xl mx-auto"
              style={{ fontFamily: "Urbanist" }}
            >
              <h2 className="text-center text-xl font-semibold text-[#141414] mb-4 mt-4">
                People who you might find interesting
              </h2>

              {/* Card Grid */}
              <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  {
                    name: "Unem Plaid",
                    title: "Web Designer",
                    location: "Dublin, Ireland",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Anita Job",
                    title: "Digital Creator",
                    location: "Dublin, Ireland",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Diane Ensign",
                    title: "HR Specialist",
                    location: "California, United States",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Keelan Masraf",
                    title: "Developer",
                    location: "Allentown, US",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Nirem Mepleez",
                    title: "Product Designer",
                    location: "Dublin, Ireland",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                ].map((person, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-xl shadow-md text-center p-4"
                  >
                    {/* Top gradient strip */}
                    <div className="bg-[#ff77e3] w-full h-[70px] rounded-t-2xl" />

                    {/* Close Button */}
                    <button className="absolute text-2xl top-[-2px] right-1 text-[#141414] font-bold">
                      ×
                    </button>

                    {/* Avatar */}
                    <div>
                      <img
                        src={person.img}
                        alt={person.name}
                        className="relative bottom-9 w-20 h-20 mx-auto rounded-full object-cover border-4 border-white shadow-md "
                      />
                    </div>

                    {/* Info */}
                    <h3 className="mb-3 text-[#141414] font-bold">
                      {person.name}
                    </h3>
                    <p className="text-sm text-[#141414]">{person.title}</p>
                    <p className="text-sm text-[#141414]">{person.location}</p>

                    {/* Button */}
                    <button className="mt-3 text-sm font-semibold px-4 py-1 border border-pink-400 text-pink-500 rounded-full hover:bg-pink-50 transition">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>

              {/* See more */}
              <div className="text-center mt-6 mb-6">
                <button className="text-lg font-semibold text-[#141414] hover:underline">
                  See more &gt;
                </button>
              </div>
            </div>
            {/* Portfolio section */}
            <div className="max-w-5xl mx-auto">
              <img src={Portfolio} alt="" />
            </div>

            {/* People in your area */}
            <div
              className="flex flex-col justify-center items-center bg-[#fff] rounded-lg shadow-lg max-w-5xl mx-auto"
              style={{ fontFamily: "Urbanist" }}
            >
              <h2 className="text-center text-xl font-semibold text-[#141414] mb-4 mt-4">
                People in your area
              </h2>

              {/* Card Grid */}
              <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  {
                    name: "Unem Plaid",
                    title: "Web Designer",
                    location: "Dublin, Ireland",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Anita Job",
                    title: "Digital Creator",
                    location: "Dublin, Ireland",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Diane Ensign",
                    title: "HR Specialist",
                    location: "California, United States",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Keelan Masraf",
                    title: "Developer",
                    location: "Allentown, US",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Nirem Mepleez",
                    title: "Product Designer",
                    location: "Dublin, Ireland",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                ].map((person, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-xl shadow-md text-center p-4"
                  >
                    {/* Top gradient strip */}
                    <div className="bg-[#ff77e3] w-full h-[70px] rounded-t-2xl" />

                    {/* Close Button */}
                    <button className=" cursor-pointer absolute text-2xl top-[-2px] right-1 text-[#141414] font-bold">
                      ×
                    </button>

                    {/* Avatar */}
                    <div>
                      <img
                        src={person.img}
                        alt={person.name}
                        className="relative bottom-9 w-20 h-20 mx-auto rounded-full object-cover border-4 border-white shadow-md "
                      />
                    </div>

                    {/* Info */}
                    <h3 className="mb-3 text-[#141414] font-bold">
                      {person.name}
                    </h3>
                    <p className="text-sm text-[#141414]">{person.title}</p>
                    <p className="text-sm text-[#141414]">{person.location}</p>

                    {/* Button */}
                    <button className="mt-3 text-sm font-semibold px-4 py-1 border border-pink-400 text-pink-500 rounded-full hover:bg-pink-50 transition">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>

              {/* See more */}
              <div className="text-center mt-6 mb-6">
                <button className="text-lg font-semibold text-[#141414] hover:underline">
                  See more &gt;
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="mt-9">
        <Footer />
      </div>
    </>
  );
};

export default TopTalent;
