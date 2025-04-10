import { useContext } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import ThemeContext from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    theme === "light" && setTheme("dark");
    theme === "dark" && setTheme("light");
  };
  return (
    <div className="flex mr-2">
      <button
        onClick={handleTheme}
        className="cursor-pointer text-2xl text-red-500"
      >
        {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
