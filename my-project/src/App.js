import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/about.jsx";

export default function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4 mb-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

       <section>
        <h2 className="text-center p-5 m-2 md:bg-black sm:bg-green lg:text-2xl xl:text-4xl 2xl:text">News</h2>
        <p className="text-center text-3xl font-semibold">Exciting events and announcements</p>

        <div className="flex justify-between" >
          <div className="flex gap-5">
            <img src="" alt="" 
            className=" w-30 h-20"/>
            <p>Find us on linkedin</p>
            <p>09.12.2025</p>
          </div>
          <div>

            <a href="#read-more">Read More</a>
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}