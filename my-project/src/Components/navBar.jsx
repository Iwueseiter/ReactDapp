import React from "react";

const NavBar = () => {
  return (
    <div>
      <header class="flex justify-between p-5">
        <h1 className="text-3xl font-bold">Readduff</h1>
        <nav className="flex gap-5 mr-32  text-lg">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#news">News</a>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
