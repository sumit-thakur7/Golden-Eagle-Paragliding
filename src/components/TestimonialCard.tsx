import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  index?: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  text,
  avatar,
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

  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<Star key={`full-${i}`} className="h-5 w-5 text-primary fill-primary" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalf key={`half-${i}`} className="h-5 w-5 text-primary fill-primary" />);
      } else {
        stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-primary/30" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      className="bg-card p-8 rounded-xl shadow-lg relative h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="text-primary text-8xl absolute -top-4 left-4 opacity-10 font-serif">"</div>
      <div className="relative z-10 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="text-primary flex">
            {renderStars(rating)}
          </div>
          <span className="ml-2 text-muted-foreground font-medium">{rating.toFixed(1)}</span>
        </div>
        <p className="text-muted-foreground italic mb-6 flex-grow">{text}</p>
        <div className="flex items-center">
          <Image
            src={avatar}
            alt={`${name} avatar`}
            width={48}
            height={48}
            data-ai-hint="person portrait"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-headline font-semibold text-foreground">{name}</h4>
            <p className="text-muted-foreground text-sm">{location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;