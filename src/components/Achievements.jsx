import React from "react";

function Achievements() {
  const achievements = [
    {
      title: "Dean's list in my University",
      description: "Among top 10% students in Lovely Professional University.",
      date: "Mar 2025",
      image: "/public/assets/Dean's-list.png",
    },
    {
      title: "160 Days of Code - GFG Challenge",
      description: "Participated in GeeksforGeeks long-term coding challenge, improving consistency and problem-solving skills.",
      date: "Ongoing",
      image: "/public/assets/Gfg.jpg"
    },

  ];

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-center text-[#8e3d79]">
          Achievements
      </h1>

      <div className="min-h-screen py-5 px-6 lg:px-20 mt-10">
        {/* Achievement Cards */}
        <div className="grid md:grid-cols gap-12">
          {achievements.map((ach, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-[#8e3d79] list-none">
              {/* Title above each card */}
              <h2 className="text-2xl font-semibold text-indigo-600 pb-5">
                {ach.title}
              </h2>
              <img src={ach.image} alt={ach.title} className="w-full h-auto rounded-md mb-4" />
              <div className="bg-gray-50 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                <p className="text-gray-700">{ach.description}</p>
                <p className="text-sm text-gray-500 mt-2">{ach.date}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
