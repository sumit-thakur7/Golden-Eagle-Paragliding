"use client";

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    quote: "An absolutely breathtaking experience! The pilot was incredibly professional and made me feel safe throughout the entire flight. The views were out of this world. Highly recommend!",
    author: "Sarah J.",
    location: "USA"
  },
  {
    quote: "I did the beginner's course and it was fantastic. The instructors are patient, knowledgeable, and passionate. I went from being a complete novice to flying solo in just a few days.",
    author: "Michael B.",
    location: "UK"
  },
  {
    quote: "The best adventure of my life! GEP Paragliding team is the best. Everything was perfectly organized, from pickup to the flight itself. A must-do activity!",
    author: "Priya K.",
    location: "India"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Quote className="h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Flyers Say
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Real stories from people who have soared with us.
          </p>
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6 text-center flex-grow">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="p-6 pt-0 text-center">
                      <p className="font-bold font-headline">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
