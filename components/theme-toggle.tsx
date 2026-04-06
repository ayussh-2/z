"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    console.log(theme);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
    }

    const toggleTheme = () => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("system");
        else setTheme("light"); // if 'system' or undefined
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all active:scale-75 group relative overflow-hidden"
            aria-label="Toggle theme"
            title={`Current theme: ${theme}. Click to switch.`}
        >
            <div className="relative w-5 h-5">
                <Sun
                    className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                        theme === "light"
                            ? "scale-100 rotate-0 opacity-100 text-amber-500"
                            : "scale-0 rotate-90 opacity-0"
                    }`}
                />
                <Moon
                    className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                        theme === "dark"
                            ? "scale-100 rotate-0 opacity-100 text-blue-400"
                            : "scale-0 -rotate-90 opacity-0"
                    }`}
                />
                <Monitor
                    className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                        theme === "system"
                            ? "scale-100 rotate-0 opacity-100 text-on-surface-variant"
                            : "scale-0 rotate-180 opacity-0"
                    }`}
                />
            </div>
        </button>
    );
}
