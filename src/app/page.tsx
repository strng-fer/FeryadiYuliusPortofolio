import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import { ExternalLink, Star, Users, Calendar, Link as LinkIcon, ShieldCheck } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main>
        <section id="hero" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Abstract data visualization background"
            data-ai-hint="data visualization abstract"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <h1 className="font-headline text-6xl md:text-8xl font-bold text-shadow-pixel text-white">
              Feryadi Yulius Portofolio
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
                    <Image src={ABOUT_DATA.avatar} alt="Pixel character avatar" width={160} height={160} data-ai-hint="professional headshot" className="image-pixelated" />
                    <AvatarFallback>DS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-headline text-3xl font-bold text-primary">{ABOUT_DATA.name}</h3>
                  <p className="text-muted-foreground mb-4">{ABOUT_DATA.subtitle}</p>
                  <p className="mb-6">{ABOUT_DATA.story}</p>
                  <div>
                    <h4 className="font-headline text-xl mb-3">Key Strengths</h4>
                    <ul className="space-y-2">
                      {ABOUT_DATA.stats.map(stat => (
                        <li key={stat.label} className="flex items-center gap-3">
                          <Star className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{stat.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </PixelCard>
          </SectionWrapper>

          <SectionWrapper id="skills" title={SKILLS_DATA.title} description={SKILLS_DATA.description}>
            <TooltipProvider>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {SKILLS_DATA.skills.map(skill => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <PixelCard className="p-4 flex flex-col items-center justify-center text-center cursor-help">
                        <skill.icon className="w-12 h-12 mb-3 text-accent" />
                        <h4 className="font-headline text-lg font-bold">{skill.name}</h4>
                      </PixelCard>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </SectionWrapper>

          <SectionWrapper id="projects" title={PROJECTS_DATA.title} description={PROJECTS_DATA.description}>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {PROJECTS_DATA.projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <PixelCard className="h-full flex flex-col">
                        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover image-pixelated rounded-t-sm" data-ai-hint={project.dataAiHint} />
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-headline text-2xl font-bold text-primary mb-2">{project.title}</h3>
                          <ScrollArea className="h-24 pr-4 mb-4">
                            <p className="text-muted-foreground flex-grow">{project.description}</p>
                          </ScrollArea>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                          </div>
                          <DialogTrigger asChild>
                            <Button>View Details</Button>
                          </DialogTrigger>
                        </div>
                      </PixelCard>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-64 object-cover image-pixelated rounded-t-sm mb-4" data-ai-hint={project.dataAiHint} />
                          <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 my-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-semibold">Year: {project.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Users className="w-5 h-5 text-primary" />
                             <span className="font-semibold">Collaborators: {project.collaborators.join(', ')}</span>
                          </div>
                        </div>
                        <ScrollArea className="h-40 pr-4 mb-4">
                            <DialogDescription className="text-base">
                            {project.description}
                            </DialogDescription>
                        </ScrollArea>
                        <div className="flex flex-wrap gap-2 my-4">
                            {project.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </div>
                         <div className="flex flex-col items-start gap-2">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-2">
                                    <LinkIcon className="w-5 h-5 text-primary" />
                                    <span>View Project</span>
                                </a>
                            )}
                            {project.relatedUrl1 && (
                                <a href={project.relatedUrl1} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-2">
                                    <LinkIcon className="w-5 h-5 text-primary" />
                                    <span>Related Link 1</span>
                                </a>
                            )}
                            {project.relatedUrl2 && (
                                <a href={project.relatedUrl2} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-2">
                                    <LinkIcon className="w-5 h-5 text-primary" />
                                    <span>Related Link 2</span>
                                </a>
                            )}
                          </div>
                        <div className="flex gap-4 mt-auto pt-4">
                            <DialogClose asChild>
                                <Button variant="outline" className="flex-1">Close</Button>
                            </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
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
                   <div className={ `w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:ml-auto md:pr-12 md:text-right'}` }>
                    <PixelCard>
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                            <Avatar className="w-12 h-12 pixel-border shrink-0">
                                <AvatarImage src={item.logo} alt={`${item.company} logo`} className="image-pixelated object-contain" />
                                <AvatarFallback>{item.company.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                                <h3 className="font-headline text-xl font-bold text-primary mt-1">{item.title}</h3>
                                <h4 className="font-semibold">{item.company}</h4>
                            </div>
                        </div>
                        <ScrollArea className="h-40 pr-4 mt-4">
                            <p className="text-muted-foreground">{item.description}</p>
                        </ScrollArea>
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
                  <div className="p-6 flex items-start gap-4">
                    <Avatar className="w-16 h-16 pixel-border shrink-0">
                        <AvatarImage src={item.logo} alt={`${item.institution} logo`} className="image-pixelated object-contain" />
                        <AvatarFallback>{item.institution.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <h3 className="font-headline text-xl font-bold">{item.degree}</h3>
                        <p className="font-semibold text-primary">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {CERTIFICATIONS_DATA.entries.map((item, index) => (
                  <Dialog key={index}>
                    <PixelCard className="p-4 flex flex-col items-center text-center justify-center">
                        <item.icon className="w-16 h-16 mb-4 text-accent" />
                        <h4 className="font-headline text-lg font-bold leading-tight px-4">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1 px-4">{item.issuer}</p>
                         <DialogTrigger asChild>
                            <Button variant="link" className="mt-2">View Details</Button>
                          </DialogTrigger>
                    </PixelCard>
                    <DialogContent>
                        <DialogHeader>
                            <div className='flex justify-center mb-4'>
                                <item.icon className="w-24 h-24 text-accent" />
                            </div>
                          <DialogTitle className="font-headline text-3xl text-primary text-center">{item.name}</DialogTitle>
                           <DialogDescription className="text-center">
                            Issued by {item.issuer}
                          </DialogDescription>
                        </DialogHeader>
                         <div className="my-4 space-y-2 text-center">
                            <p><span className="font-semibold">Issue Date:</span> {item.issueDate}</p>
                            {item.expirationDate && <p><span className="font-semibold">Expiration Date:</span> {item.expirationDate}</p>}
                            <p><span className="font-semibold">Credential ID:</span> {item.credentialId}</p>
                         </div>
                        
                        <div className="flex flex-col items-center gap-2 mt-4">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>Verify Credential</span>
                            </a>
                        </div>

                        <div className="flex gap-4 mt-auto pt-4">
                            <DialogClose asChild>
                                <Button variant="outline" className="flex-1">Close</Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                  </Dialog>
                ))}
            </div>
          </SectionWrapper>

        </div>
      </main>
      <Footer />
    </div>
  );
}
