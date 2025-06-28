"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../../components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Moon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-1000
          dark:-rotate-90 dark:scale-0"
      />
      <Sun
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all
          duration-1000 dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}
