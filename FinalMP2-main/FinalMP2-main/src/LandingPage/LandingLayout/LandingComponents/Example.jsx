import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Example = () => {
  const [selected, setSelected] = useState("light");

  const toggleColorScheme = () => {
    if (selected === "light") {
      document.documentElement.style.setProperty("--bg-color", "#ffffff");
      document.documentElement.style.setProperty("--text-color", "#000000");
      setSelected("dark");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#1a202c");
      document.documentElement.style.setProperty("--text-color", "#ffffff");
      setSelected("light");
    }
  };

  return (
    <div
      className={`grid h-screen place-content-center px-4 transition-colors`}
      style={{
        backgroundColor: `var(--bg-color)`,
        color: `var(--text-color)`,
      }}
    >
      <SliderToggle selected={selected} toggleColorScheme={toggleColorScheme} />
    </div>
  );
};

const SliderToggle = ({ selected, toggleColorScheme }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={toggleColorScheme}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={toggleColorScheme}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default Example;
