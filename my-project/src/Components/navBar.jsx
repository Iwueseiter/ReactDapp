// import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <div>
      <header class="flex justify-between p-5">
        <h1 className="text-3xl font-bold">Readduff Hub</h1>
        <nav className="flex gap-5 mr-32 text-lg">
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        <Link to="/about" className="text-blue-500">
          About
        </Link>
         <Link to="/about" className="text-blue-500">
          Work Spaces
        </Link>
         <Link to="/about" className="text-blue-500">
         Services
        </Link>
         <Link to="/about" className="text-blue-500">
          Contact-us
        </Link>
      </nav>
      </header>
    </div>
  );
};

export default NavBar;
