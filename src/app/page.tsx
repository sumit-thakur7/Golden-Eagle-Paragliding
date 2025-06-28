import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import CoursesSection from '@/components/sections/courses';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';
import BlogSection from '@/components/sections/blog';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';
import ScrollAnimation from '@/components/scroll-animation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ScrollAnimation>
          <AboutSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <CoursesSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <GallerySection />
        </ScrollAnimation>
        <ScrollAnimation>
          <TestimonialsSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <BlogSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <FaqSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <ContactSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
