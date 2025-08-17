"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RetroNotificationBadgeProps {
  isVisible: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Pixel art exclamation mark component
function PixelExclamationMark({ size = 'md' }: { size: 'sm' | 'md' | 'lg' }) {
  const pixelSize = {
    sm: 'w-0.5 h-0.5',
    md: 'w-1 h-1', 
    lg: 'w-1.5 h-1.5'
  };

  const containerSize = {
    sm: 'w-3 h-4',
    md: 'w-4 h-5',
    lg: 'w-5 h-6'
  };

  return (
    <div className={cn("relative", containerSize[size])}>
      {/* Exclamation mark body - vertical line */}
      <div className={cn("absolute bg-white", pixelSize[size])} style={{ left: '50%', top: '0%', transform: 'translateX(-50%)' }} />
      <div className={cn("absolute bg-white", pixelSize[size])} style={{ left: '50%', top: '20%', transform: 'translateX(-50%)' }} />
      <div className={cn("absolute bg-white", pixelSize[size])} style={{ left: '50%', top: '40%', transform: 'translateX(-50%)' }} />
      
      {/* Exclamation mark dot */}
      <div className={cn("absolute bg-white", pixelSize[size])} style={{ left: '50%', top: '80%', transform: 'translateX(-50%)' }} />
    </div>
  );
}

export function RetroNotificationBadge({ 
  isVisible, 
  className, 
  size = 'md' 
}: RetroNotificationBadgeProps) {
  if (!isVisible) return null;

  const badgeSize = {
    sm: 'w-7 h-7', // Further increased for maximum visibility
    md: 'w-9 h-9', // Larger size for medium screens
    lg: 'w-12 h-12' // Maximum size for large screens
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
        y: [0, -6, 0], // Maximum floating movement
        x: [0, 2, -2, 0], // Increased horizontal wobble
      }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 15 },
        rotate: { type: "spring", stiffness: 300, damping: 20 },
        y: { 
          repeat: Infinity, 
          duration: 1.5, // Faster floating
          ease: "easeInOut" 
        },
        x: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }
      }}
      className={cn(
        "absolute -top-3 -right-3 z-30", // Maximum protrusion
        "flex items-center justify-center",
        // Pixel art styling with 8-bit colors
        "bg-red-500",
        "border-2 border-white",
        "rounded-none", // Sharp corners for pixel art
        // Pixelated shadow effect
        "shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]",
        badgeSize[size],
        className
      )}
      style={{
        // Pixel art rendering
        imageRendering: 'pixelated',
        // 8-bit style box shadow with blueprint red color
        boxShadow: `
          2px 0 0 0 #FF595E,
          0 2px 0 0 #FF595E,
          2px 2px 0 0 #FF595E,
          4px 2px 0 0 rgba(0, 0, 0, 0.4),
          2px 4px 0 0 rgba(0, 0, 0, 0.4),
          4px 4px 0 0 rgba(0, 0, 0, 0.7),
          6px 4px 0 0 rgba(0, 0, 0, 0.2),
          4px 6px 0 0 rgba(0, 0, 0, 0.2)
        `,
        // Using blueprint primary red color
        backgroundColor: '#FF595E',
        border: '2px solid #ffffff'
      }}
    >
      <motion.div
        animate={{ 
          rotate: [0, 2, -2, 0],
          scale: [1, 1.05, 1],
          opacity: [1, 0.9, 1] // Subtle blink effect
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 1.5 },
          scale: { repeat: Infinity, duration: 2 },
          opacity: { repeat: Infinity, duration: 1, ease: "easeInOut" }
        }}
      >
        <PixelExclamationMark size={size} />
      </motion.div>
    </motion.div>
  );
}
