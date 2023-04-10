import React, { useState } from "react";
import "./App.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="m-4 w-full text-3xl font-semibold text-[#00df9a]">
        REACT.
      </h1>
      <ul className="hidden md:flex">
        <li className="px-4">Home</li>
        <li className="px-4">Company</li>
        <li className="px-4">Resources</li>
        <li className="px-4">About</li>
        <li className="px-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? (
          <AiOutlineClose size={20} onClick={setNav} />
        ) : (
          <AiOutlineMenu size={20} onClick={setNav} />
        )}
      </div>
      <div
        className={
          !nav
            ? "small-nav md:hidden fixed left-0 h-full top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] transition-all duration-500 ease-in-out"
            : "small-nav fixed left-[-100%]"
        }
      >
        <h1 className="m-4 w-full text-3xl font-semibold text-[#00df9a]">
          REACT.
        </h1>
        <ul className="p-4 uppercase">
          <li className="px-4 py-4 border-b border-gray-600">Home</li>
          <li className="px-4 py-4 border-b border-gray-600">Company</li>
          <li className="px-4 py-4 border-b border-gray-600">Resources</li>
          <li className="px-4 py-4 border-b border-gray-600">About</li>
          <li className="px-4 py-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
