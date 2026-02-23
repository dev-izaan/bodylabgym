import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const plans = [
    {
        name: "Monthly Entry",
        price: "199",
        period: "/ month",
        features: [
            "No long-term commitment",
            "Full facility access (5AM - 2AM)",
            "Technical movement assessment",
            "Premium locker access"
        ],
        cta: "Secure Access",
        message: "Hi Body Lab Gym, I'm interested in the Monthly Entry plan."
    },
    {
        name: "Yearly Performance",
        price: "1,800",
        period: "/ year",
        features: [
            "Save AED 580 annually",
            "Full facility access (5AM - 2AM)",
            "Quarterly goal tracking",
            "Corporate elite networking",
            "Priority equipment access"
        ],
        cta: "Start Transformation",
        highlight: true,
        message: "Hi Body Lab Gym, I'm interested in the Yearly Performance membership."
    }
];

export default function Membership() {
    return (
        <section id="membership" className="py-32 bg-brand-bg overflow-hidden">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
                    <div className="lg:col-span-8">
                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">Memberships</span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary leading-tight">Invest in Your Caliber.</h2>
                        <p className="mt-6 text-secondary leading-relaxed font-normal max-w-2xl">
                            Transparent pricing with zero hidden fees. We prioritize high-performance environments over gimmicky contracts.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-10 md:p-14 transition-all duration-500 rounded-sm ${plan.highlight
                                ? 'bg-brand-card border border-accent/40 shadow-sm z-10'
                                : 'bg-brand-bg border border-border hover:border-accent/30'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-white text-[9px] font-bold tracking-[0.3em] uppercase py-2 px-4">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-12">
                                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent mb-6">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[10px] font-bold text-secondary uppercase mr-1">AED</span>
                                    <span className="text-6xl font-extrabold text-primary tracking-tight">{plan.price}</span>
                                    <span className="text-secondary text-xs font-medium tracking-tight ml-2">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-6 mb-16 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                                        <span className="text-secondary text-base leading-tight font-normal">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`${WHATSAPP_LINK}&text=${encodeURIComponent(plan.message)}`}
                                target="_blank"
                                className={`flex items-center justify-center w-full py-5 px-10 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${plan.highlight
                                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                                    : 'bg-transparent text-primary border border-neutral-400 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
