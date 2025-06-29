import type { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  level: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  index?: number;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  level,
  description,
  features,
  price,
  image,
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
      }
    }
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beginner":
        return "bg-accent/10 text-accent";
      case "Intermediate":
        return "bg-primary/10 text-primary";
      case "Advanced":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
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
      <div className="h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          width={600}
          height={400}
          data-ai-hint="paragliding service"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-headline font-bold text-xl text-foreground">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(level)}`}>
            {level}
          </span>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-muted-foreground">
              <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="font-headline font-bold text-2xl text-foreground">{price}</span>
          <Link href="/booking">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans rounded-full">
                Book Now
              </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
