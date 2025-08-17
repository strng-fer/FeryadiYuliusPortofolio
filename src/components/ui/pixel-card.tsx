"use client";

import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import type { HTMLAttributes } from "react";
import { cardVariants } from "../animated-section";

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

const PixelCard = ({ className, children, delay = 0, ...props }: PixelCardProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      ...cardVariants,
      visible: {
        ...cardVariants.visible,
        transition: {
          ...cardVariants.visible.transition,
          delay
        }
      }
    }}
    whileHover={{ 
      y: -5, 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <Card className={cn("bg-card/80 backdrop-blur-sm pixel-border-interactive", className)} {...props}>
      {children}
    </Card>
  </motion.div>
);

export { PixelCard };
