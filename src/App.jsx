import ThemeToggle from "./components/ThemeToggle";
import './App.css'

export default function App() {
  return (
     <div className="min-h-screen bg-ivory dark:bg-royalBlack text-black dark:text-white">
      <ThemeToggle />
      <h1 className="text-4xl font-serif text-roseGold dark:text-antiqueGold">
        Kriva Couture
      </h1>
    </div>
  );
}


