import React from 'react'
import { useEffect, useState } from "react";
import { CiLight } from 'react-icons/ci';
import { MdNightlight } from 'react-icons/md';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [darkMode]);
  return (
    <button
    type='button'
    className='theme-toggle'
    onClick={() => setDarkMode((previous) => !previous)}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
        {darkMode ? <CiLight size={24} /> : <MdNightlight size={22} />}
    </button>
  );
}

export default ThemeToggle