'use client';

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Footer() {
  const { toast } = useToast();
  
  const currentYear = new Date().getFullYear();

  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    console.log("Newsletter submission:", values);
    toast({
      title: "Subscription Successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    form.reset();
  }

  return (
    <footer className="bg-foreground text-background/80 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/">
              <div className="flex items-center mb-6 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary w-8 h-8 mr-2">
                  <path d="M12.6.75h2.454l-1.812 3H15a.75.75 0 0 1 0 1.5h-3.38L12.6.75Zm-.5 3.75V2.25h-2.22l-1.841 5.06 1.973 1.46L11.6 4.5Zm2.385 3.354-2.291-1.7 2.79-5.242 3.034 1.394a.75.75 0 0 1 .386.656.75.75 0 0 1-.386.657l-3.533 1.9a2.25 2.25 0 0 0-.945.935l-.069.136a.75.75 0 0 1-.986.364ZM7.832 4.065a.75.75 0 0 1 .203.034L7.927 4.07l1.173.423-.681 1.87a.75.75 0 0 1-.694.504H5.91l1.922-2.803Zm2.729 5.605L9.47 8.834a.75.75 0 0 1-.231-1.033L9.593 7.2l.395-1.085 1.32.098a1.5 1.5 0 0 1 1.224.877l.536 1.293a1.5 1.5 0 0 1 0 1.18l-.996 2.244a.75.75 0 0 1-1.151.337.75.75 0 0 1-.195-.197l-.236-.416a1.5 1.5 0 0 1 .67-2.132h.001l-.003-.002Zm-1.932 9.778L9.463 17.2a.75.75 0 0 1-.175-.851l.143-.352a.75.75 0 0 1 .136-.222l2.116-2.235a.75.75 0 0 1 .233-.167l1.13-.445a.75.75 0 0 1 .549-.019l3.18 1.196a.75.75 0 0 1-.546 1.397l-2.99-1.123-1.801 1.896.338.836a.75.75 0 0 1-.546 1.016l-2.361.607a.75.75 0 0 1-.28.003Zm1.931-10.12.4.7a.75.75 0 0 1-.654 1.113h-1.217l2.293 3.217a.75.75 0 0 1 .143.54l-.313 1.432a.75.75 0 0 1-.638.588l-1.95.307a.75.75 0 0 1-.525-.124.75.75 0 0 1-.281-.462l-.21-.963-1.823 1.924a.75.75 0 0 1-1.147-.1l-1.075-1.5a.75.75 0 0 1 .028-.965L7.33 9.625l3.229.03Zm2.16-7.917L12.82.817l3.182 2.34a.75.75 0 0 1-.314 1.335l-3.988.837a.75.75 0 0 1-.213.022Z" />
                </svg>
                <span className="font-headline font-bold text-2xl text-background">GEP <span className="text-primary">Paragliding</span></span>
              </div>
            </Link>
            <p className="mb-6">Experience the freedom of flight with India's premier paragliding destination. Professional training, breathtaking views, and unforgettable experiences await you.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-background/80 hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-xl text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Courses & Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition">Gallery</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition">Testimonials</Link></li>
              <li><Link href="/equipment" className="hover:text-primary transition">Equipment</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-xl text-background mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/courses" className="hover:text-primary transition">Tandem Flights</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Basic Training (P1)</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Intermediate Course (P2)</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Pilot Certification (P3)</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Private Lessons</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Photography Flights</Link></li>
              <li><Link href="/equipment" className="hover:text-primary transition">Equipment Rental</Link></li>
              <li><Link href="/equipment" className="hover:text-primary transition">Pro Shop</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-xl text-background mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates, offers, and paragliding tips.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 mb-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="Your email address" 
                            className="px-4 py-2 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full bg-background text-foreground h-11" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={form.formState.isSubmitting}
                    className="bg-primary text-primary-foreground px-6 rounded-full hover:bg-primary/90 transition h-11"
                  >
                    Subscribe
                  </Button>
              </form>
            </Form>
            <div>
              <p className="flex items-center mb-2">
                <Phone className="text-primary mr-3 h-4 w-4" /> +91 97363-33303
              </p>
              <p className="flex items-center mb-2">
                <Mail className="text-primary mr-3 h-4 w-4" /> info@geparagliding.org
              </p>
              <p className="flex items-center">
                <MapPin className="text-primary mr-3 h-4 w-4" /> Bir Billing, Himachal Pradesh, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} GEP Paragliding. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
