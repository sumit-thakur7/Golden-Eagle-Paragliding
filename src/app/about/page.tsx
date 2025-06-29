"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import { Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Chief Instructor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "With over 20 years of paragliding experience, Rajesh is a certified international instructor and has trained hundreds of pilots.",
      hint: "male instructor"
    },
    {
      name: "Vikram Singh",
      role: "Co-Founder & Operations",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Vikram oversees all operations, ensuring that every aspect of your experience with us is smooth and memorable.",
      hint: "male manager"
    },
    {
      name: "Priya Sharma",
      role: "Senior Instructor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Priya specializes in beginner training and is known for her patient and encouraging teaching style.",
      hint: "female instructor"
    },
    {
      name: "Alex Johnson",
      role: "International Instructor",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "With experience flying in over 20 countries, Alex brings international expertise to our advanced training programs.",
      hint: "male pilot"
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-white mb-4">About Us</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Learn about our journey, mission, and passion for bringing the experience of paragliding to adventure enthusiasts around the world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Mountain landscape for paragliding" 
                  className="rounded-lg shadow-xl"
                  width={600}
                  height={400}
                  data-ai-hint="mountain landscape"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-headline font-bold text-4xl text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2005, GEP Paragliding began with a simple mission: to share the incredible 
                  experience of paragliding with the world. What started as a small operation with just 
                  two instructors, Rajesh and Vikram, in the stunning valleys of Bir Billing, has grown 
                  into India's premier paragliding destination.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've expanded our operations to multiple locations across India, 
                  bringing the joy of flight to thousands of adventure seekers. Our team of certified 
                  instructors has decades of combined experience, ensuring that every flight is not 
                  only exhilarating but also safe.
                </p>
                <p className="text-muted-foreground mb-4">
                  We've trained thousands of pilots and given countless tandem experiences to those 
                  looking to touch the sky. Our commitment to safety, quality equipment, and exceptional 
                  customer service has made us the trusted choice for paragliding in India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Statistics */}
      <AnimatedSection>
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-headline font-bold text-4xl md:text-5xl text-primary mb-2">15+</p>
                <p className="text-muted-foreground font-medium">Years of Experience</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-headline font-bold text-4xl md:text-5xl text-primary mb-2">50+</p>
                <p className="text-muted-foreground font-medium">Certified Instructors</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-headline font-bold text-4xl md:text-5xl text-primary mb-2">5000+</p>
                <p className="text-muted-foreground font-medium">Students Trained</p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <p className="font-headline font-bold text-4xl md:text-5xl text-primary mb-2">10+</p>
                <p className="text-muted-foreground font-medium">Flying Locations</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission, Vision, Values */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Guided by our core values, we strive to make paragliding accessible, safe, and unforgettable for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Target />}
                title="Our Mission"
                description="To provide safe, professional, and unforgettable paragliding experiences while promoting the sport in India and around the world. We aim to inspire a love for flight and adventure in everyone who visits us."
                index={0}
              />
              <FeatureCard 
                icon={<Eye />}
                title="Our Vision"
                description="To become the world's most trusted paragliding training center and to make the joy of flight accessible to everyone. We envision a future where paragliding is recognized as a safe and accessible adventure sport for all."
                index={1}
              />
              <FeatureCard 
                icon={<Heart />}
                title="Our Values"
                description="Safety, excellence, environmental responsibility, and a passion for sharing the freedom of flight with others. We believe in creating a supportive community where people can discover the joy of paragliding in a responsible way."
                index={2}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Team */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Meet Our Team
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our experienced instructors and staff are dedicated to providing you with a safe and memorable paragliding experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="h-64 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`} 
                      width={400}
                      height={400}
                      data-ai-hint={member.hint}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-headline font-bold text-xl text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-cta bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline font-bold text-4xl mb-6">Join Our Paragliding Community</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Whether you're looking for your first flight experience or want to become a certified pilot,
              we're here to guide you on your paragliding journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking">
                <Button className="px-8 py-6 bg-accent text-accent-foreground font-sans font-medium rounded-full hover:bg-accent/90 transition">
                  Book Your Adventure
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans font-medium rounded-full hover:bg-white/20 transition">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
