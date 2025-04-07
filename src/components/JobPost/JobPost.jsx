import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Bell, X } from "lucide-react";
import UXUI from "../JobPost/assets/UXUI.png";
import Graphic from "../JobPost/assets/GraphicDesigner.png";
import Web from "../JobPost/assets/WebDev.png";
import union from "../JobPost/assets/Union.png";
import bell from "../JobPost/assets/bell.png";
import option1 from "../JobPost/assets/options1.png";
import option2 from "../JobPost/assets/option2.png";
import option3 from "../JobPost/assets/option3.png";

const JobPost = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      <div className="flex px-[150px] py-6 gap-6">
        {/* Sidebar */}
        <aside className="w-[22%] space-y-6">
          {/* Profile Card */}
          <div className="bg-white p-4 rounded-2xl shadow h-[250px]">
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-[#ff77e3]  w-76 h-20 rounded-t-lg"></div>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 w-25 h-25 rounded-full border-4 border-white"
                />
              </div>
            </div>
            <div
              className="mt-12 text-center"
              style={{ fontFamily: "Urbanist" }}
            >
              <h3 className="font-semibold">Anita Job</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <p className="text-xs text-gray-400 mt-8">
                Durban, KwaZulu-Natal
              </p>
            </div>
          </div>

          {/* CV Button */}
          <div
            className="bg-white p-4 rounded-2xl shadow relative h-[150px] flex flex-col items-center justify-center"
            style={{ fontFamily: "Urbanist" }}
          >
            <X className="absolute top-2 right-2 h-5 w-5 text-[#141414] text-center" />
            <p className="mb-2 text-base text-[#141414] font-medium">
              Don't have a CV?
            </p>
            <button className="bg-[#ff77e3] text-white py-2 px-4 w-full rounded-full text-sm">
              Let's make one!
            </button>
          </div>

          {/* Navigation Boxes */}
          <div
            className="space-y-1 bg-white p-3 rounded-xl shadow flex flex-col gap-2 text-[#141414]"
            style={{ fontFamily: "Urbanist" }}
          >
            <div className="p-3 flex items-center cursor-pointer hover:bg-pink-50">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <img src={option1} alt="My Preferences Icon" />
              </div>
              <span>My Preferences</span>
            </div>
            <div className="p-3 flex items-center cursor-pointer hover:bg-pink-50">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <img src={option2} alt="Saved Jobs Icon" />
              </div>
              <span>Saved Jobs</span>
            </div>
            <div className="p-3 flex items-center cursor-pointer hover:bg-pink-50">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <img src={option3} alt="Insights Icon" />
              </div>
              <span>Insights</span>
            </div>
          </div>

          {/* Suggested Searches */}
          <div
            className="bg-white p-4 rounded-2xl shadow flex flex-col gap-2"
            style={{ fontFamily: "Urbanist" }}
          >
            <h4 className="font-semibold text-base mb-3 text-[#141414]">
              Suggested job searches
            </h4>
            <div className="space-y-2">
              {[
                "Digital Designer",
                "Freelance Designer",
                "Graphic Designer",
                "UX/UI Designer",
              ].map((item) => (
                <div
                  key={item}
                  className=" flex items-center gap-9 bg-white border border-[#ff77e3] text-[#ff77e3] text-lg font-semibold px-3 py-2 rounded-full mr-2 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-search-icon lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-[78%] space-y-4">
          {/* Question Card */}
          <div
            className="bg-white p-6 rounded-2xl shadow-md flex justify-center items-center w-full  max-w-4xl mx-auto"
            style={{ fontFamily: "Urbanist" }}
          >
            <div className="w-full flex flex-col items-center">
              {/* Header Row */}
              <div className="flex justify-between items-start w-full mb-4">
                <h2 className="text-center w-full text-base font-semibold text-[#141414]">
                  Can we help you look for your next dream job?
                </h2>
                <X className="cursor-pointer text-[#141414]" />
              </div>

              {/* Buttons */}
              <div className="flex space-x-9 mt-2">
                <button className="bg-[#ff77e3] text-white px-5 py-2 rounded-full text-sm font-medium shadow">
                  Yes Please!
                </button>
                <button className="border border-[#e9532b] text-[#e9532b] px-5 py-2 rounded-full text-sm font-medium bg-white">
                  I'm just Browsing
                </button>
              </div>
            </div>
          </div>
          {/* Top Opportunities */}
          <div
            className="bg-white p-6 rounded-2xl shadow-md w-full mx-auto  max-w-4xl"
            style={{ fontFamily: "Urbanist" }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[#141414]">
                Top Opportunities for you!
              </h3>
              <p className="text-sm text-[#141414]">
                Based on your C.V. Preferences and Search History.
              </p>
            </div>

            {/* Job Listings */}
            <div className="space-y-6 w-full">
              {[
                {
                  title: "UX/ UI Designer",
                  company:
                    "Zapp Apps, City of Cape Town, Western Cape, South Africa",
                  location: "Remote",
                  image: UXUI,
                },
                {
                  title: "Graphic Designer",
                  company:
                    "Bibbity Boppity Books, Durban, KwaZulu-Natal, South Africa",
                  location: "On site",
                  image: Graphic,
                },
                {
                  title: "Web Designer",
                  company:
                    "Charlotta’s Web Design, Durban, KwaZulu-Natal, South Africa",
                  location: "On site",
                  image: Web,
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="flex items-center border-b-[#ececec] pb-4 mx-[150px] last:border-b-0 last:pb-0"
                >
                  <img
                    src={job.image}
                    alt="company"
                    className="rounded-xl w-14 h-14 object-cover mr-9"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-[#ff77e3]">
                      {job.title}
                    </h4>
                    <p className="text-sm text-[#b8b8b8] mt-1">{job.company}</p>
                    <p className="text-sm font-medium text-[#141414] mt-1">
                      {job.location}
                    </p>
                  </div>
                  <X className="text-[#141414] cursor-pointer ml-4" />
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center mt-6">
              <button className="text-xl text-[#141414] font-semibold flex items-center justify-center space-x-1 hover:underline">
                <span>See more</span>
                <img src={union} alt="arrow" className="mx-4"></img>
              </button>
            </div>
          </div>

          {/* Notification Alert */}
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md flex items-center justify-between w-full max-w-4xl mx-auto">
            {/* Left Section: Bell + Text + Button */}
            <div className="flex items-center space-x-4">
              {/* Bell with red dot */}
              <div className="relative">
                <img src={bell} alt="Bell" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
              </div>

              {/* Message + Button */}
              <div
                className="flex flex-col items-start  gap-2"
                style={{ fontFamily: "Urbanist" }}
              >
                <span className="text-lg text-black font-medium mb-2 sm:mb-0">
                  Would you like to be notified on new opportunities?
                </span>
                <button className="bg-[#ff77e3] hover:bg-pink-500 text-white text-lg font-semibold py-2 px-7 rounded-full transition">
                  Yes Please!
                </button>
              </div>
            </div>

            {/* Close Icon */}
            <X className="text-black cursor-pointer mb-20" />
          </div>
        </main>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default JobPost;
