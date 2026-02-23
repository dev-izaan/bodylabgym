import Image from 'next/image';

const trainers = [
    {
        name: "Abhinav",
        role: "Senior Coach / Founder",
        bio: "Transformation specialist with over 10 years of experience in strength training and nutrition. Expert in building elite physiques through science-based methodology and technical precision.",
        image: "/images/trainer.webp"
    },
    {
        name: "Ajay",
        role: "Performance Coach",
        bio: "Expert in muscle building and functional fitness, dedicated to pushing athletes to their peak performance through disciplined coaching and high-intensity protocol.",
        image: "/images/trainer 2.webp"
    }
];

export default function Trainers() {
    return (
        <section id="trainers" className="py-32 bg-brand-bg">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="mb-20">
                    <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Master Coaches</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">Lead By Performance.</h2>
                </div>

                <div className="space-y-40">
                    {trainers.map((trainer, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                            {/* Image Side */}
                            <div className={`${index % 2 === 0 ? 'lg:w-[45%]' : 'lg:w-[50%]'} relative w-full`}>
                                {/* Subtle Background Detail */}
                                <div className={`absolute top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-full h-full border border-accent/20 -z-10`} />

                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm grayscale-[5%] transition-all duration-700 shadow-sm z-10">
                                    <Image
                                        src={trainer.image}
                                        alt={`Body Lab Gym Trainer ${trainer.name}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-6">
                                        <h3 className="text-3xl font-bold text-primary">{trainer.name}</h3>
                                        <div className="h-[1px] flex-grow bg-accent/20" />
                                    </div>
                                    <p className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">
                                        <span className="text-accent">—</span> {trainer.role}
                                    </p>
                                </div>

                                <p className="text-secondary text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                                    {trainer.bio}
                                </p>

                                <div className="pt-4 flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold tracking-widest uppercase text-secondary/60">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent" />
                                        Strength
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent" />
                                        Hypertrophy
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent" />
                                        Nutrition
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
