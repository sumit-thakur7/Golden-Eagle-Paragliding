import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'Top 5 Safety Tips for First-Time Flyers',
    excerpt: 'Paragliding is an exhilarating sport, but safety always comes first. Here are our top tips...',
    image: { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Safety equipment check', hint: 'safety equipment' },
  },
  {
    title: 'The Science of Thermals: How Paragliders Stay Aloft',
    excerpt: 'Ever wondered how paragliders can stay in the air for hours? The secret lies in rising columns of warm air...',
    image: { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Paraglider circling in the sky', hint: 'paraglider sky' },
  },
  {
    title: 'A Guide to Paragliding in the Himalayas',
    excerpt: 'The Himalayas offer some of the most spectacular scenery for paragliding. Here’s what you need to know...',
    image: { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Himalayan mountain range', hint: 'himalayan mountains' },
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <FileText className="h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            From Our Blog
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Insights, stories, and tips from our team of passionate aviators.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={post.image.hint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0 h-auto self-start text-accent hover:text-accent/90">
                  <Link href="#">Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
