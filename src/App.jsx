import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

// Scroll handler wrapper for homepage
function ScrollToAboutWrapper() {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about") {
      const el = document.getElementById("about");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return <About />;
}

function App() {
  const certificateData = [
    {
      title: "MERN stack Certification",
      institution: "Geeks for geeks",
      date: "June 2024",
      image: "./assets/DSA.png"
    },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      institution: "Coursera",
      date: "April 2024",
      image: "./assets/Web.png"
    },
    {
      title: "Introduction to Generative AI",
      institution: "Google Cloud (Coursera)",
      date: "January 2024",
      image: "./assets/Gen Ai.png"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#97d7e1] text-[#323241] font-sans scroll-smooth">
        {/* Navbar */}
        <header className="w-full fixed top-0 left-0 bg-[#e7dae7] z-50 flex justify-between items-center px-8 py-6 shadow-md h-48">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#8e3d79]">Sumit Kumar</h1>
          <nav className="space-x-6 text-lg font-medium hidden md:block">
            <button
              onClick={() => {
                const isHome = window.location.pathname === "/";
                if (isHome) {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#about";
                }
              }}
              className="hover:text-[#8e3d79]"
            >
              About
            </button>
            <Link to="/skills" className="hover:text-[#8e3d79]">Skills</Link>
            <Link to="/resume" className="hover:text-[#8e3d79]">Resume</Link>
            <Link to="/projects" className="hover:text-[#8e3d79]">Projects</Link>
            <Link to="/certificates" className="hover:text-[#8e3d79]">Certifications</Link>
            <Link to="/achievements" className="hover:text-[#8e3d79]">Achievements</Link>
            <Link to="/contact" className="hover:text-[#8e3d79]">Contact</Link>
            
          </nav>
        </header>

        {/* Page Sections */}
        <main className="max-w-3xl mx-auto flex flex-col gap-16 px-2 pb-16 pt-44">
          <Routes>
            <Route path="/" element={<ScrollToAboutWrapper />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates certificates={certificateData} />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
