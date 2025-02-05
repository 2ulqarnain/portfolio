import { cn } from "@/app/utils";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const DarkModeButton: React.FC<{}> = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };
  return (
    <button
      onClick={toggleDarkMode}
      className={cn(
        "absolute top-4 right-4 p-2 rounded-full hover:text-zinc-500",
        isDarkMode ? "text-zinc-600" : "text-zinc-400",
      )}
    >
      {isDarkMode ? (
        <FaSun className="h-6 w-6" />
      ) : (
        <FaMoon className="h-6 w-6" />
      )}
    </button>
  );
};

export default DarkModeButton;
