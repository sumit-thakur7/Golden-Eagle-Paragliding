"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { FC } from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  index?: number;
  width?: number;
  height?: number;
  hint?: string;
}

const GalleryImage: FC<GalleryImageProps> = ({
  src,
  alt,
  index = 0,
  width = 600,
  height = 400,
  hint = "gallery image",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => setIsOpen(true);
  const closeImage = () => setIsOpen(false);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalImageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div
        className="overflow-hidden rounded-lg cursor-pointer h-64"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        onClick={openImage}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          data-ai-hint={hint}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeImage}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              variants={modalImageVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[90vh] rounded-lg object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-background/20 hover:bg-background/40 text-foreground w-10 h-10 rounded-full flex items-center justify-center transition"
                onClick={closeImage}
                aria-label="Close image view"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryImage;
