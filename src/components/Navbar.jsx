import React, { useState } from "react";
import { AiFillSetting, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { SiPokemon } from "react-icons/si";
import { TbPokeball } from "react-icons/tb";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center bg-purple-700  p-4">
      {/* side drawer */}
      <div className="flex items-center text-white">
        <div onClick={() => setNav(!Nav)} className="cursor-pointer">
          <AiOutlineMenu size={50} />
        </div>
        <div className=" hidden lg:flex ml-[10rem] bg-yellow-400 text-purple-700 rounded-full ">
          <SiPokemon size={50} />
        </div>
      </div>
      {/* title */}
      <div className=" flex items-center m  w-[200px] sm:w-[400px] lg:w-[500px] text-2xl sm:text-3xl lg:text-4xl px-2 lg:mr-[220px]">
        <h1>
          <span className="text-yellow-400">Pokemon</span>
          <span className="font-bold text-white">Ku</span>
        </h1>
      </div>
      {/* Mobile menu */}
      {/* Overly */}
      {Nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side Drawer */}
      <div
        className={
          Nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-yellow-400  z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-yellow-400  z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!Nav)}
          size={40}
          className="absolute right-4 top-4 cursor-pointer text-white"
        />
        <h2 className="text-3xl p-4">
          <span className="text-purple-700">Pokemon</span>
          <span className="font-bold text-white">Ku</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li className="text-2xl flex py-4 text-white">
              <TbPokeball size={35} className="mr-4" />
              Pokemons
            </li>
            <li className="text-2xl py-4 flex text-white">
              <HiTemplate size={35} className="mr-4" />
              Items
            </li>
            <li className="text-2xl text-white py-4 flex">
              <FaUserFriends size={35} className="mr-4" />
              Friends
            </li>
            <li className="text-2xl text-white py-4 flex">
              <AiFillSetting size={35} className="mr-4" />
              Prefences
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
