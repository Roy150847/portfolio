import React from "react";

function Resume() {
  return (
    <div className="min-h-screen px-4 py-10 mt-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-5xl font-extrabold text-[#8e3d79] mb-4">Resume</h2>
          <a
            href="/public/assets/Sumit_Kumar_CV.pdf"
            download
            className="inline-block bg-[#323241] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#444654] transition-colors"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Training Card */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-3xl font-bold text-[#323241] mb-6">Training</h2>
          <div>
            <h3 className="text-xl font-semibold text-[#8e3d79] mb-1">
              Summer Training in Data Structures & Algorithms
            </h3>
            <p className="text-gray-600">Board Infinity</p>
            <p className="text-sm text-gray-500 mb-4">May 2024 – June 2024</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Learned DSA concepts like sorting, searching, linked lists, stacks, queues, trees in C++.</li>
              <li>Built a Library Management System using DSA techniques for book cataloging and user management.</li>
              <li>Improved problem-solving skills through coding challenges and complexity optimization.</li>
            </ul>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-3xl font-bold text-[#323241] mb-6">Education</h2>
          <div>
            <h3 className="text-xl font-semibold text-[#8e3d79]">Lovely Professional University</h3>
            <p className="text-gray-600">Phagwara</p>
            <p className="text-sm text-gray-500 mb-4">2022 – 2026</p>
            <p className="text-gray-700 mb-2">B.Tech in Computer Science & Engineering</p>
            <p className="text-gray-700 font-medium">CGPA: 8.08</p>
          </div>
        </div>

        {/* Skillset Card */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-3xl font-bold text-[#323241] mb-6">Professional Skillset</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <div>
              <h4 className="font-semibold text-lg mb-2">🖥 Programming Languages</h4>
              <p>C++, Java, C, JavaScript</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">🖥 Frontend Development</h4>
              <p>React.js, Tailwind CSS</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">🖥 Backend Development</h4>
              <p>Node.js</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">🖥 Databases</h4>
              <p>MongoDB, Supabase</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">🖥 Tools & Platforms</h4>
              <p>Git, VS Code, Postman, Figma</p>
            </div>

          </div>
        </div>

        {/* Languages Card */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-3xl font-bold text-[#323241] mb-6">Languages</h2>
          <p><strong>English:</strong> Good</p>
          <p><strong>Hindi:</strong> Proficient</p>
        </div>

      </div>
    </div>
  );
}

export default Resume;
