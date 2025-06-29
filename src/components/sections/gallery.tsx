import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Paraglider taking off", hint: "paraglider takeoff" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Aerial view of a valley", hint: "aerial valley" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Close-up of a paraglider's wing", hint: "paraglider wing" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Sunset flight", hint: "paragliding sunset" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Group of paragliders", hint: "paragliding group" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Flyer with a scenic background", hint: "scenic flight" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <ImageIcon className="h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Gallery
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
            A glimpse into the breathtaking moments we create in the sky.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={image.hint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
