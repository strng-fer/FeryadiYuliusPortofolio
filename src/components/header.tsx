"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, BrainCircuit } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { RetroNavBadge } from '@/components/ui/retro-nav-badge';
import { useViewedItems } from '@/hooks/use-viewed-items';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { hasNewItems, isLoaded } = useViewedItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  // Define which sections have viewable items
  const getSectionNewItems = (sectionName: string) => {
    if (!isLoaded) return false;
    
    switch(sectionName.toLowerCase()) {
      case 'projects':
        // Assuming we have project items with IDs 0-8 based on PROJECTS_DATA
        return hasNewItems(Array.from({length: 9}, (_, i) => `project-${i}`));
      case 'publications':
        // Publications items  
        return hasNewItems(['publication-0', 'publication-1']);
      case 'certifications':
        // Certifications items
        return hasNewItems(['certification-0', 'certification-1', 'certification-2']);
      default:
        return false;
    }
  };

  return (
    <motion.header 
      className={cn("sticky top-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent")}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link href="#hero" className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold">Feryadi Yulius Portofolio</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex gap-1" variants={itemVariants}>
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.4 + (index * 0.1),
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }
              }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Button asChild variant="ghost" className="font-headline relative">
                <Link href={link.href}>
                  {link.name}
                  <RetroNavBadge 
                    isVisible={getSectionNewItems(link.name)}
                    className="top-1 right-1"
                  />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu */}
        <motion.div className="md:hidden" variants={itemVariants}>
          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="#hero" className="flex items-center gap-2 mb-8">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <span className="font-headline text-2xl font-bold">Feryadi Yulius Portofolio</span>
                </Link>
              </motion.div>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        delay: 0.2 + (index * 0.1),
                        type: "spring",
                        stiffness: 150,
                        damping: 15
                      }
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <SheetClose asChild>
                      <Link href={link.href} className="text-xl font-headline hover:text-primary transition-colors relative inline-block">
                        {link.name}
                        <RetroNavBadge 
                          isVisible={getSectionNewItems(link.name)}
                          className="top-0 -right-2"
                        />
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
}
