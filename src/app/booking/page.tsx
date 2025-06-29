"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Clock, MapPin, Truck } from "lucide-react";

const bookingFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  date: z.string().refine((val) => {
    if (!val) return false;
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Please select a date from today or in the future."),
  time: z.string().min(1, "Please select a time slot."),
  participants: z.preprocess(
    (val) => parseInt(z.string().parse(val), 10),
    z.number().min(1, "At least one participant is required.").max(10, "Maximum of 10 participants allowed.")
  ),
  message: z.string().optional(),
});

const services = [
  { value: "tandem-flight-experience", label: "Tandem Flight Experience" },
  { value: "p1-basic-course", label: "P1 Basic Course" },
  { value: "p2-intermediate-course", label: "P2 Intermediate Course" },
  { value: "p3-pilot-certification", label: "P3 Pilot Certification" },
  { value: "private-lessons", label: "Private Lessons" },
  { value: "photography-flights", label: "Photography Flights" },
];

const timeSlots = [
  { value: "morning", label: "Morning (8:00 AM - 11:00 AM)" },
  { value: "midday", label: "Midday (11:00 AM - 2:00 PM)" },
  { value: "afternoon", label: "Afternoon (2:00 PM - 5:00 PM)" },
];

const whyBookItems = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Safety First",
      description: "All our flights are conducted by certified instructors with years of experience and top-quality equipment.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Flexible Scheduling",
      description: "Need to reschedule? No problem. We offer free rescheduling up to 48 hours before your flight.",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Prime Locations",
      description: "Fly over some of the most breathtaking landscapes with perfect flying conditions.",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Free Transport",
      description: "We provide complimentary pickup and drop-off service from nearby hotels and transport hubs.",
    },
];


export default function BookingPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      participants: 1,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    console.log("Booking Request:", values);
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your adventure.",
    });
    form.reset();
  }

  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-4xl sm:text-5xl text-white mb-4">Book Your Adventure</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Ready to experience the thrill of paragliding? Reserve your spot now and prepare for an unforgettable adventure.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <AnimatedSection>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-foreground mb-6 text-center">Reserve Your Paragliding Experience</h2>
              <p className="text-muted-foreground mb-8 text-center">
                Fill out the form below to book your paragliding adventure. We'll contact you shortly to confirm your reservation and provide additional details.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map(service => (
                                <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map(slot => (
                                <SelectItem key={slot.value} value={slot.value}>{slot.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="participants"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Participants</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="1" 
                              max="10" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Any specific requirements or questions?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Button 
                      type="submit" 
                      disabled={form.formState.isSubmitting}
                      className="w-full px-8 py-4 bg-primary text-primary-foreground font-sans font-medium rounded-full hover:bg-primary/90 transition text-base"
                    >
                      {form.formState.isSubmitting ? "Processing..." : "Book Your Adventure Now"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Book With Us */}
      <AnimatedSection>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Why Book With <span className="text-primary">GEP Paragliding</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Choose us for your paragliding adventure and enjoy these exclusive benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyBookItems.map((item, index) => (
                 <div key={index} className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
                    <div className="text-primary mb-4">
                        {item.icon}
                    </div>
                    <h3 className="font-headline font-bold text-lg sm:text-xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                        {item.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Booking Policy */}
      <AnimatedSection>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-foreground mb-6 text-center">Booking Policy</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-headline font-semibold text-lg sm:text-xl text-foreground mb-2">Payment</h3>
                  <p>
                    A 30% deposit is required to confirm your booking. The remaining balance is due on the day of your flight.
                    We accept cash, credit cards, and online transfers.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-headline font-semibold text-lg sm:text-xl text-foreground mb-2">Cancellation</h3>
                  <p>
                    Cancellations made more than 72 hours before the scheduled flight receive a full refund.
                    Cancellations within 48-72 hours receive a 50% refund. Cancellations less than 48 hours before
                    the flight are non-refundable but can be rescheduled within 3 months.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-headline font-semibold text-lg sm:text-xl text-foreground mb-2">Weather Conditions</h3>
                  <p>
                    In case of unsuitable weather conditions, we'll offer to reschedule your flight or provide a full refund.
                    Safety is our priority, and our pilots make the final decision regarding weather suitability.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-headline font-semibold text-lg sm:text-xl text-foreground mb-2">Health Requirements</h3>
                  <p>
                    Participants should be in good health and not suffer from heart conditions, back problems, or 
                    serious medical issues. Please inform us of any health concerns when booking. Pregnant women 
                    and individuals under the influence of alcohol or drugs are not permitted to fly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
