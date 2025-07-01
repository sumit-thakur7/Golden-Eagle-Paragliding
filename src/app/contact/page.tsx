"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const serviceId = "service_ptcviqi";
    const templateId = "template_rdncw0b";
    const publicKey = "Ne5Ky2upxlxkde8io";

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error Sending Message",
        description:
          "There was an issue sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl sm:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Have questions or want to learn more about our paragliding
            services? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Info */}
              <div className="lg:w-2/5">
                {/* Info */}
                <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg mb-8">
                  <h2 className="font-headline font-bold text-xl sm:text-2xl text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Our Location
                        </h3>
                        <p>Bir Billing, Himachal Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Phone Number
                        </h3>
                        <p>+91 97363-33303</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email Address
                        </h3>
                        <p>info@geparagliding.org</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Operating Hours
                        </h3>
                        <p>Mon - Sun: 7:00 AM - 6:00 PM</p>
                        <p className="text-sm">(Weather permitting)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
                  <h2 className="font-headline font-bold text-xl sm:text-2xl text-foreground mb-6">
                    Connect With Us
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="bg-[#3b5998] text-white p-3 rounded-full hover:opacity-90 transition"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="bg-[#1da1f2] text-white p-3 rounded-full hover:opacity-90 transition"
                    >
                      <Twitter />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white p-3 rounded-full hover:opacity-90 transition"
                    >
                      <Instagram />
                    </a>
                    <a
                      href="#"
                      aria-label="Youtube"
                      className="bg-[#ff0000] text-white p-3 rounded-full hover:opacity-90 transition"
                    >
                      <Youtube />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-3/5">
                <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
                  <h2 className="font-headline font-bold text-xl sm:text-2xl text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Email */}
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Your email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Phone */}
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Your phone (optional)"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Subject */}
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Message subject"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={5}
                                placeholder="Your message..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="px-8 py-3 bg-primary text-primary-foreground font-sans font-medium rounded-full hover:bg-primary/90 transition"
                      >
                        {form.formState.isSubmitting
                          ? "Sending..."
                          : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection>
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13511.839311727055!2d76.71769716977537!3d32.03297619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904a15c810f5657%3A0x43c91b5d86b15c9e!2sBir%20Billing%20Paragliding!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GEP Paragliding Location"
              ></iframe>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
