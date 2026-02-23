"use client";

import PillNav from "./PillNav";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Coaches", href: "#trainers" },
    { label: "Plans", href: "#membership" },
    { label: "Location", href: "#location" },
];

export function Navbar() {
    return (
        <PillNav
            items={navItems}
            ease="power3.out"
            pillColor="rgba(255,255,255,0.10)"
            hoveredPillTextColor="#000000"
            pillTextColor="#ffffff"
            initialLoadAnimation={true}
        />
    );
}
