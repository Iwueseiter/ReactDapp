import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/about.jsx";
import NavBar from "./Components/navBar.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <hr className="border-gray-300 p-5" />
      <h2 className="text-center p-5 m-2 lg:text-2xl xl:text-4xl 2xl:text">
        News
      </h2>
      <p className="text-center text-3xl font-semibold">
        Exciting events and announcements
      </p>

      <div className="flex justify-between">
        <div>
          <img src="" alt="" className="w-30 h-20" />
          <p>Find us on LinkedIn</p>
          <p>09.12.2025</p>
        </div>
        <div>
          <a href="#read-more">Read More</a>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4 mb-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}