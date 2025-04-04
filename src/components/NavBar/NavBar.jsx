import React from "react";
import logo from "./assets/wirk.png";
import bell from "./assets/bell.png";
import question from "./assets/question.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white py-4 px-8 shadow-md">
      <ul className="flex items-center justify-between w-full max-w-[1500px] mx-auto">
        {/* Logo Section */}
        <li>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="h-20 w-30 cursor-pointer"
          />
        </li>

        {/* Navigation Links */}
        <div
          className="flex gap-20 text-[#000] font-medium text-base"
          style={{ fontFamily: "Urbanist" }}
        >
          <li className="cursor-pointer hover:text-[#f26d40]">Dashboard</li>
          <li
            className="cursor-pointer hover:text-[#f26d40]"
            onClick={() => navigate("/jobpost")}
          >
            Job Posts
          </li>
          <li className="cursor-pointer hover:text-[#f26d40]">Applications</li>
          <li className="cursor-pointer hover:text-[#f26d40]">Top Talent</li>
          <li className="cursor-pointer hover:text-[#f26d40]">Shortlist</li>
        </div>

        {/* Notification & Profile Section */}
        <div className="flex items-center gap-4">
          <li>
            <img
              src={bell}
              alt="Notifications"
              className="h-5 w-5 cursor-pointer"
            />
          </li>
          <li>
            <img src={question} alt="Help" className="h-5 w-5 cursor-pointer" />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg" // Placeholder Profile image
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-gray-300 cursor-pointer"
            />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
