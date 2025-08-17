import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SectionWrapper } from '@/components/section-wrapper';
import {
  ABOUT_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  PUBLICATIONS_DATA,
  CERTIFICATIONS_DATA,
} from '@/lib/data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PixelCard } from '@/components/ui/pixel-card';
import { ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main>
        <section id="hero" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Pixel art world map background"
            data-ai-hint="pixel art world map"
            fill
            className="object-cover image-pixelated"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="font-headline text-6xl md:text-8xl font-bold text-shadow-pixel text-white">
              PixelFolio
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-accent font-headline">
              A Data Science Adventure
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-4 md:px-8">
          <SectionWrapper id="about" title={ABOUT_DATA.title}>
            <PixelCard className="max-w-5xl mx-auto">
              <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <Avatar className="w-40 h-40 pixel-border">
                    <Image src={ABOUT_DATA.avatar} alt="Pixel character avatar" width={160} height={160} data-ai-hint="pixel art avatar" className="image-pixelated" />
                    <AvatarFallback>DS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-headline text-3xl font-bold text-primary">{ABOUT_DATA.name}</h3>
                  <p className="text-muted-foreground mb-4">{ABOUT_DATA.subtitle}</p>
                  <p className="mb-6">{ABOUT_DATA.story}</p>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Stats</h4>
                    {ABOUT_DATA.stats.map(stat => (
                      <div key={stat.label} className="mb-2">
                        <div className="flex justify-between mb-1 text-sm">
                          <span>{stat.label}</span>
                          <span>{stat.value}/100</span>
                        </div>
                        <Progress value={stat.value} className="h-3 [&>div]:bg-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PixelCard>
          </SectionWrapper>

          <SectionWrapper id="skills" title={SKILLS_DATA.title} description={SKILLS_DATA.description}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {SKILLS_DATA.skills.map(skill => (
                <PixelCard key={skill.name} className="p-4 flex flex-col items-center justify-center text-center">
                  <skill.icon className="w-12 h-12 mb-3 text-accent" />
                  <h4 className="font-headline text-lg font-bold">{skill.name}</h4>
                </PixelCard>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper id="projects" title={PROJECTS_DATA.title} description={PROJECTS_DATA.description}>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {PROJECTS_DATA.projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <PixelCard className="h-full flex flex-col">
                      <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover image-pixelated rounded-t-sm" data-ai-hint={project.dataAiHint} />
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-headline text-2xl font-bold text-primary mb-2">{project.title}</h3>
                        <ScrollArea className="h-32 pr-4 mb-4">
                           <p className="text-muted-foreground flex-grow">{project.description}</p>
                        </ScrollArea>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </div>
                        <Button asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </PixelCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </SectionWrapper>

          <SectionWrapper id="experience" title={EXPERIENCE_DATA.title} description={EXPERIENCE_DATA.description}>
             <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2"></div>
              {EXPERIENCE_DATA.entries.map((item, index) => (
                <div key={index} className="relative mb-8 pl-8 md:pl-0">
                  <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background"></div>
                  <div className={ `w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:ml-auto md:pr-12'}` }>
                    <PixelCard>
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <h3 className="font-headline text-xl font-bold text-primary mt-1">{item.title}</h3>
                        <h4 className="font-semibold">{item.company}</h4>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </PixelCard>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
          
          <SectionWrapper id="education" title={EDUCATION_DATA.title}>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {EDUCATION_DATA.entries.map((item, index) => (
                <PixelCard key={index}>
                  <div className="p-6">
                    <item.icon className="w-12 h-12 mb-3 text-accent" />
                    <h3 className="font-headline text-xl font-bold">{item.degree}</h3>
                    <p className="font-semibold text-primary">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </PixelCard>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper id="publications" title={PUBLICATIONS_DATA.title} description={PUBLICATIONS_DATA.description}>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {PUBLICATIONS_DATA.entries.map((item, index) => (
                <PixelCard key={index} className="flex items-start gap-4 p-4">
                  <item.icon className="w-10 h-10 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-headline text-lg font-bold hover:text-primary transition-colors">{item.title}</a>
                    <p className="text-sm text-muted-foreground">{item.journal}, {item.year}</p>
                  </div>
                </PixelCard>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper id="certifications" title={CERTIFICATIONS_DATA.title} description={CERTIFICATIONS_DATA.description}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {CERTIFICATIONS_DATA.entries.map((item, index) => (
                <PixelCard key={index} className="p-4 flex flex-col items-center justify-center text-center">
                  <item.icon className="w-16 h-16 mb-3 text-accent" />
                  <h4 className="font-headline text-md font-bold leading-tight">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.issuer}</p>
                </PixelCard>
              ))}
            </div>
          </SectionWrapper>

        </div>
      </main>
      <Footer />
    </div>
  );
}
