import React from "react";
import { Icon } from "@iconify/react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
export default function Header({
  city,
  country,
  isActivate,
  setActivate,
  darkMood,
  setDarkmood,
}) {
  return (
    <div>
      <div className=" content flex justify-between items-center text-[1.5rem] bg-white p-2 rounded-t-lg gap-5">
        <div className="flex content items-center gap-4">
          <Icon
            className="text-[1.5rem]"
            icon="fluent:weather-sunny-24-regular"
          />
          <p className="text-semibold">Weather</p>
          <p className="text-semibold">{country}</p>
          <p className="font-bold">{city}</p>
        </div>
        <div className=" rounded-lg flex gap-1 border-solid border p-1 ">
          <button
            onClick={() => setActivate((prevStatus) => !prevStatus)}
            className={`w-8 font-bold ${
              isActivate ? "bg-[gray]" : "bg-white"
            } rounded-l-lg`}
          >
            <Icon icon="ri:celsius-line" />
          </button>
          <button
            onClick={() => setActivate((prevStatus) => !prevStatus)}
            className={`w-8 font-bold ${
              !isActivate ? "bg-[gray]" : "bg-white"
            } rounded-r-lg`}
          >
            <Icon icon="mingcute:fahrenheit-line" />
          </button>
        </div>
        <div className="">
          {darkMood ? (
            <FaRegSun onClick={() => setDarkmood((prevState) => !prevState)} />
          ) : (
            <FaRegMoon onClick={() => setDarkmood((prevState) => !prevState)} />
          )}
        </div>
      </div>
      <p className="w-full h-1 bg-gray"></p>
    </div>
  );
}
