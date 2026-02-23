import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Omar K.",
        review: "Best gym in Abu Dhabi. No fluff, just serious training and quality equipment. Highly recommend the personal coaching here for anyone serious about progress.",
        rating: 5
    },
    {
        name: "Sarah L.",
        review: "The atmosphere here is truly motivating. I started as a beginner and never felt intimidated. Very supportive environment with elite level equipment.",
        rating: 5
    },
    {
        name: "Rahul M.",
        review: "Open till 2AM which is perfect for my work schedule. The coaching staff is amazing and the environment is focused on work, not selfies.",
        rating: 5
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-32 bg-brand-section">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
                    <div className="lg:col-span-8">
                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Community</span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary leading-tight">The Strength Of Our Collective</h2>
                        <p className="mt-6 text-secondary leading-relaxed font-normal max-w-2xl">
                            Real transformations from a community built on discipline and high-performance culture.
                        </p>
                    </div>

                    <div className="lg:col-span-4 bg-brand-bg p-10 border border-border shadow-sm">
                        <div className="text-4xl lg:text-5xl font-extrabold text-primary flex items-baseline gap-2">
                            4.7 <span className="text-xs text-secondary font-bold tracking-widest uppercase">Overall</span>
                        </div>
                        <div className="flex gap-1 mt-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-accent text-accent' : 'text-secondary/20'}`} strokeWidth={1} />
                            ))}
                        </div>
                        <p className="mt-3 text-[10px] font-bold tracking-widest text-secondary/60 uppercase">Based on 300+ Testimonials</p>
                        <div className="mt-6 w-full h-[1px] bg-accent/20" />
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-brand-bg p-10 border border-border shadow-sm transition-all duration-500 hover:border-accent/40 group ${index === 0 ? 'md:col-span-5' : index === 1 ? 'md:col-span-7' : 'md:col-span-12 lg:col-span-6'
                                }`}
                        >
                            <div className="flex gap-1 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-accent text-accent" strokeWidth={1} />
                                ))}
                            </div>
                            <p className="text-secondary leading-relaxed mb-10 italic text-base font-normal">
                                "{item.review}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-accent/30 group-hover:w-12 transition-all duration-300" />
                                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary transition-opacity">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
