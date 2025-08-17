"use client";

import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { textVariants } from './animated-section';

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, title, description, children, className }: SectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <motion.section 
      id={id} 
      className={cn("py-16 md:py-24", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-12" variants={textVariants}>
        <motion.h2 
          className="font-headline text-4xl md:text-5xl font-bold text-primary text-shadow-pixel"
          variants={textVariants}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto"
            variants={textVariants}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
      <motion.div variants={containerVariants}>
        {children}
      </motion.div>
    </motion.section>
  );
}
