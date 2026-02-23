import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-12 h-12 flex items-center justify-center
      rounded-full border
      border-roseGold dark:border-antiqueGold
      bg-white/30 dark:bg-black/40
      backdrop-blur-md
      shadow-lg
      transition-all duration-300
      hover:scale-110"
    >
      {darkMode ? (
        <Sun className="text-antiqueGold" size={20} />
      ) : (
        <Moon className="text-roseGold" size={20} />
      )}
    </button>
  );
}