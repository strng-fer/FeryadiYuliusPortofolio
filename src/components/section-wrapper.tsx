import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary text-shadow-pixel">{title}</h2>
        {description && <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">{description}</p>}
      </div>
      {children}
    </section>
  );
}
