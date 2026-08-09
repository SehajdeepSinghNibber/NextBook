"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ModeToggle() {
  const [theme, setTheme] = React.useState<string>(() => {
    if (typeof window === "undefined") return "luxury";
    return (
      localStorage.getItem("theme") ||
      document.documentElement.getAttribute("data-theme") ||
      "luxury"
    );
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="btn btn-ghost ml-3"
      onClick={() => setTheme((t) => (t === "luxury" ? "retro" : "luxury"))}
      aria-label="Toggle theme"
    >
      {theme === "luxury" ? <SunIcon /> : <MoonIcon />} 
    </button>
  );
}
