import { PHONE_NUMBER, OPENING_HOURS } from '@/lib/constants';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="py-32 bg-brand-bg">
            <div className="container max-w-7xl px-6 mx-auto space-y-12">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-3">
                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent">
                            Our Location
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                            Find Us in Al Zahiyah, Abu Dhabi
                        </h2>
                        <div className="space-y-1 pt-1">
                            <p className="flex items-center gap-2 text-sm text-secondary">
                                <MapPin size={14} strokeWidth={1.5} className="text-accent flex-shrink-0" />
                                Al Zahiyah – E13 – Abu Dhabi – United Arab Emirates
                            </p>
                            <p className="flex items-center gap-2 text-sm text-secondary">
                                <Phone size={14} strokeWidth={1.5} className="text-accent flex-shrink-0" />
                                <a
                                    href="tel:+971558029299"
                                    className="hover:text-primary transition-colors duration-200"
                                >
                                    +971 55 802 9299
                                </a>
                            </p>
                            <p className="flex items-center gap-2 text-sm text-secondary">
                                <Clock size={14} strokeWidth={1.5} className="text-accent flex-shrink-0" />
                                {OPENING_HOURS} — 7 Days a Week
                            </p>
                        </div>
                    </div>

                    {/* Get Directions Button */}
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Body+Lab+gym+Abu+Dhabi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors duration-200 flex-shrink-0"
                    >
                        Get Directions
                    </a>
                </div>

                {/* Map Embed */}
                <div className="w-full h-[450px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                    <iframe
                        src="https://www.google.com/maps?q=Body+Lab+gym,+Al+Zahiyah+-+E13+-+Abu+Dhabi+-+United+Arab+Emirates&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Body Lab Gym Location"
                    />
                </div>
            </div>
        </section>
    );
}
