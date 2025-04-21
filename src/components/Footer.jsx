import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="bg-[#f9f9f9] mt-16 py-6 border-t border-gray-200 w-full">
      <div className="w-full px-4 flex flex-col items-center space-y-4">

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/sumit-kumar-br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaLinkedin className="w-6 h-6 text-[#0A66C2]" /> {/* LinkedIn icon */}
          </a>
          <a
            href="https://www.instagram.com/timusroy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaInstagram className="w-6 h-6 text-[#E4405F]" /> {/* Instagram icon */}
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-lg font-medium">Call: 9304309284</p>
          <p className="text-lg font-medium">Write: roys930430@gmail.com</p>
        </div>

        {/* Powered by Wix */}
        <div className="text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Sumit Kumar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
