"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { courseData } from "@/lib/course-data";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";


export default function CoursesPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-5xl text-white mb-4">Courses & Services</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            From your first tandem flight to becoming a certified paraglider pilot, 
            we offer a range of courses and services for all experience levels.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Our <span className="text-primary">Paragliding Courses</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                We offer comprehensive training programs for all skill levels, from beginners to advanced pilots.
                All courses are taught by certified instructors with years of experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {courseData.map((course, index) => (
                <ServiceCard
                  key={course.title}
                  title={course.title}
                  level={course.level}
                  description={course.description}
                  features={course.features}
                  price={course.price}
                  image={course.image}
                  actionText={course.actionText}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Course Structure */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Course <span className="text-primary">Structure</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our courses are designed to progressively build your skills and confidence,
                with a focus on safety and practical experience.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* P1 Basic Course Structure */}
              <div className="mb-12">
                <h3 className="font-headline font-bold text-2xl text-foreground mb-6 flex items-center">
                  <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-3">1</span>
                  P1 Basic Course (5 Days)
                </h3>
                <div className="ml-12 space-y-6">
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 1-2: Introduction & Ground Handling</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Theoretical basics of paragliding - aerodynamics, weather, equipment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Introduction to equipment and safety procedures</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Ground handling practice - inflation, control, and deflation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 3-4: Small Hill Training</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>First short flights from small hills with radio guidance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Practicing takeoff and landing techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Basic maneuvers and control exercises</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 5: Certification & Assessment</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Theoretical exam and practical assessment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Supervised high flights from the main launch site</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>P1 certification upon successful completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* P2 Intermediate Course Structure */}
              <div className="mb-12">
                <h3 className="font-headline font-bold text-2xl text-foreground mb-6 flex items-center">
                  <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-3">2</span>
                  P2 Intermediate Course (7 Days)
                </h3>
                <div className="ml-12 space-y-6">
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 1-2: Advanced Theory & Flight Planning</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Advanced aerodynamics and meteorology</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Flight planning and navigation techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Emergency procedures and safety protocols</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 3-5: Ridge Soaring & Thermaling</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Introduction to ridge soaring techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Thermal flying basics and practice</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Extended mountain flights with instructor guidance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 6-7: Cross-Country Introduction & Certification</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Introduction to cross-country flying concepts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Short guided cross-country flights</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Theoretical and practical assessment for P2 certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* P3 Pilot Certification Structure */}
              <div>
                <h3 className="font-headline font-bold text-2xl text-foreground mb-6 flex items-center">
                  <span className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center mr-3">3</span>
                  P3 Pilot Certification (10 Days)
                </h3>
                <div className="ml-12 space-y-6">
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 1-3: Advanced Theory & Safety Training</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Comprehensive meteorology and microclimate analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Advanced flight mechanics and glider performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>SIV (Simulation of Incidents in Flight) preparation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 4-6: SIV Course & Advanced Maneuvers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Controlled SIV training over water (collapses, spirals, stalls)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Recovery techniques and emergency procedures</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Advanced flying maneuvers and control</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h4 className="font-headline font-semibold text-xl text-foreground mb-3">Day 7-10: Cross-Country Flying & Certification</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Guided cross-country flights with increasing distance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Advanced thermal techniques and glide optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-accent mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Comprehensive testing and P3 certification assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Safety First */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1605773723154-40d51430e646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Safety briefing before paragliding"
                  className="rounded-lg shadow-xl"
                  width={600}
                  height={400}
                  data-ai-hint="safety briefing"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-headline font-bold text-4xl text-foreground mb-6">Safety First</h2>
                <p className="text-muted-foreground mb-4">
                  At GEP Paragliding, safety is our top priority. All our courses include comprehensive 
                  safety training, and we only fly in suitable weather conditions. Our instructors are 
                  certified and experienced, ensuring that you receive the best guidance throughout your training.
                </p>
                <p className="text-muted-foreground mb-6">
                  We maintain all our equipment to the highest standards and regularly update our safety 
                  protocols in line with international guidelines. We believe that a safe environment is 
                  essential for you to enjoy the learning process and develop confidence in your flying skills.
                </p>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span>Regular equipment safety checks and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span>Comprehensive weather assessment before each flight</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span>Certified instructors with emergency management training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span>Low student-to-instructor ratio for personalized attention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-cta bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline font-bold text-4xl mb-6">Ready to Start Your Paragliding Journey?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Whether you're looking for your first tandem experience or want to become a certified pilot,
              our courses are designed to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking">
                <Button className="px-8 py-6 bg-accent text-accent-foreground font-sans font-medium rounded-full hover:bg-accent/90 transition">
                  Book a Course
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans font-medium rounded-full hover:bg-white/20 transition">
                  Contact for Details
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
