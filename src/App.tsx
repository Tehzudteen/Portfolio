import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true); // ✅ Always show Navbar

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShowNavbar(e.clientY < 50); // ✅ Toggle only when moving mouse to top
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-between">
        {/* ✅ Navbar is OUTSIDE <Routes>, so it stays visible on all pages */}
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Navbar />
        </div>

        {/* ✅ Page content inside Routes */}
        <div className="container min-h-screen flex justify-center min-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
