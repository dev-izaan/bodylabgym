"use client";

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[150] md:bottom-12 md:right-12">
            <Link
                href={WHATSAPP_LINK}
                target="_blank"
                className="relative flex items-center group"
                aria-label="Direct WhatsApp Support"
            >
                {/* Hover Label */}
                <div className="absolute right-full mr-4 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                    <div className="bg-white dark:bg-black border border-border px-5 py-2 whitespace-nowrap shadow-xl">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Chat with us</span>
                    </div>
                </div>

                {/* The Button */}
                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-black border border-border rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 group-hover:border-accent">
                    <MessageCircle className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />

                    {/* Online Indicator Pulse */}
                    <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-black">
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
                    </span>
                </div>
            </Link>
        </div>
    );
}
