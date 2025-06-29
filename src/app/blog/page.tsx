"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as LucideIcons from "lucide-react";
import { blogData } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

// A type guard to check if a string is a valid Lucide icon name
function isLucideIcon(name: string): name is keyof typeof LucideIcons {
  return name in LucideIcons;
}

const IconComponent = ({ name }: { name: string }) => {
  if (isLucideIcon(name)) {
    const Icon = LucideIcons[name] as React.ElementType; // Cast to a generic component type
    return <Icon className="h-full w-full" />;
  }
  // Fallback icon or null if the icon doesn't exist
  return <LucideIcons.HelpCircle className="h-full w-full" />;
};


export default function BlogPage() {

  return (
    <div>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-cta bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline font-bold text-5xl text-white mb-4">Blog</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest paragliding tips, stories, and adventures from our community.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Featured <span className="text-primary">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Explore our most popular articles about paragliding techniques, destinations, 
                safety tips, and inspiring stories from our community.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {blogData.featured.map((post, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                  <div className="md:flex h-full">
                    <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={400}
                        height={600}
                        data-ai-hint="paragliding blog"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <span className="flex items-center"><LucideIcons.Calendar className="h-4 w-4 mr-1" /> {formatDate(post.date)}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center"><LucideIcons.User className="h-4 w-4 mr-1" /> {post.author}</span>
                      </div>
                      <h3 className="font-headline font-bold text-xl text-foreground mb-3 flex-grow">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                      <Link href={`/blog/${post.id}`} className="mt-auto">
                        <Button variant="link" className="text-primary font-sans font-medium hover:text-primary/80 transition p-0 flex items-center">
                          Read More <LucideIcons.ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Recent Posts */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Recent <span className="text-primary">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Check out our latest blog posts to stay up-to-date with the paragliding world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogData.recent.map((post, index) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  date={formatDate(post.date)}
                  image={post.image}
                  slug={post.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-4xl text-foreground mb-4">
                Blog <span className="text-primary">Categories</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Browse articles by category to find topics that interest you most.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {blogData.categories.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition text-center flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="text-4xl mb-4 text-primary w-12 h-12">
                     <IconComponent name={category.icon} />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{category.description}</p>
                  <Link href={`/blog/category/${category.slug}`} className="mt-auto">
                    <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
                      Browse Articles
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Subscribe Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-cta bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline font-bold text-4xl mb-6">Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Get the latest paragliding articles, tips, and updates delivered directly to your inbox.
              We promise not to spam you – only valuable content related to paragliding.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" 
                  required
                />
                <Button type="submit" className="px-6 py-3 bg-accent text-accent-foreground font-sans font-medium rounded-full hover:bg-accent/90 transition">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
