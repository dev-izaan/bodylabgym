import {
    Users,
    Dumbbell,
    Zap,
    CreditCard,
    Clock
} from 'lucide-react';

const features = [
    {
        icon: Users,
        title: "Senior Coaches",
        description: "Guidance from industry-certified personal trainers with proven success."
    },
    {
        icon: Dumbbell,
        title: "Olympic Equipment",
        description: "Olympic-grade weightlifting and high-precision strength machines."
    },
    {
        icon: Zap,
        title: "Peak Atmosphere",
        description: "A motivating, high-energy environment built for serious athletes."
    },
    {
        icon: CreditCard,
        title: "Corporate Rates",
        description: "Simple, transparent pricing optimized for health insurance benefits."
    }
];

export default function Features() {
    return (
        <section className="py-32 bg-brand-section">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 max-w-md">
                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Our Caliber</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary leading-tight">Engineered for High Performance</h2>
                        <p className="mt-6 text-secondary leading-relaxed font-normal">
                            We provide the tools, the knowledge, and the elite environment required to transform your physical and mental potential.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-12">
                        {features.map((feature, index) => (
                            <div key={index} className="space-y-4 group">
                                <div className="text-secondary transition-colors duration-300 group-hover:text-accent">
                                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
