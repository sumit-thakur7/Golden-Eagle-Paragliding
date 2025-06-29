import type { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  index?: number;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  excerpt,
  author,
  date,
  image,
  slug,
  index = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          data-ai-hint="paragliding blog"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </span>
        </div>
        <h3 className="font-headline font-bold text-xl text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-primary font-sans font-medium hover:text-primary/80 transition flex items-center"
        >
          Read More
          <ArrowRight className="h-5 w-5 ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;