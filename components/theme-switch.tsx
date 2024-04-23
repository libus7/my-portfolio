"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from 'react-icons/bs'
import Social from "./Social";

export default function ThemeSwitch() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="-translate-y-[11rem] sm:fixed sm:-bottom-32 sm:right-5 flex sm:flex-col justify-center gap-4 mr-2">
      <Social />
      <button className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border borderBlack border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      >
        {theme === "light" ? ( <BsSun /> ) : ( <BsMoon /> )}
        
      </button>
    </div>
  );
}
