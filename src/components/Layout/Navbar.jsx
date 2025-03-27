"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Hamburger & Contact */}
        <div className="flex items-center">
          <button
            className="flex flex-col space-y-1 w-6 h-6 focus:outline-none"
            onClick={toggleNav}
          >
            <span className={`block w-full h-0.5 bg-black transition-all ${isNavOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-black transition-all ${isNavOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-black transition-all ${isNavOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
          <span className="ml-4 text-sm font-semibold">📞 +91 9031359720</span>
        </div>

        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Brand Logo" width={150} height={50} className="object-contain" />
        </div>

        {/* Right Side */}
        <div className="space-x-4">
          <Link href="/Explore_Our_Work" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg">Our Work</Link>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg">Request a Quote</button>
        </div>
      </div>

      {/* Fullscreen Nav Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-80 transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"} transition-transform`}>  
        <button className="absolute top-6 right-6 text-white text-3xl" onClick={closeNav}>✖</button>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-white text-lg">
          <Link href="/" className="hover:text-gray-300" onClick={closeNav}>Home</Link>
          <Link href="/about" className="hover:text-gray-300" onClick={closeNav}>About</Link>
          <div className="relative group">
            <Link href="/Services" className="hover:text-gray-300">Services</Link>
            <div className="absolute left-0 mt-2 bg-gray-900 p-4 rounded-lg hidden group-hover:block">
              <Link href="/Services_Web" className="block py-2 hover:text-gray-300">Web Development</Link>
              <Link href="/Services_App" className="block py-2 hover:text-gray-300">App Development</Link>
              <Link href="/Services_Seo" className="block py-2 hover:text-gray-300">SEO Optimization</Link>
              <Link href="/Services_Digital" className="block py-2 hover:text-gray-300">Digital Marketing</Link>
            </div>
          </div>
          <Link href="/Contact" className="hover:text-gray-300" onClick={closeNav}>Contact</Link>
          <Link href="/Team" className="hover:text-gray-300" onClick={closeNav}>Team</Link>
          <Link href="/Gallery" className="hover:text-gray-300" onClick={closeNav}>Gallery</Link>
          <Link href="/job" className="hover:text-gray-300" onClick={closeNav}>Career</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
