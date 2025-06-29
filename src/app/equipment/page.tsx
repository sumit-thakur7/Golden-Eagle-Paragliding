"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Check } from "lucide-react";
import { equipmentData } from "@/lib/equipment-data";

export default function EquipmentPage() {
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
          <h1 className="font-headline font-bold text-5xl text-white mb-4">Equipment</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            We use only the highest quality, certified paragliding equipment to ensure 
            your safety and enjoyable flying experience.
          </p>
        </div>
      </section>

      {/* Main Equipment */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Our <span className="text-primary">Equipment</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Safety and performance are our top priorities. We use premium, internationally 
                certified equipment that is regularly inspected and maintained.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipmentData.main.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col">
                  <div className="h-48 overflow-hidden rounded-lg mb-6">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={400}
                      height={300}
                      data-ai-hint="paragliding gear"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-accent mr-2 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Equipment Rental & Sales */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                  <h2 className="font-headline font-bold text-3xl text-foreground mb-6">Equipment Rental & Sales</h2>
                  <p className="text-muted-foreground mb-6">
                    We offer equipment rental for our students and visiting pilots. We also have a pro shop 
                    where you can purchase your own paragliding gear from leading brands like Ozone, 
                    Advance, Nova, and Supair.
                  </p>
                  <ul className="mb-6 space-y-3 text-muted-foreground">
                    {equipmentData.rental.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <Check className="text-primary h-4 w-4" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="px-8 py-3 bg-primary text-primary-foreground font-sans font-medium rounded-full hover:bg-primary/90 transition">
                      Contact for Equipment
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {equipmentData.rental.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <Image 
                        src={image.url} 
                        alt={image.alt} 
                        width={400}
                        height={400}
                        data-ai-hint="paragliding equipment"
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Brands We Trust */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Brands We <span className="text-primary">Trust</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                We partner with the world's leading paragliding equipment manufacturers 
                to provide you with the best and safest gear available.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
              {equipmentData.brands.map((brand, index) => (
                <div key={index} className="flex justify-center items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition h-24 grayscale hover:grayscale-0 contrast-75 hover:contrast-100">
                  <div className="relative w-full h-16">
                     <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                      />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Equipment Maintenance */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="https://images.unsplash.com/photo-1501884428012-e7488dc00096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Equipment maintenance" 
                  width={600}
                  height={400}
                  data-ai-hint="equipment maintenance"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="font-headline font-bold text-4xl text-foreground mb-6">Equipment Maintenance</h2>
                <p className="text-muted-foreground mb-4">
                  Regular maintenance and proper care of paragliding equipment is essential for safety and longevity. 
                  Our on-site workshop offers comprehensive maintenance services performed by certified technicians.
                </p>
                <p className="text-muted-foreground mb-6">
                  We recommend annual inspections for all paragliding equipment, especially wings, 
                  harnesses, and reserve parachutes. Our technicians can identify potential issues 
                  before they become safety hazards.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h3 className="font-headline font-semibold text-lg text-foreground mb-2">Wing Inspections</h3>
                    <p className="text-muted-foreground text-sm">
                      Porosity testing, line measurements, trim checks, and repair services for all brands of paragliders.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h3 className="font-headline font-semibold text-lg text-foreground mb-2">Reserve Repacking</h3>
                    <p className="text-muted-foreground text-sm">
                      Professional reserve parachute inspection and repacking services, recommended every 6-12 months.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h3 className="font-headline font-semibold text-lg text-foreground mb-2">Harness Repairs</h3>
                    <p className="text-muted-foreground text-sm">
                      Harness inspections, airbag testing, and repairs to ensure your safety and comfort in flight.
                    </p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="px-8 py-3 bg-primary text-primary-foreground font-sans font-medium rounded-full hover:bg-primary/90 transition">
                    Book a Maintenance Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-cta bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline font-bold text-4xl mb-6">Need Help Choosing Equipment?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Our experienced staff can help you select the right equipment for your skill level, 
              flying style, and budget. Contact us for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="px-8 py-6 bg-accent text-accent-foreground font-sans font-medium rounded-full hover:bg-accent/90 transition">
                  Get Equipment Advice
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" className="px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans font-medium rounded-full hover:bg-white/20 transition">
                  Explore Our Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
}
