import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import option1 from "../JobPost/assets/options1.png";
import option2 from "../JobPost/assets/option2.png";
import option3 from "../JobPost/assets/option3.png";
import bell from "../JobPost/assets/bell.png";
import { X } from "lucide-react";

import digital from "./assets/digital.png";
import research from "./assets/research.png";
import view from "./assets/view.png";
import verified from "./assets/verified.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex px-[150px] py-6 gap-6">
        {/* Sidebar */}
        <aside className="w-[22%] space-y-6">
          {/* Application Card */}
          <div className=" flex flex-col items-center justify-center bg-[#fff] rounded-lg shadow-lg">
            <p
              className="bg-gradient-to-r from-[#e9532b] to-[#f992ec] text-white w-full h-[65px] text-center rounded-t-lg font-semibold text-lg"
              styles={{ fontFamily: "Urbanist" }}
            >
              Application Panding
            </p>
            <span className="text-[#141414] font-semibold text-8xl mt-6">
              15
            </span>
            <p className="text-xl font-normal text-[#141414] mt-6">
              15 pending
            </p>
            <p className="text-sm text-center font-normal flex-wrap text-[#141414] mt-2 mb-15">
              Still need to receive <br /> a response, hang in tight!
            </p>
          </div>

          {/* Navigation Boxes */}
          <div
            className="space-y-1 bg-white p-3 rounded-xl shadow flex flex-col gap-2 text-[#141414]"
            style={{ fontFamily: "Urbanist" }}
          >
            <div className="p-3 flex items-center cursor-pointer hover:bg-pink-50 font-medium text-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <img src={option1} alt="My Preferences Icon" />
              </div>
              <span>My Preferences</span>
            </div>
            <div className="p-3 flex items-center cursor-pointer hover:bg-pink-50 font-medium text-lg">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <img src={option2} alt="Saved Jobs Icon" />
              </div>
              <span>Saved Jobs</span>
            </div>
            <div className="p-3 flex items-center cursor-pointer hover:bg-pink-50 font-medium text-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <img src={option3} alt="Insights Icon" />
              </div>
              <span>Insights</span>
            </div>
          </div>
        </aside>
        {/* Main section */}
        <main className="w-[78%] space-y-4">
          {/* Analysis */}
          <div className="flex flex-col justify-center items-center bg-[#fff] rounded-lg shadow-lg max-w-4xl mx-auto">
            <p
              className=" mx-auto bg-gradient-to-r from-[#e9532b] to-[#f992ec] text-white w-full h-[65px] text-center rounded-t-lg font-semibold text-lg"
              styles={{ fontFamily: "Urbanist" }}
            >
              Analysis
            </p>
            <div className=" w-full  ">
              <ul
                className="text-4xl mt-6 p-9 flex items-center justify-between gap-6"
                style={{ fontFamily: "Urbanist" }}
              >
                <li className="flex flex-col items-center justify-center ">
                  <img src={digital} alt="Digital Icon" />
                  <p className="text-xl font-medium mt-6">11 CV impressions</p>
                  <p className="text-sm font-normal text-[#141414] mt-2 mb-10.5">
                    See who’s been impressed by your CV.
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center ">
                  <img src={view} alt="View Icon" />
                  <p className="text-xl font-medium mt-6">14 Profile views</p>
                  <p className="text-sm font-normal text-[#141414] mt-2 mb-10.5">
                    See who’s been keeping an eye on you.
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center ">
                  <img src={research} alt="Reasearch Icon" />
                  <p className="text-xl font-medium mt-6">1 Search Pop up</p>
                  <p className="text-sm font-normal text-[#141414] mt-2 mb-10.5">
                    Let’s see how often you appear in searches.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Notification Alert */}
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md flex items-center justify-between w-full max-w-4xl mx-auto">
            {/* Left Section: Bell + Text + Button */}
            <div className="flex items-center space-x-15">
              {/* Bell with red dot */}
              <div className="relative">
                <img src={bell} alt="Bell" />
              </div>

              {/* Message + Button */}
              <div
                className="flex flex-col items-start  gap-2"
                style={{ fontFamily: "Urbanist" }}
              >
                <h2 className="text-lg text-black font-medium mb-2 sm:mb-0">
                  Would you like to be notified on new opportunities?
                </h2>
                <button className="bg-[#ff77e3]  text-white text-lg font-semibold py-2 px-9 rounded-full transition">
                  Yes Please!
                </button>
              </div>
            </div>

            {/* Close Icon */}
            <X className="text-black cursor-pointer mb-20" />
          </div>

          {/* Verified */}
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md flex items-center justify-between w-full max-w-4xl mx-auto">
            {/* Left Section: Verified + Text + Button */}
            <div className="flex items-center space-x-15">
              {/* Bell with red dot */}
              <div className="relative">
                <img src={verified} alt="Bell" />
              </div>

              {/* Message + Button */}
              <div
                className="flex flex-col items-start  gap-2"
                style={{ fontFamily: "Urbanist" }}
              >
                <h2 className="text-lg text-black font-medium mb-2 sm:mb-0">
                  Want to make your profile look better?
                </h2>
                <p className="text-[#141414] test-sm font-normal">
                  Use our tools to grow and perfect your profile to make you
                  stand out above the rest.
                </p>
                <button className="bg-[#ff77e3]  mt-3 text-white text-lg font-semibold py-2 px-9 rounded-full transition">
                  Yes Please!
                </button>
              </div>
            </div>

            {/* Close Icon */}
            <X className="text-black cursor-pointer mb-20" />
          </div>
        </main>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
