import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingRobotButtonProps {
  className?: string;
}

export const FloatingRobotButton: React.FC<FloatingRobotButtonProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    // Create a link to download CV (you'll need to add the CV file to public folder)
    const link = document.createElement('a');
    link.href = '/CV - Feryadi Yulius.pdf'; // Update this path to your CV file
    link.download = 'Feryadi_Yulius_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }
          }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          className={`fixed bottom-6 right-6 z-50 ${className}`}
        >
          {/* Speech Bubble */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }
                }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-full right-0 mb-2 bg-white border-2 border-primary rounded-lg px-3 py-1.5 shadow-lg max-w-xs"
              >
                <div className="absolute top-full right-4 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white"></div>
                <div className="absolute top-full right-4 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-primary transform translate-y-px"></div>

                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-medium text-primary">
                    Download my CV!
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Robot Button */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: {
                rotate: {
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleDownloadCV}
            className="relative cursor-pointer"
          >
            {/* Retro 8-Bit Pixel Scroll - Compact Size */}
            <div className="relative bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-400 pixel-border rounded-none p-2 shadow-xl border-3 border-yellow-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl transform scale-75 hover:scale-90">
              {/* Retro Scroll Top - Smaller */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-3 bg-gradient-to-b from-red-600 to-red-800 pixel-border"></div>
                <div className="w-3 h-2 bg-red-700 pixel-border mx-auto -mt-1"></div>
                <div className="flex justify-center gap-0.5 -mt-0.5">
                  <div className="w-0.5 h-0.5 bg-yellow-400 pixel-border"></div>
                  <div className="w-0.5 h-0.5 bg-yellow-400 pixel-border"></div>
                </div>
              </div>

              {/* Retro Scroll Body - Compact */}
              <div className="bg-gradient-to-b from-yellow-200 to-orange-100 pixel-border p-1.5">
                {/* 8-Bit Decorative Header - Smaller */}
                <div className="flex justify-center mb-1.5">
                  <div className="grid grid-cols-5 gap-0.5">
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-1.5 h-1.5 bg-red-600 pixel-border"
                    />
                    <div className="w-1.5 h-1.5 bg-blue-600 pixel-border"></div>
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                      className="w-1.5 h-1.5 bg-red-600 pixel-border"
                    />
                    <div className="w-1.5 h-1.5 bg-blue-600 pixel-border"></div>
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                      }}
                      className="w-1.5 h-1.5 bg-red-600 pixel-border"
                    />
                  </div>
                </div>

                {/* Retro Text Lines - Thinner */}
                <div className="space-y-0.5">
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="h-1 bg-red-700 pixel-border"
                    style={{ width: '85%' }}
                  />
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                    className="h-1 bg-blue-700 pixel-border ml-auto"
                    style={{ width: '75%' }}
                  />
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="h-1 bg-red-700 pixel-border"
                    style={{ width: '90%' }}
                  />
                </div>

                {/* Retro Seal - Smaller */}
                <div className="flex justify-center mt-2">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-700 pixel-border flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-yellow-300 pixel-border"></div>
                    </div>
                    {/* Retro sparkles around seal */}
                    <motion.div
                      animate={{
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-0.5 -left-0.5 w-0.5 h-0.5 bg-yellow-400 pixel-border"
                    />
                    <motion.div
                      animate={{
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute -top-0.5 -right-0.5 w-0.5 h-0.5 bg-yellow-400 pixel-border"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Retro Scroll Bottom - Smaller */}
              <div className="flex justify-center mt-1.5">
                <motion.div
                  animate={{
                    scaleX: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-8 h-2 bg-gradient-to-r from-red-600 via-red-700 to-red-600 pixel-border"
                />
              </div>

              {/* Retro Download Badge - Smaller */}
              <div className="absolute -bottom-1.5 -right-1.5 bg-blue-600 pixel-border p-1 border-2 border-yellow-400 shadow-lg hover:scale-110 transition-transform duration-200">
                <Download className="w-3 h-3 text-yellow-300" />
              </div>
            </div>

            {/* Floating Animation - Subtle for Compact Size */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-yellow-300/30"
              style={{ filter: 'blur(4px)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};