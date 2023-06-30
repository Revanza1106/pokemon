import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function PokeAPI() {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      console.log(res);
      setImg(res.data.sprites.front_default);
      setType(res.data.types[0].type.name);
    }

    getData();
  }, [Find]);

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name);
    setname("");
  };

  return (
    <>
      <div className="back">
        <div className=" grid justify-center items-center ">
          <h1 className="text-center text-5xl font-bold">
            <span className="text-purple-700">Pokemon</span>
            <span className="text-yellow-400">Finder</span>
          </h1>
          <img src={`${Img}`} alt="" className="h-[300px] w-[300px]" />
          <div className="text-3xl font-bold text-center rounded-md bg-purple-700 text-yellow-400 ">
            {Find.toUpperCase()}
          </div>
          <div className="text-2xl font-semibold text-center text-purple-700 bg-yellow-400 rounded-md">
            {Type}
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center items-center mt-3">
          {/* input */}
          <div className="bg-gray-200 flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[400px] place-content-center ">
            <AiOutlineSearch />
            <input
              className="bg-transparent p-2 w-full focus:outline-none"
              placeholder="Search Pokemon"
              type="text"
              onChange={Typename}
              value={name}
            />
          </div>
          <button
            className="bg-yellow-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            onClick={Search}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
