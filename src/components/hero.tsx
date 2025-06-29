import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        alt="Paraglider soaring over a vast mountain range at sunset"
        fill
        className="z-0 object-cover brightness-50"
        data-ai-hint="paragliding sunset"
        priority
      />
      <div className="relative z-10 p-4">
        <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl mb-4 leading-tight">
          Touch the Sky with <br />
          <span className="text-primary">GEP Paragliding</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-8 text-white/90">
          India's premier destination for paragliding adventures. Soar like an eagle, 
          feel the wind, and witness breathtaking views with our expert pilots.
        </p>
        <Link href="/booking">
          <Button size="lg" className="px-8 py-6 text-base sm:px-10 sm:py-7 sm:text-lg font-headline rounded-full bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
            Book Your Adventure
          </Button>
        </Link>
      </div>
    </section>
  );
}
