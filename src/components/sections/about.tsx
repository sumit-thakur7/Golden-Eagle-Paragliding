import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Info className="h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About GEP Paragliding
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Your adventure in the sky begins with our commitment to safety and excellence.
          </p>
        </div>
        <Card>
          <CardContent className="p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-headline text-2xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  Our mission is to provide world-class paragliding experiences that are safe, thrilling, and accessible to everyone. We believe in sharing the joy of flight and creating memories that last a lifetime, all while adhering to the highest international safety standards.
                </p>
                <h3 className="font-headline text-2xl font-semibold">Our Team</h3>
                <p className="text-muted-foreground">
                  Our team consists of highly experienced and certified pilots with thousands of hours of flight time. They are not just instructors but passionate aviators dedicated to making your paragliding journey smooth, safe, and absolutely unforgettable.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="A team of paragliding instructors"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint="team smiling"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
