import React from "react";

function Projects() {
  return (
    <section className="mt-12">
      <h2 className="text-5xl font-bold mb-6 text-center text-[#8e3d79]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Certificate Management System */}
        <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-zinc-200 flex flex-col items-center p-6 min-h-[340px]">
          <img src="/public/assets/CMS.png" alt="Certificate Management System" className="w-full h-32 object-cover rounded mb-4" />
          <div className="text-xl font-bold mb-2">Certificate Management System</div>
          <div className="text-zinc-600 mb-2">A robust web app for securely storing, generating, and managing digital certificates with user-friendly dashboard, built for institutions.</div>
          <div className="flex gap-2 mt-auto text-sm">
            <span className="bg-[#61dafb] text-[#323241] px-2 py-1 rounded">React</span>
            <span className="bg-[#47A248] text-[#fff] px-2 py-1 rounded">MongoDB</span>
            <span className="bg-[#243e1a] text-[#fff] px-2 py-1 rounded">Express.js</span>
            <span className="bg-[#339933] text-[#fff] px-2 py-1 rounded">Node.js</span>
          </div>
        </div>

        {/* AI Tools Explorer */}
        <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-zinc-200 flex flex-col items-center p-6 min-h-[340px]">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=600&q=80" alt="AI Tools Explorer" className="w-full h-32 object-cover rounded mb-4" />
          <div className="text-xl font-bold mb-2">AI Tools Explorer</div>
          <div className="text-zinc-600 mb-2">A curated directory to discover, compare, and demo trending AI tools—personalized and fast, using serverless Supabase backend.</div>
          <div className="flex gap-2 mt-auto text-sm">
            <span className="bg-[#61dafb] text-[#323241] px-2 py-1 rounded">React</span>
            <span className="bg-[#38bdf8] text-[#fff] px-2 py-1 rounded">Tailwind CSS</span>
            <span className="bg-[#3ecf8e] text-[#323241] px-2 py-1 rounded">Supabase</span>
          </div>
        </div>

        {/* Weather App */}
        <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-zinc-200 flex flex-col items-center p-6 min-h-[340px]">
          <img src="/public/assets/Weather.png" alt="Weather App" className="w-full h-32 object-cover rounded mb-4" />
          <div className="text-xl font-bold mb-2">Weather App</div>
          <div className="text-zinc-600 mb-2">A simple and responsive app that shows live local weather using clean UI, built with HTML, CSS and JS and classic web technologies.</div>
          <div className="flex gap-2 mt-auto text-sm">
            <span className="bg-[#e34c26] text-[#fff] px-2 py-1 rounded">HTML</span>
            <span className="bg-[#264de4] text-[#fff] px-2 py-1 rounded">CSS</span>
            <span className="bg-[#f7df1e] text-[#323241] px-2 py-1 rounded">JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
