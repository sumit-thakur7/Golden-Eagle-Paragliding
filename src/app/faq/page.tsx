import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { faqData } from "@/lib/faq-data";

export default function FaqPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Have questions? We have answers. Here are some of the most common
          inquiries we receive, organized by category.
        </p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="beginners">For Beginners</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.general.map((faq, index) => (
                <AccordionItem
                  key={`general-${index}`}
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
          </TabsContent>

          <TabsContent value="beginners">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.beginners.map((faq, index) => (
                <AccordionItem
                  key={`beginners-${index}`}
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
          </TabsContent>

          <TabsContent value="courses">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.courses.map((faq, index) => (
                <AccordionItem
                  key={`courses-${index}`}
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
          </TabsContent>
          
          <TabsContent value="equipment">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.equipment.map((faq, index) => (
                <AccordionItem
                  key={`equipment-${index}`}
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
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
