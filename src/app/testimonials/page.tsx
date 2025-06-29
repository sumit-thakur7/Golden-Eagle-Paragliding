import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "San Francisco, USA",
    rating: 5,
    text: "An absolutely breathtaking experience! The pilot was incredibly professional and made me feel safe throughout the entire flight. The views were out of this world. Highly recommend!",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Michael Chen",
    location: "London, UK",
    rating: 4.5,
    text: "I did the beginner's course and it was fantastic. The instructors are patient, knowledgeable, and really passionate about paragliding. I went from being a complete novice to flying solo in just a few days.",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Priya Kumar",
    location: "Mumbai, India",
    rating: 5,
    text: "The best adventure of my life! The GEP Paragliding team is the best. Everything was perfectly organized, from pickup to the flight itself. A must-do activity if you are in the area!",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "David Rodriguez",
    location: "Sydney, Australia",
    rating: 4,
    text: "A truly memorable experience. The scenery is stunning and the feeling of flying is indescribable. The team was friendly and helpful. My only wish is that the flight could have been longer!",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Fatima Al-Jamil",
    location: "Dubai, UAE",
    rating: 5,
    text: "From start to finish, the experience was seamless and professional. The tandem flight was exhilarating, and the pilot's expertise was evident. I felt completely at ease and will cherish this memory forever.",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Kenji Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "As a photographer, I opted for the photography flight, and it exceeded all my expectations. The pilot knew exactly how to get the best shots. I came away with some of the most stunning images of my career.",
    avatar: "https://placehold.co/100x100.png",
  },
];

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
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            rating={testimonial.rating}
            text={testimonial.text}
            avatar={testimonial.avatar}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}