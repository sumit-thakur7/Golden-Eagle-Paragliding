"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonialData } from "@/lib/testimonial-data";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<Star key={`full-${i}`} className="h-5 w-5 text-primary fill-primary" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalf key={`half-${i}`} className="h-5 w-5 text-primary fill-primary" />);
      } else {
        stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-primary/30" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-5xl text-white mb-4">Testimonials</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the adventurers who have 
            experienced the thrill of paragliding with us.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                What Our <span className="text-primary">Flyers Say</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Read the experiences of our customers who have soared through the skies with us.
                Their stories inspire us to continue providing unforgettable paragliding adventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialData.featured.map((testimonial, index) => (
                <div key={index} className="bg-card p-8 rounded-xl shadow-lg relative">
                  <div className="text-primary text-8xl absolute -top-4 left-4 opacity-10 font-serif">"</div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="flex text-primary">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="ml-2 text-muted-foreground font-medium">{testimonial.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-muted-foreground italic mb-6">{testimonial.text}</p>
                    <div className="flex items-center">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={48}
                        height={48} 
                        data-ai-hint="person portrait"
                        className="w-12 h-12 rounded-full mr-4 object-cover" 
                      />
                      <div>
                        <h4 className="font-headline font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Testimonials */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Video <span className="text-primary">Testimonials</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Watch our customers share their paragliding experiences in their own words.
                These authentic stories capture the excitement and joy of flying with GEP Paragliding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/LU6EkmPP-iM" 
                    title="Rahul's Experience with GEP Paragliding" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-headline font-bold text-xl text-foreground mb-2">Rahul's First Flight Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    "I was nervous at first, but the instructors made me feel so comfortable. The views were absolutely breathtaking!"
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-primary">
                      {renderStars(5)}
                    </div>
                    <span className="ml-2 text-muted-foreground font-medium">5.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/3PtZUDY8M4E" 
                    title="Priya's P1 Course Experience" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-headline font-bold text-xl text-foreground mb-2">Priya's P1 Training Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    "The comprehensive training helped me become confident in my skills. By the end of the course, I was flying solo!"
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-primary">
                      {renderStars(5)}
                    </div>
                    <span className="ml-2 text-muted-foreground font-medium">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* All Testimonials */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                More <span className="text-primary">Reviews</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Here are more stories from our customers about their experiences with GEP Paragliding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialData.more.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-muted-foreground font-medium">{testimonial.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-muted-foreground italic mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={40}
                      height={40} 
                      data-ai-hint="person portrait"
                      className="w-10 h-10 rounded-full mr-3 object-cover" 
                    />
                    <div>
                      <h4 className="font-headline font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ratings & Statistics */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-cta bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline font-bold text-4xl mb-12">Our Customer Satisfaction</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-headline font-bold text-5xl mb-2">4.9/5</div>
                <p className="mb-3">Overall Rating</p>
                <div className="flex justify-center text-primary">
                  {renderStars(4.9)}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-headline font-bold text-5xl mb-2">98%</div>
                <p>Would Recommend</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-headline font-bold text-5xl mb-2">5000+</div>
                <p>Happy Customers</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition">
                <div className="font-headline font-bold text-5xl mb-2">85%</div>
                <p>Return Customers</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
}
