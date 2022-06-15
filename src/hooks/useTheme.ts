import { useEffect, useState } from "react";
import { darkTheme } from "../themes/dark";
import { girthTheme } from "../themes/girth";
import { lightTheme } from "../themes/light";

const useTheme = (): [string, (e: KeyboardEvent) => void, boolean, Object] => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (e: KeyboardEvent) => {
    if (e.metaKey) {
      setMode("girth");
    } else {
      if (theme === "light") {
        setMode("dark");
      } else {
        setMode("light");
      }
    }
  };

  const currentTheme = (theme) => {
    switch (theme) {
      case "dark":
        return darkTheme
      case "light":
        return lightTheme
      case "girth":
        return girthTheme
    
      default:
        return darkTheme
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
    setMounted(true);
  }, []);

  return [theme, toggleTheme, mounted, currentTheme];
};

export default useTheme;
