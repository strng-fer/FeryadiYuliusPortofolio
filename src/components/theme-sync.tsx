"use client";

import { useEffect } from "react";

export function ThemeSync() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch (e) {}

      if (stored === "dark") {
        document.documentElement.classList.add("dark");
      } else if (stored === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        // Fallback to browser/system preference
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    updateTheme();

    const handleMediaChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch (e) {}

      // Only automatically toggle if user hasn't explicitly set a preference
      if (!stored) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
      return () => mediaQuery.removeListener(handleMediaChange);
    }
  }, []);

  return null;
}
