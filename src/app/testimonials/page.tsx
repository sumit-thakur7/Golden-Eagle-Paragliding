import TestimonialCard from "@/components/TestimonialCard";
import { testimonialData } from "@/lib/testimonial-data";

const allTestimonials = [...testimonialData.featured, ...testimonialData.more];

export default function TestimonialsPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-headline font-bold">Testimonials</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Hear from our happy flyers! Read about their experiences and see why
          they choose GEP Paragliding for their sky-high adventures.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            rating={testimonial.rating}
            text={testimonial.text}
            avatar={testimonial.image}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
