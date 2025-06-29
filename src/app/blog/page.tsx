import BlogCard from "@/components/BlogCard";
import { blogData } from "@/lib/blog-data";

const allPosts = [...blogData.featured, ...blogData.recent];

export default function BlogPage() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-headline font-bold">Blog</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Check out our latest news, stories, and articles from the world of
          paragliding.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
            image={post.image}
            slug={post.id}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
