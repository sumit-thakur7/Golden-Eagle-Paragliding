"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { galleryData } from "@/lib/gallery-data";
import GalleryImage from "@/components/GalleryImage";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function GalleryPage() {
  const videos = [
    {
      id: "LU6EkmPP-iM",
      title: "Soaring Above Bir Billing",
      description: "Experience the magnificent views of the Himalayas from a paraglider's perspective."
    },
    {
      id: "3PtZUDY8M4E",
      title: "Learning to Paraglide",
      description: "Follow the journey of a student learning to paraglide with our experienced instructors."
    },
    {
      id: "6XQAghJhkE4",
      title: "Sunset Paragliding Magic",
      description: "The most beautiful time to fly is during sunset, with golden light bathing the landscape."
    },
    {
      id: "l7KeSCQ5GS8",
      title: "Cross Country Adventure",
      description: "Follow our advanced pilots as they navigate a challenging cross-country route."
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-5xl text-white mb-4">Gallery</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Explore stunning moments captured during our paragliding adventures. 
            Each image tells a story of freedom, adventure, and the beauty of flight.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Our <span className="text-primary">Photo Gallery</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Browse through moments of pure joy and breathtaking views from our paragliding adventures. 
                Click on any image to view it in full size.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryData.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  index={index}
                  hint="paragliding flight"
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Gallery */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Paragliding <span className="text-primary">Videos</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Experience the thrill of paragliding through our collection of videos.
                Feel the freedom of flight from the comfort of your screen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-card p-4 rounded-xl shadow-lg">
                  <div className="mb-4">
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
