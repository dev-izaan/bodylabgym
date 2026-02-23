"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
    transparent?: boolean;
}

export function ThemeToggle({ transparent = false }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-10 h-10" />;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${transparent
                    ? "border border-white/40 bg-white/10 text-white hover:bg-white/20"
                    : "border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun size={18} strokeWidth={1.5} />
            ) : (
                <Moon size={18} strokeWidth={1.5} />
            )}
        </button>
    );
}
