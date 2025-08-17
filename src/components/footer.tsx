"use client";

import Link from 'next/link';
import { Github, Linkedin, Twitter, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child animates 0.2s after the previous
        delayChildren: 0.1,   // Wait 0.1s before starting
      }
    }
  };

  // Animation variants for individual elements
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.footer 
      className="bg-card border-t border-border mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand - First element */}
          <motion.div variants={itemVariants}>
            <Link href="#hero" className="flex items-center gap-2">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Feryadi Yulius Portofolio</span>
            </Link>
          </motion.div>

          {/* Social Links - Second element with internal stagger */}
          <motion.div 
            className="flex gap-2"
            variants={itemVariants}
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    delay: 0.6 + (index * 0.1), // Stagger social icons
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="ghost" size="icon">
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Copyright - Third element */}
        <motion.div 
          className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Feryadi Yulius Portofolio. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
