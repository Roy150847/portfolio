import React from "react";
import { SiCplusplus, SiJavascript, SiC, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiNodedotjs, SiGit, SiGithub, SiMongodb, SiSupabase } from "react-icons/si";
import { FaProjectDiagram, FaJava } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

function Skills() {
  return (
    <section className="flex flex-col items-center mt-12 gap-8">
      <h2 className="text-5xl font-bold mb-2 text-[#8e3d79]">Skills & Tools</h2>

      {/* Programming Languages */}
      <div className="w-full max-w-3xl mb-6">
        <h4 className="text-xl font-semibold mb-3 text-left text-[#8e3d79]">Programming Languages</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiCplusplus className="text-3xl text-blue-900" />
            <span>C++</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiJavascript className="text-3xl text-yellow-400" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiC className="text-3xl text-blue-800" />
            <span>C</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <FaJava className="text-3xl text-[#007396]" />
            <span>Java</span>
          </div>
        </div>
      </div>

      {/* Concepts */}
      <div className="w-full max-w-3xl mb-6">
        <h4 className="text-xl font-semibold mb-3 text-left text-[#8e3d79]">Concepts</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <FaProjectDiagram className="text-3xl text-purple-800" />
            <span>OOPS</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <GiNetworkBars className="text-3xl text-violet-900" />
            <span>DSA</span>
          </div>
        </div>
      </div>

      {/* Web Development */}
      <div className="w-full max-w-3xl mb-6">
        <h4 className="text-xl font-semibold mb-3 text-left text-[#8e3d79]">Web Development</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiHtml5 className="text-3xl text-orange-500" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiCss3 className="text-3xl text-blue-600" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiReact className="text-3xl text-cyan-400" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiTailwindcss className="text-3xl text-sky-400" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiNodedotjs className="text-3xl text-green-600" />
            <span>Node.js</span>
          </div>
        </div>
      </div>

      {/* Version Control */}
      <div className="w-full max-w-3xl mb-6">
        <h4 className="text-xl font-semibold mb-3 text-left text-[#8e3d79]">Version Control</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiGit className="text-3xl text-orange-700" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiGithub className="text-3xl text-zinc-900" />
            <span>GitHub</span>
          </div>
        </div>
      </div>

      {/* Database */}
      <div className="w-full max-w-3xl mb-6">
        <h4 className="text-xl font-semibold mb-3 text-left text-[#8e3d79]">Database</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiMongodb className="text-3xl text-green-700" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 rounded bg-white shadow-lg">
            <SiSupabase className="text-3xl text-green-500" />
            <span>Supabase</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
