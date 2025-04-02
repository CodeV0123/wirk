import React from "react";
// import bgcolor from "./assets/Group 30.png";
import footerlogo from "./assets/wirk logo 6.png";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-500 to-pink-400 text-white mt-auto font-urbanist">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <img src={footerlogo} alt="Wirk Logo" className="h-16 mb-2" />
            <p className="text-sm ">
              Find the best talent, place the perfect job.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">›</span>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">›</span>
                  <a href="#blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">›</span>
                  <a href="#careers" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">›</span>
                  <a href="#privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">›</span>
                  <a href="#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">›</span>
                  <a href="#faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {date} Wirk. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#cookies" className="hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
