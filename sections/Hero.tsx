"use client";

import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background with Theme-Aware Overlay */}
            {/* Hero Background Image - Optimized */}
            <div className={`absolute inset-0 z-0 transition-transform duration-[3000ms] ease-out will-change-transform ${mounted ? 'scale-100' : 'scale-105'}`}>
                <Image
                    src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
                    alt="Body Lab Gym"
                    fill
                    priority
                    quality={90}
                    className="object-cover object-center brightness-[0.7] contrast-[1.1]"
                />
                {/* Unified overlay: dark-left fade works in both light & dark mode */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className={`container max-w-7xl px-6 relative z-10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-3xl">
                    <div className="flex flex-col items-start gap-4 mb-8">
                        <div className="flex text-accent relative pb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current mr-0.5" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent/40" />
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/70">Elite Performance Laboratory</span>
                    </div>

                    <h1 className="mb-8 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                        Train With <span className="relative inline-block">Discipline<span className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-accent"></span></span>.<br />
                        Build With Purpose.
                    </h1>

                    <p className="mb-12 text-base md:text-lg text-white/80 leading-relaxed font-normal max-w-xl">
                        Abu Dhabi's premier destination for high-performance training. Expert coaches and an elite environment designed for those who seek results.
                    </p>

                    <div className="flex flex-col items-start gap-6 sm:flex-row">
                        <Link
                            href="#membership"
                            className="w-full px-12 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-black text-white border-2 border-white/20 dark:bg-white dark:text-black dark:border-black hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] sm:w-auto text-center"
                        >
                            Start Transformation
                        </Link>
                        <Link
                            href={WHATSAPP_LINK}
                            target="_blank"
                            className="w-full px-12 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 border border-white/50 text-white hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] sm:w-auto text-center"
                        >
                            Chat With Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Micro-detail indicator */}
            <div className="absolute bottom-12 left-6 hidden lg:block">
                <div className="flex items-center gap-4 origin-left -rotate-90 translate-y-20">
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-accent">Scroll to Explore</span>
                    <div className="w-12 h-[1px] bg-accent/40" />
                </div>
            </div>
        </section>
    );
}
