import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Paraglider soaring over mountains"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        data-ai-hint="paragliding mountains"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Experience the Ultimate Freedom
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Soar through the skies with GEP Paragliding, your trusted partner for unforgettable aerial adventures.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#contact">Book Your Flight Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
