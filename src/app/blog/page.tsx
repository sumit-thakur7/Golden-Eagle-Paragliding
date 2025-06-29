import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title: "Top 5 Safety Tips for First-Time Flyers",
    excerpt:
      "Paragliding is an exhilarating sport, but safety always comes first. Here are our top tips to ensure a safe and enjoyable flight.",
    author: "Jane Doe",
    date: "July 22, 2024",
    image: "https://placehold.co/600x400.png",
    slug: "safety-tips-for-first-time-flyers",
  },
  {
    title: "The Science of Thermals: How Paragliders Stay Aloft",
    excerpt:
      "Ever wondered how paragliders can stay in the air for hours? The secret lies in rising columns of warm air called thermals.",
    author: "John Smith",
    date: "July 18, 2024",
    image: "https://placehold.co/600x400.png",
    slug: "science-of-thermals",
  },
  {
    title: "A Guide to Paragliding in the Himalayas",
    excerpt:
      "The Himalayas offer some of the most spectacular scenery for paragliding. Here’s what you need to know for your high-altitude adventure.",
    author: "Anjali Sharma",
    date: "July 15, 2024",
    image: "https://placehold.co/600x400.png",
    slug: "paragliding-in-himalayas",
  },
];

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
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
            image={post.image}
            slug={post.slug}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}