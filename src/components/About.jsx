import React from "react";
import { FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="mt-20 px-4 scroll-mt-52">
      
      {/* Centered Section Heading */}
      <h2 className="text-5xl font-bold text-[#8e3d79] text-center mb-12">About</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        
        {/* Left Section */}
        <div className="bg-amber-50 rounded-2xl shadow-md w-full md:w-1/2 p-6 flex flex-col items-center h-[450px] md:h-[450px]">
          <img
            src="/public/assets/Profile.jpg"
            alt="Prateek Raj portrait"
            className="w-48 h-48 rounded-full border-4 border-[#323241] shadow-lg object-cover mb-6"
          />
          <h3 className="text-xl font-bold text-[#323241] mb-4">Connect with me</h3>
          <div className="flex gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/sumit-kumar-br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0e76a8] text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/timusroy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://leetcode.com/u/Sumit1308/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFA116] text-2xl hover:scale-110 transition-transform"
            >
              <FaCode />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <a
              href="/resume"
              className="bg-[#323241] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#444654] transition-colors"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="bg-[#8e3d79] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#a04c8d] transition-colors"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full h-[800px]">
          <h2 className="text-4xl font-extrabold mb-4 text-[#8e3d79]">Sumit Kumar</h2>
          <p className="text-zinc-700 text-lg mb-3">
            Hi, I'm Sumit Kumar, a passionate 3rd-year student aspiring to become a Software Engineer.
            My journey in tech has been an exciting adventure of continuous learning and growth.
          </p>

          <ul className="flex flex-wrap gap-3 mb-3 justify-start">
            <li className="bg-[#d6cbd5] text-[#323241] px-4 py-2 rounded-full font-semibold">Web Development</li>
            <li className="bg-[#c3c5d1] text-[#323241] px-4 py-2 rounded-full font-semibold">Software Engineering</li>
            <li className="bg-[#e1b4a8] text-[#323241] px-4 py-2 rounded-full font-semibold">DSA</li>
          </ul>

          <p className="text-zinc-700 text-lg mb-3">
            From mastering HTML, CSS, and JavaScript to diving deep into C++ and DSA, I've built a strong foundation for creating efficient, scalable solutions.
            My current focus is on expanding my web development skills and conquering complex algorithmic challenges.
          </p>

          <p className="text-zinc-700 text-lg mb-3">
            Driven by an insatiable curiosity and a desire to make a difference, I'm always eager to explore new technologies and methodologies.
            I believe in the power of code to transform ideas into impactful digital experiences.
          </p>

          <p className="text-zinc-700 text-lg font-semibold">
            Let's connect and collaborate to build the future of technology together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
