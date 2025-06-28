import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is paragliding safe?',
    answer:
      'Yes, paragliding is very safe when conducted by certified professionals using modern equipment. We adhere to strict international safety standards, and our pilots are highly experienced. All equipment is regularly inspected and maintained.',
  },
  {
    question: 'What should I wear for my flight?',
    answer:
      'We recommend wearing comfortable, sturdy shoes (like hiking boots or sneakers), long pants, and a windproof jacket. Even on a warm day, it can be cooler at altitude. Sunglasses are also recommended.',
  },
  {
    question: 'Do I need any prior experience to do a tandem flight?',
    answer:
      'Absolutely not! For a tandem flight, you need no prior experience. Your certified pilot will handle all the technical aspects of the flight. You just need to sit back, relax, and enjoy the incredible views.',
  },
    {
    question: 'Is there a weight limit for tandem paragliding?',
    answer:
      'Yes, for safety reasons, there is a weight limit. The typical range is between 25 kg (55 lbs) and 95 kg (210 lbs). Please contact us if you have any concerns about the weight limit.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <HelpCircle className="h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Have questions? We have answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
