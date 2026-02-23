import Link from 'next/link';
import { PHONE_NUMBER, WHATSAPP_LINK } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-24 bg-brand-bg border-t border-border">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Brand Col */}
                    <div className="lg:col-span-6 space-y-8">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary font-display inline-block hover:opacity-80 transition-opacity">
                            Body Lab Gym
                        </Link>
                        <p className="text-base text-secondary leading-relaxed max-w-md font-normal">
                            Abu Dhabi's destination for serious training. Built for absolute performance through mechanical tension, metabolic stress, and consistency. No templates, no shortcuts—only discipline.
                        </p>
                    </div>

                    {/* Navigation Col */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Navigation</h4>
                        <div className="flex flex-col gap-4 text-sm font-medium text-primary/80">
                            <Link href="#about" className="hover:text-accent transition-colors">About Story</Link>
                            <Link href="#trainers" className="hover:text-accent transition-colors">Master Coaches</Link>
                            <Link href="#membership" className="hover:text-accent transition-colors">Member Plans</Link>
                            <Link href="#location" className="hover:text-accent transition-colors">Find Arena</Link>
                        </div>
                    </div>

                    {/* Contact Col */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Affiliates</h4>
                        <div className="space-y-6">
                            <Link
                                href={WHATSAPP_LINK}
                                target="_blank"
                                className="block text-lg font-bold text-primary hover:text-accent transition-all relative group w-fit"
                            >
                                WhatsApp Support
                                <span className="absolute -bottom-1 left-0 w-8 h-[1px] bg-accent transition-all group-hover:w-full" />
                            </Link>
                            <a
                                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                                className="block text-lg font-bold text-primary hover:text-accent transition-all"
                            >
                                {PHONE_NUMBER}
                            </a>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-secondary/60">
                                Open Daily: 5AM — 2AM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-secondary/40">
                        <span>© {currentYear} Body Lab Gym</span>
                        <div className="w-[1px] h-3 bg-border" />
                        <span>Mussafah, Abu Dhabi</span>
                    </div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary/40 text-center md:text-right">
                        Absolute Discipline. Absolute Results.
                    </div>
                </div>
            </div>
        </footer>
    );
}
