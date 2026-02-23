import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-32 bg-brand-bg overflow-hidden">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="grid items-center gap-16 lg:grid-cols-12">
                    {/* Image Column - Taking 5 columns */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-sm z-10 transition-all duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                                alt="Body Lab Gym Ambience"
                                fill
                                className="object-cover grayscale-[5%] transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        {/* Design Element: Subtle Offset Border */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-0 hidden lg:block" />
                    </div>

                    {/* Text Column - Taking 7 columns */}
                    <div className="lg:col-span-7 lg:pl-12 space-y-10">
                        <div className="space-y-4">
                            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">The Foundation</span>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-primary">
                                Serious Training.<br />
                                <span className="relative inline-block">Disciplined<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent/30"></span></span> Results.
                            </h2>
                        </div>

                        <div className="space-y-6 text-secondary text-base md:text-lg leading-relaxed font-normal max-w-2xl">
                            <p>
                                Led by expert trainers <span className="text-primary font-semibold">Abhinav & Ajay</span>, Body Lab Gym is built on the principles of mechanical tension, metabolic stress, and consistency. We provide a powerhouse environment for those who have moved past the generic fitness influencer trends.
                            </p>
                            <p>
                                Equipped with Olympic-grade machinery and high-performance strength equipment, we ensure every rep is optimized. Our supportive yet challenging atmosphere pushes you to break your limits in a professional environment.
                            </p>
                        </div>

                        <div className="pt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-border">
                            <div>
                                <div className="text-2xl font-bold text-primary">5AM — 2AM</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-secondary mt-1">Open Daily</div>
                            </div>
                            <div className="w-[1px] h-10 bg-accent/20 hidden sm:block" />
                            <div>
                                <div className="text-2xl font-bold text-primary">ELITE</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-secondary mt-1">Environment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
