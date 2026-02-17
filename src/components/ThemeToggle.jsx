export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-full bg-roseGold text-white dark:bg-antiqueGold dark:text-black"
    >
      Toggle Mode
    </button>
  );
}
