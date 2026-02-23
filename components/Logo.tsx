"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`absolute top-6 left-6 z-[100] transition-all duration-1000 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <Link href="/" className="group flex flex-col items-start leading-none">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white drop-shadow-sm group-hover:text-accent transition-colors duration-300">
                    Body<span className="text-accent group-hover:text-white transition-colors duration-300">Labs</span>
                </span>
                <div className="w-8 h-[2px] bg-accent mt-1 scale-x-100 group-hover:scale-x-150 transition-transform duration-500 origin-left" />
            </Link>
        </div>
    );
}
