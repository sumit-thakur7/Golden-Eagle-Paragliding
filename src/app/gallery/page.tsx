import { galleryData } from "@/lib/gallery-data";
import GalleryImage from "@/components/GalleryImage";

export default function GalleryPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-headline font-bold">Our Gallery</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Explore stunning moments captured during our paragliding adventures.
          Each image tells a story of freedom, adventure, and the beauty of flight.
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
    </main>
  );
}
