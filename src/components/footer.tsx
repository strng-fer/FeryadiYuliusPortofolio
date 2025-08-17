import Link from 'next/link';
import { Github, Linkedin, Twitter, BrainCircuit } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="#hero" className="flex items-center gap-2">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl font-bold">Feryadi Yulius Portofolio</span>
            </Link>
            <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                    <Button key={social.name} asChild variant="ghost" size="icon">
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <social.icon className="h-6 w-6" />
                        </a>
                    </Button>
                ))}
            </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Feryadi Yulius Portofolio. All rights reserved. A retro-themed portfolio adventure.</p>
        </div>
      </div>
    </footer>
  );
}
