import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Trainers from '@/sections/Trainers';
import Reviews from '@/sections/Reviews';
import Membership from '@/sections/Membership';
import Location from '@/sections/Location';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <div className="fade-in-on-scroll">
        <About />
      </div>
      <div className="fade-in-on-scroll">
        <Features />
      </div>
      <div className="fade-in-on-scroll">
        <Trainers />
      </div>
      <div className="fade-in-on-scroll">
        <Reviews />
      </div>
      <div className="fade-in-on-scroll">
        <Membership />
      </div>
      <div className="fade-in-on-scroll">
        <Location />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
