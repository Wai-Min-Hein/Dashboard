import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";

import { PiMoon } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(StateContext);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");

    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');

  };

  return (
      <button onClick={handleThemeSwitcher}>{theme === "light" ? <MdOutlineLightMode  className="text-[22px] font-normal" /> : <PiMoon className="text-[22px] font-normal" />}</button>
  );
};

export default ThemeSwitcher;
