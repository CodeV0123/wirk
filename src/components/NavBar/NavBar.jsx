import React, { useState } from "react";
import logo from "./assets/wirk.png";
import bell from "./assets/bell.png";
import question from "./assets/question.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    // { name: "Home Page", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Job Posts", path: "/jobpost" },
    { name: "Applications", path: "/applications" },
    { name: "Top Talent", path: "/top-talent" },
    { name: "Shortlist", path: "/shortlist" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white py-4 px-8">
      <div className="flex items-center justify-between w-full max-w-[1500px] mx-auto">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="h-20 w-30 cursor-pointer"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-[100px] left-0 w-full bg-white px-8 py-4 flex-col gap-4 text-[#000] font-medium text-base shadow-md md:shadow-none md:flex md:flex-row md:static md:w-auto md:py-0 md:px-0 md:gap-20 md:items-center`}
          style={{ fontFamily: "Urbanist" }}
        >
          {navLinks.map(({ name, path }) => (
            <li
              key={name}
              onClick={() => {
                navigate(path);
                setMenuOpen(false);
              }}
              className={`cursor-pointer hover:text-[#f26d40] ${
                isActive(path)
                  ? "text-[#f26d40] underline underline-offset-4"
                  : ""
              }`}
            >
              {name}
            </li>
          ))}
        </ul>

        {/* Notification & Profile Section */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src={bell}
            alt="Notifications"
            className="h-5 w-5 cursor-pointer"
          />
          <img src={question} alt="Help" className="h-5 w-5 cursor-pointer" />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full border-2 border-gray-300 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
