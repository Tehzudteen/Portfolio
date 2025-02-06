import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

//app rounter navbar to all pages
const App = () => {
  return (
    <Router>
      <div className=" flex flex-col col-span-4 min-h-screen  justify-between ">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="container min-h-screen flex justify-center  min-w-full">
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
