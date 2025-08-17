"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, BarChart, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const ICONS = [
  { icon: Database, size: 'w-8 h-8' },
  { icon: Cpu, size: 'w-10 h-10' },
  { icon: BarChart, size: 'w-6 h-6' },
  { icon: BrainCircuit, size: 'w-12 h-12' },
  { icon: Database, size: 'w-6 h-6' },
  { icon: Cpu, size: 'w-8 h-8' },
];

const INTERACTION_RADIUS = 150; // px
const REPULSION_STRENGTH = 0.5;

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<{ id: number; x: number; y: number; icon: React.ElementType; size: string; vx: number; vy: number; }[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      setShapes(
        ICONS.map((item, i) => ({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          icon: item.icon,
          size: item.size,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        }))
      );
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
    
    const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setShapes(currentShapes =>
            currentShapes.map(shape => {
                const dx = shape.x - mouseX;
                const dy = shape.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < INTERACTION_RADIUS) {
                    const angle = Math.atan2(dy, dx);
                    const force = (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS * REPULSION_STRENGTH;
                    return {
                        ...shape,
                        x: shape.x + Math.cos(angle) * force,
                        y: shape.y + Math.sin(angle) * force,
                    };
                }
                return shape;
            })
        );
    };
    
    const animationFrame = requestAnimationFrame(function animate() {
      setShapes(currentShapes =>
        currentShapes.map(shape => {
          let newX = shape.x + shape.vx;
          let newY = shape.y + shape.vy;

          if (newX < 0 || newX > containerWidth) shape.vx *= -1;
          if (newY < 0 || newY > containerHeight) shape.vy *= -1;

          return {
            ...shape,
            x: Math.max(0, Math.min(containerWidth, newX)),
            y: Math.max(0, Math.min(containerHeight, newY)),
          };
        })
      );
      requestAnimationFrame(animate);
    });

    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [shapes.length]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {shapes.map(shape => (
        <motion.div
          key={shape.id}
          className="absolute text-accent/20"
          animate={{ x: shape.x, y: shape.y }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 1 }}
          style={{ willChange: 'transform' }}
        >
          <shape.icon className={cn(shape.size)} />
        </motion.div>
      ))}
    </div>
  );
}
