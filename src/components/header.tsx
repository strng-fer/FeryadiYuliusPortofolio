"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Gamepad2 } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="#hero" className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">PixelFolio</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {NAV_LINKS.map((link) => (
            <Button key={link.name} asChild variant="ghost" className="font-headline">
              <Link href={link.href}>{link.name}</Link>
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
                    <Gamepad2 className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">PixelFolio</span>
                </Link>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose key={link.name} asChild>
                    <Link href={link.href} className="text-xl font-headline hover:text-primary transition-colors">
                      {link.name}
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
