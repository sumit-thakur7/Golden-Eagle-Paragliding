import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Paraglider soaring over a vast mountain range at sunset"
        fill
        className="z-0 object-cover brightness-50"
        data-ai-hint="paragliding sunset"
        priority
      />
      <div className="relative z-10 p-4">
        <h1 className="font-headline font-bold text-5xl md:text-7xl mb-4 leading-tight">
          Touch the Sky with <br />
          <span className="text-primary">GEP Paragliding</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-white/90">
          India's premier destination for paragliding adventures. Soar like an eagle, 
          feel the wind, and witness breathtaking views with our expert pilots.
        </p>
        <Link href="/booking">
          <Button size="lg" className="px-10 py-7 text-lg font-headline rounded-full bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
            Book Your Adventure
          </Button>
        </Link>
      </div>
    </section>
  );
}
