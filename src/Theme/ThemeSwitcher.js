"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="h-8 w-8 lg:w-12 lg:h-12 cursor-pointer p-2 border-2 border-accent rounded-full shadow-customShadow hover:shadow-customShadow focus:shadow-customShadow hover:shadow-accent  focus:shadow-accent transition-all ease-in-out flex justify-center items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MdOutlineDarkMode className="text-2xl animate-bounce text-accent"></MdOutlineDarkMode> : <CiLight className="text-2xl animate-bounce  text-accent"></CiLight>}
    </button>
  );
};
