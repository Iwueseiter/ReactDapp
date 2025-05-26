import { Routes, Route } from "react-router-dom";
import About from "./Components/about.jsx";
import NavBar from "./Components/navBar.jsx";
import Footer  from "./Components/footer.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <hr className="border-gray-300 p-5" />
      <div className="text-blue font-bold text-center text-3xl text-blue-500">
        Welcome to Readduff Hub
      </div>
      <div className="flex justify-between m-5">
        <img src="../public/img1.jpg" alt="Hero-image" />
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt dicta dolores veniam non ratione enim quibusdam 
          ducimus labore officia iure, sint fugit. Laudantium aut 
          reprehenderit ducimus a porro nemo magni.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}
