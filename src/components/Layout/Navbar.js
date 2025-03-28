"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-300">Navbar</h1>
        <ul className="flex space-x-6">
          <li className="text-yellow-300 hover:text-gray-200 cursor-pointer">Home</li>
          <li className="text-yellow-300 hover:text-gray-200 cursor-pointer">About</li>
          <li className="text-yellow-300 hover:text-gray-200 cursor-pointer">Services</li>
          <li className="text-yellow-300 hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
