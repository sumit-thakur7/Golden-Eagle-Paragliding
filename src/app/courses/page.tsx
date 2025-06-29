import { courseData } from "@/lib/course-data";
import ServiceCard from "@/components/ServiceCard";

export default function CoursesPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-headline font-bold">Our Courses & Services</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From your first tandem flight to becoming a certified paraglider pilot, we offer a range of courses and services for all experience levels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courseData.map((course, index) => (
          <ServiceCard
            key={course.title}
            title={course.title}
            level={course.level}
            description={course.description}
            features={course.features}
            price={course.price}
            image={course.image}
            actionText={course.actionText}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
