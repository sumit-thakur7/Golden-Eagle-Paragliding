import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is paragliding safe?",
    answer:
      "Yes, paragliding is very safe when conducted by certified professionals using modern equipment. We adhere to strict international safety standards, and our pilots are highly experienced. All equipment is regularly inspected and maintained.",
  },
  {
    question: "What should I wear for my flight?",
    answer:
      "We recommend wearing comfortable, sturdy shoes (like hiking boots or sneakers), long pants, and a windproof jacket. Even on a warm day, it can be cooler at altitude. Sunglasses are also recommended.",
  },
  {
    question: "Do I need any prior experience to do a tandem flight?",
    answer:
      "Absolutely not! For a tandem flight, you need no prior experience. Your certified pilot will handle all the technical aspects of the flight. You just need to sit back, relax, and enjoy the incredible views.",
  },
  {
    question: "Is there a weight limit for tandem paragliding?",
    answer:
      "Yes, for safety reasons, there is a weight limit. The typical range is between 25 kg (55 lbs) and 95 kg (210 lbs). Please contact us if you have any concerns about the weight limit.",
  },
];

export default function FaqPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Have questions? We have answers. Here are some of the most common
          inquiries we receive.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border bg-card shadow-sm"
            >
              <AccordionTrigger className="p-6 text-left font-headline text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
