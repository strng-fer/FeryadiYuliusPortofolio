"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);

    // Watch for class changes on documentElement
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    }
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={showLabel ? "default" : "icon"}
        className={`relative ${className}`}
        aria-label="Toggle theme"
      >
        <span className="h-5 w-5 opacity-0" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size={showLabel ? "default" : "icon"}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative font-headline hover:bg-accent/15 transition-all pixel-border-interactive ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon-to-sun" : "sun-to-moon"}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
          {showLabel && (
            <span className="text-sm font-medium">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
