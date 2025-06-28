import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    title: 'Tandem Flight',
    description: 'Experience the thrill of flight with an experienced pilot. Perfect for beginners, no experience necessary.',
    duration: '20-30 Mins',
  },
  {
    title: 'Beginner Course',
    description: 'Learn the fundamentals of paragliding and take your first solo flights under expert supervision.',
    duration: '5 Days',
  },
  {
    title: 'Advanced Course',
    description: 'Master advanced techniques like thermalling and cross-country flying to become a seasoned pilot.',
    duration: '7 Days',
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <BookOpen className="h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Paragliding Courses
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Whether you're a first-timer or an aspiring pilot, we have the perfect course for you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="mb-4">
                  <span className="font-semibold">Duration:</span>
                  <span className="text-muted-foreground ml-2">{course.duration}</span>
                </div>
                <Button asChild className="w-full mt-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
