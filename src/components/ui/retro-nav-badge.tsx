"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RetroNavBadgeProps {
  isVisible: boolean;
  className?: string;
}

// Mini pixel exclamation mark for nav
function MiniPixelExclamation() {
  return (
    <div className="relative w-2 h-2.5">
      {/* Exclamation body - 2 pixels */}
      <div className="absolute w-0.5 h-0.5 bg-white" style={{ left: '50%', top: '0%', transform: 'translateX(-50%)' }} />
      <div className="absolute w-0.5 h-0.5 bg-white" style={{ left: '50%', top: '30%', transform: 'translateX(-50%)' }} />
      
      {/* Exclamation dot */}
      <div className="absolute w-0.5 h-0.5 bg-white" style={{ left: '50%', top: '70%', transform: 'translateX(-50%)' }} />
    </div>
  );
}

export function RetroNavBadge({ isVisible, className }: RetroNavBadgeProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ 
        scale: 1,
        rotate: [0, 8, -8, 0]
      }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 15 },
        rotate: { repeat: Infinity, duration: 2.5 }
      }}
      className={cn(
        "absolute -top-1 -right-1 z-10",
        "w-4 h-4",
        "flex items-center justify-center",
        "bg-red-500",
        "border border-white",
        "rounded-none", // Sharp corners for pixel art
        className
      )}
      style={{
        // Pixel art rendering
        imageRendering: 'pixelated',
        // 8-bit style shadow
        boxShadow: `
          1px 0 0 0 #dc2626,
          0 1px 0 0 #dc2626,
          1px 1px 0 0 #dc2626,
          2px 1px 0 0 rgba(0, 0, 0, 0.4),
          1px 2px 0 0 rgba(0, 0, 0, 0.4),
          2px 2px 0 0 rgba(0, 0, 0, 0.6)
        `,
        backgroundColor: '#ef4444'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1]
        }}
        transition={{
          scale: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <MiniPixelExclamation />
      </motion.div>
    </motion.div>
  );
}
