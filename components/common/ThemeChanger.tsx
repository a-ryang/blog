"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import SunIcon from "../icon/SunIcon";
import MoonIcon from "../icon/MoonIcon";

const ThemeChanger = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setIsMounted(true), []);

  const classNaems = "";

  return (
    <button
      type="button"
      aria-label="theme toggle button"
      className="flex items-center justify-center h-8 w-8 hover:bg-neutral-100 hover:dark:bg-dark-100 rounded-full transition-colors duration-200"
      onClick={() =>
        currentTheme == "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {isMounted && currentTheme === "light" ? (
        <MoonIcon className="stroke-neutral-600" />
      ) : (
        <SunIcon className="stroke-neutral-50" />
      )}
    </button>
  );
};

export default ThemeChanger;
