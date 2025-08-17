"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <header className={cn("sticky top-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="#hero" className="flex items-center gap-2">
          <BrainCircuit className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Feryadi Yulius Portofolio</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {NAV_LINKS.map((link) => (
            <Button key={link.name} asChild variant="ghost" className="font-headline relative">
              <Link href={link.href}>
                {link.name}
                <RetroNavBadge 
                  isVisible={getSectionNewItems(link.name)}
                  className="top-1 right-1"
                />
              </Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <Link href="#hero" className="flex items-center gap-2 mb-8">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">Feryadi Yulius Portofolio</span>
                </Link>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose key={link.name} asChild>
                    <Link href={link.href} className="text-xl font-headline hover:text-primary transition-colors relative inline-block">
                      {link.name}
                      <RetroNavBadge 
                        isVisible={getSectionNewItems(link.name)}
                        className="top-0 -right-2"
                      />
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
