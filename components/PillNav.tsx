"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import "./PillNav.css";

interface NavItem {
    label: string;
    href: string;
    ariaLabel?: string;
}

interface PillNavProps {
    items: NavItem[];
    activeHref?: string;
    className?: string;
    ease?: string;
    pillColor?: string;
    hoveredPillTextColor?: string;
    pillTextColor?: string;
    initialLoadAnimation?: boolean;
}

const PillNav = ({
    items,
    activeHref,
    className = "",
    ease = "power3.out",
    pillColor = "rgba(255,255,255,0.12)",
    hoveredPillTextColor = "#000000",
    pillTextColor,
    initialLoadAnimation = true,
}: PillNavProps) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const { theme, setTheme } = useTheme();
    const resolvedTheme = mounted ? theme : 'dark';
    const isDark = resolvedTheme === "dark";
    const defaultTextColor = isDark ? "#ffffff" : "#111111";
    const fallbackPillColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";

    const resolvedPillTextColor = pillTextColor ?? defaultTextColor;
    const resolvedPillBg = pillColor ?? fallbackPillColor;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const tlRefs = useRef<gsap.core.Timeline[]>([]);
    const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
    const navItemsRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach((circle, index) => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                if (!w || !h) return;

                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`,
                });

                const label = pill.querySelector(".pill-label");
                const hoverLabel = pill.querySelector(".pill-label-hover");

                if (label) gsap.set(label, { y: 0 });

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 1, ease, overwrite: "auto" }, 0);
                if (label) tl.to(label, { y: -(h + 4), duration: 0.8, ease, overwrite: "auto" }, 0);
                if (hoverLabel) {
                    gsap.set(hoverLabel, { y: h + 4, opacity: 0 });
                    tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.8, ease, overwrite: "auto" }, 0.1);
                }

                tlRefs.current[index] = tl;
            });
        };

        if (mounted) {
            layout();
            window.addEventListener("resize", layout);
            document.fonts?.ready?.then(layout).catch(() => { });
        }

        const menu = mobileMenuRef.current;
        if (menu) gsap.set(menu, { visibility: "hidden", opacity: 0 });

        if (initialLoadAnimation && mounted) {
            const navItems = navItemsRef.current;
            if (navItems) {
                gsap.from(navItems.querySelectorAll(".pill"), {
                    opacity: 0,
                    y: -6,
                    stagger: 0.05,
                    duration: 0.4,
                    ease,
                    delay: 0.1,
                });
            }
        }

        return () => window.removeEventListener("resize", layout);
    }, [items, ease, initialLoadAnimation, mounted]);

    const handleEnter = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    const handleLeave = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.35,
            ease: "power2.inOut",
            overwrite: "auto",
        });
    };

    const toggleMobileMenu = () => {
        const next = !isMobileMenuOpen;
        setIsMobileMenuOpen(next);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll(".hamburger-line");
            if (next) {
                gsap.to(lines[0], { rotation: 45, y: 3.5, duration: 0.4, ease });
                gsap.to(lines[1], { rotation: -45, y: -3.5, duration: 0.4, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.4, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.4, ease });
            }
        }

        if (menu) {
            if (next) {
                gsap.set(menu, { visibility: "visible" });
                gsap.fromTo(menu, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease });
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 12,
                    duration: 0.35,
                    ease,
                    onComplete: () => { gsap.set(menu, { visibility: "hidden" }); },
                });
            }
        }
    };

    const cssVars = {
        ["--pill-bg"]: resolvedPillBg,
        ["--hover-text"]: hoveredPillTextColor,
        ["--pill-text"]: resolvedPillTextColor,
    } as React.CSSProperties;

    return (
        <div className="pill-nav-container">
            <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
                {/* Nav Items Group */}
                <div className="pill-nav-items" ref={navItemsRef}>
                    <ul className="pill-list desktop-only" role="menubar">
                        {items.map((item, i) => (
                            <li key={item.href} role="none">
                                <Link
                                    role="menuitem"
                                    href={item.href}
                                    className={`pill${activeHref === item.href ? " is-active" : ""}`}
                                    aria-label={item.ariaLabel || item.label}
                                    onMouseEnter={() => handleEnter(i)}
                                    onMouseLeave={() => handleLeave(i)}
                                >
                                    <span
                                        className="hover-circle"
                                        aria-hidden="true"
                                        ref={(el) => { circleRefs.current[i] = el; }}
                                    />
                                    <span className="label-stack">
                                        <span className="pill-label">{item.label}</span>
                                        <span className="pill-label-hover" aria-hidden="true">
                                            {item.label}
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Unified Theme Toggle */}
                    {mounted && (
                        <button
                            className="pill-theme-btn"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            <div className={`theme-icon-wrapper ${resolvedTheme}`}>
                                {resolvedTheme === "dark" ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
                            </div>
                        </button>
                    )}

                    {/* Mobile Hamburger */}
                    <button
                        className="mobile-menu-button mobile-only"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        ref={hamburgerRef}
                    >
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </button>
                </div>
            </nav>

            {/* Mobile Popover */}
            <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
                <ul className="mobile-menu-list">
                    {items.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    const menu = mobileMenuRef.current;
                                    const hamburger = hamburgerRef.current;
                                    if (menu) gsap.set(menu, { visibility: "hidden", opacity: 0 });
                                    if (hamburger) {
                                        const lines = hamburger.querySelectorAll(".hamburger-line");
                                        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.2 });
                                        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.2 });
                                    }
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
