"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { faqData } from "@/lib/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl sm:text-5xl text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about paragliding experiences, 
            courses, and safety measures.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Common <span className="text-primary">Questions</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                We've compiled answers to the most frequently asked questions about 
                paragliding with GEP Paragliding. If you can't find the answer you're 
                looking for, please contact us.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.general.map((faq, index) => (
                  <AccordionItem key={`general-${index}`} value={`faq-general-${index}`} className="rounded-lg border bg-card shadow-sm">
                    <AccordionTrigger className="p-6 text-left font-headline text-base md:text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Categories */}
      <AnimatedSection>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Questions by <span className="text-primary">Category</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Browse questions organized by topic to find specific information about our courses, 
                equipment, safety protocols, and more.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Beginner Questions */}
              <div className="mb-12">
                <h3 className="font-headline font-bold text-xl md:text-2xl text-foreground mb-6">For Beginners</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.beginners.map((faq, index) => (
                    <AccordionItem key={`beginners-${index}`} value={`faq-beginner-${index}`} className="rounded-lg border bg-card shadow-sm">
                      <AccordionTrigger className="p-6 text-left font-headline text-base md:text-lg font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Course Questions */}
              <div className="mb-12">
                <h3 className="font-headline font-bold text-xl md:text-2xl text-foreground mb-6">About Courses</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.courses.map((faq, index) => (
                    <AccordionItem key={`courses-${index}`} value={`faq-course-${index}`} className="rounded-lg border bg-card shadow-sm">
                      <AccordionTrigger className="p-6 text-left font-headline text-base md:text-lg font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Equipment Questions */}
              <div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-foreground mb-6">About Equipment</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.equipment.map((faq, index) => (
                    <AccordionItem key={`equipment-${index}`} value={`faq-equipment-${index}`} className="rounded-lg border bg-card shadow-sm">
                      <AccordionTrigger className="p-6 text-left font-headline text-base md:text-lg font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-cta bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline font-bold text-3xl md:text-4xl mb-6">Still Have Questions?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              If you couldn't find the answer you were looking for, our team is here to help.
              Feel free to contact us, and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="px-6 py-5 sm:px-8 sm:py-6 bg-accent text-accent-foreground font-sans font-medium rounded-full hover:bg-accent/90 transition">
                  Contact Us
                </Button>
              </Link>
              <Link href="/booking">
                <Button variant="outline" className="px-6 py-5 sm:px-8 sm:py-6 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans font-medium rounded-full hover:bg-white/20 transition">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
