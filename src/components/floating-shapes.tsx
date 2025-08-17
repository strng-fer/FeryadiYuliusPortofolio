"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  BarChart, 
  BrainCircuit, 
  Code, 
  Rocket,
  BookOpen,
  Award,
  Microscope,
  Smartphone,
  FileText,
  GitBranch,
  Search,
  Target,
  Zap,
  Layers,
  Network,
  TrendingUp,
  Activity,
  Atom,
  Bot,
  CircuitBoard,
  Hash,
  Binary,
  ChartLine
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ICONS = [
  // Data Science Icons
  { icon: Database, size: 'w-8 h-8', category: 'data' },
  { icon: BarChart, size: 'w-6 h-6', category: 'analytics' },
  { icon: TrendingUp, size: 'w-7 h-7', category: 'analytics' },
  { icon: ChartLine, size: 'w-8 h-8', category: 'analytics' },
  { icon: Activity, size: 'w-6 h-6', category: 'analytics' },
  
  // AI & Machine Learning Icons
  { icon: BrainCircuit, size: 'w-12 h-12', category: 'ai' },
  { icon: Bot, size: 'w-10 h-10', category: 'ai' },
  { icon: Atom, size: 'w-9 h-9', category: 'ai' },
  { icon: Network, size: 'w-8 h-8', category: 'ai' },
  { icon: Target, size: 'w-7 h-7', category: 'ai' },
  
  // Technology Icons
  { icon: Cpu, size: 'w-10 h-10', category: 'tech' },
  { icon: CircuitBoard, size: 'w-8 h-8', category: 'tech' },
  { icon: Code, size: 'w-9 h-9', category: 'tech' },
  { icon: GitBranch, size: 'w-7 h-7', category: 'tech' },
  { icon: Smartphone, size: 'w-8 h-8', category: 'tech' },
  
  // Research & Learning Icons
  { icon: Microscope, size: 'w-9 h-9', category: 'research' },
  { icon: BookOpen, size: 'w-8 h-8', category: 'research' },
  { icon: Search, size: 'w-7 h-7', category: 'research' },
  { icon: FileText, size: 'w-6 h-6', category: 'research' },
  
  // Innovation Icons
  { icon: Rocket, size: 'w-8 h-8', category: 'innovation' },
  { icon: Zap, size: 'w-7 h-7', category: 'innovation' },
  { icon: Layers, size: 'w-8 h-8', category: 'innovation' },
  { icon: Award, size: 'w-9 h-9', category: 'innovation' },
  
  // Math & Logic Icons
  { icon: Hash, size: 'w-6 h-6', category: 'math' },
  { icon: Binary, size: 'w-8 h-8', category: 'math' },
  
  // Additional variety with different sizes
  { icon: Database, size: 'w-6 h-6', category: 'data' },
  { icon: Cpu, size: 'w-8 h-8', category: 'tech' },
  { icon: BarChart, size: 'w-10 h-10', category: 'analytics' },
  { icon: BrainCircuit, size: 'w-7 h-7', category: 'ai' },
  { icon: Code, size: 'w-6 h-6', category: 'tech' },
  { icon: Rocket, size: 'w-12 h-12', category: 'innovation' },
  { icon: Network, size: 'w-9 h-9', category: 'ai' },
  { icon: Microscope, size: 'w-7 h-7', category: 'research' },
  { icon: Bot, size: 'w-8 h-8', category: 'ai' },
  { icon: TrendingUp, size: 'w-9 h-9', category: 'analytics' },
  { icon: CircuitBoard, size: 'w-10 h-10', category: 'tech' },
  { icon: Target, size: 'w-8 h-8', category: 'ai' },
];

const INTERACTION_RADIUS = 120; // px - reduced for more responsive interaction
const REPULSION_STRENGTH = 0.3; // reduced for smoother movement
const MAX_SHAPES = 15; // Reduced for better performance and visibility

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const [isInitialized, setIsInitialized] = useState(false);
  const [shapes, setShapes] = useState<{ 
    id: number; 
    x: number; 
    y: number; 
    icon: React.ElementType; 
    size: string; 
    category: string;
    vx: number; 
    vy: number; 
    opacity: number;
    rotation: number;
    rotationSpeed: number;
  }[]>([]);

  useEffect(() => {
    // Use viewport dimensions instead of container
    const initializeWithViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (width > 0 && height > 0) {
        initializeShapes(width, height);
      }
    };

    // Initialize immediately if possible
    if (typeof window !== 'undefined') {
      initializeWithViewport();
      
      // Also listen for resize
      const handleResize = () => {
        initializeWithViewport();
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const initializeShapes = (width: number, height: number) => {
    // Create shapes from the expanded icon set
    const selectedIcons = [];
    for (let i = 0; i < MAX_SHAPES; i++) {
      const iconData = ICONS[i % ICONS.length];
      selectedIcons.push({
        ...iconData,
        id: i
      });
    }
    
    const newShapes = selectedIcons.map((item) => ({
      id: item.id,
      x: Math.random() * (width - 100) + 50, // Add padding from edges
      y: Math.random() * (height - 100) + 50,
      icon: item.icon,
      size: item.size,
      category: item.category,
      vx: (Math.random() - 0.5) * 1.2, // Slightly faster movement
      vy: (Math.random() - 0.5) * 1.2,
      opacity: 0.4 + Math.random() * 0.3, // Higher base opacity
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5, // Rotation speed
    }));
    
    setShapes(newShapes);
    setIsInitialized(true);
    console.log(`Initialized ${newShapes.length} floating shapes with viewport ${width}x${height}`); // Debug log
  };

  useEffect(() => {
    if (!isInitialized || shapes.length === 0) return;
    
    const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

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
                        x: shape.x + Math.cos(angle) * force * 8, // Increased responsiveness
                        y: shape.y + Math.sin(angle) * force * 8,
                        opacity: Math.min(0.8, shape.opacity + 0.2), // Brighten on interaction
                    };
                }
                return {
                    ...shape,
                    opacity: Math.max(0.3, shape.opacity - 0.01), // Fade back gradually
                };
            })
        );
    };
    
    const animate = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      
      setShapes(currentShapes =>
        currentShapes.map(shape => {
          let newX = shape.x + shape.vx;
          let newY = shape.y + shape.vy;
          let newRotation = shape.rotation + shape.rotationSpeed;
          
          let bounced = false;
          if (newX < 0 || newX > containerWidth) {
            shape.vx *= -0.8; // Slight energy loss on bounce
            bounced = true;
          }
          if (newY < 0 || newY > containerHeight) {
            shape.vy *= -0.8;
            bounced = true;
          }

          if (bounced) {
             newX = shape.x + shape.vx;
             newY = shape.y + shape.vy;
          }

          return {
            ...shape,
            x: Math.max(0, Math.min(containerWidth, newX)),
            y: Math.max(0, Math.min(containerHeight, newY)),
            rotation: newRotation % 360,
          };
        })
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInitialized, shapes.length]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Debug info - remove in production */}
      {!isInitialized && (
        <div className="absolute top-4 left-4 text-white text-sm z-50">
          Loading shapes...
        </div>
      )}
      
      {shapes.map(shape => {
        // Category-based colors - Made more visible with better contrast
        const getCategoryColor = (category: string) => {
          switch(category) {
            case 'data': return 'text-blue-400/80';
            case 'analytics': return 'text-green-400/80';
            case 'ai': return 'text-purple-400/80';
            case 'tech': return 'text-cyan-400/80';
            case 'research': return 'text-yellow-400/80';
            case 'innovation': return 'text-pink-400/80';
            case 'math': return 'text-orange-400/80';
            default: return 'text-white/60';
          }
        };

        return (
          <motion.div
            key={shape.id}
            className={cn("absolute", getCategoryColor(shape.category))}
            animate={{ 
              x: shape.x, 
              y: shape.y,
              rotate: shape.rotation,
              opacity: shape.opacity
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 50, 
              damping: 12, 
              mass: 0.5 
            }}
            style={{ 
              willChange: 'transform, opacity',
              transformOrigin: 'center',
              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))', // Glow effect
            }}
          >
            <shape.icon className={cn(shape.size)} />
          </motion.div>
        );
      })}
    </div>
  );
}
