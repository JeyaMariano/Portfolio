import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-80 bg-black text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-red-400">Home</a></li>
          <li><a href="#about" className="hover:text-red-400">About</a></li>
          <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
