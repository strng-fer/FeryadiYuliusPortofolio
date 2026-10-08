"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
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
  OTHER_EXPERIENCE_DATA,
  EDUCATION_DATA,
  PUBLICATIONS_DATA,
  CERTIFICATIONS_DATA,
  CONTACT_DATA,
} from '@/lib/data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PixelCard } from '@/components/ui/pixel-card';
import { ExternalLink, Star, Users, Calendar, Link as LinkIcon, Award, Play, Download, ArrowDownRight } from 'lucide-react';
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
import { RetroNotificationBadge } from '@/components/ui/retro-notification-badge';
import { useViewedItems } from '@/hooks/use-viewed-items';
import { AnimatedSection, heroVariants, itemVariants, cardVariants, textVariants } from '@/components/animated-section';
import { FloatingRobotButton } from '@/components/floating-robot-button';

export default function Home() {
  const { isViewed, markAsViewed, isLoaded } = useViewedItems();
  return (
    <div className="bg-background text-foreground font-body relative overflow-hidden">
      <Header />
      <main>
        <section id="hero" className="relative min-h-[680px] flex items-center overflow-hidden border-b border-border">
          <Image
            src="/images/hero-background.png"
            alt="Abstract data visualization background"
            fill
            priority
            className="object-cover object-center z-0 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 z-10" />
          <motion.div
            className="container relative z-30 px-6 py-28 md:py-36"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.5
                }
              }
            }}
          >
            <motion.p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent" variants={textVariants}>
              Data science · teaching · research
            </motion.p>
            <motion.h1
              className="max-w-4xl font-headline text-5xl font-bold leading-[0.95] text-foreground md:text-8xl"
              variants={{
                hidden: { 
                  opacity: 0, 
                  scale: 0.5,
                  y: 100
                },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 1.5
                  }
                }
              }}
            >
              Feryadi Yulius
            </motion.h1>
            <motion.p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl" variants={textVariants}>
              Data Scientist & AI Engineer building practical solutions with machine learning, computer vision, and language models.
            </motion.p>
            <motion.div className="mt-9 flex flex-wrap gap-3" variants={itemVariants}>
              <Button asChild size="lg">
                <a href="#projects">Explore selected work <ArrowDownRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/CV - Feryadi Yulius.pdf" target="_blank" rel="noopener noreferrer">
                  View CV <Download />
                </a>
              </Button>
            </motion.div>
            <motion.div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground" variants={itemVariants}>
              <span>Based in Bandar Lampung</span>
              <span>Available for teaching & collaboration</span>
            </motion.div>
          </motion.div>
        </section>
        
        <div className="container mx-auto px-4 md:px-8">
          <SectionWrapper id="about" title={ABOUT_DATA.title} description="A short introduction to the person behind the projects.">
            <motion.div variants={cardVariants}>
              <PixelCard className="max-w-5xl mx-auto">
                <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
                  <motion.div className="md:col-span-1 flex justify-center" variants={itemVariants}>
                    <Avatar className="w-40 h-40 pixel-border bg-white">
                      <Image src={ABOUT_DATA.avatar} alt="Pixel character avatar" width={160} height={160} data-ai-hint="professional headshot" className="image-pixelated" />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div className="md:col-span-2" variants={itemVariants}>
                    <motion.h3 className="font-headline text-3xl font-bold text-primary" variants={textVariants}>{ABOUT_DATA.name}</motion.h3>
                    <motion.p className="text-muted-foreground mb-4" variants={textVariants}>{ABOUT_DATA.subtitle}</motion.p>
                    <motion.p className="mb-6" variants={textVariants}>{ABOUT_DATA.story}</motion.p>
                    <motion.div variants={itemVariants}>
                      <h4 className="font-headline text-xl mb-3">What I bring</h4>
                      <ul className="space-y-2">
                        {ABOUT_DATA.stats.map((stat, index) => (
                          <motion.li 
                            key={stat.label} 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ 
                              opacity: 1, 
                              x: 0,
                              transition: {
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 150,
                                damping: 12
                              }
                            }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{stat.label}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </PixelCard>
            </motion.div>
          </SectionWrapper>

          <SectionWrapper id="skills" title={SKILLS_DATA.title} description={SKILLS_DATA.description}>
            <TooltipProvider>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {SKILLS_DATA.skills.map((skill, index) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <PixelCard 
                        className="p-4 flex flex-col items-center justify-center text-center cursor-help"
                        delay={index * 0.1}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ 
                            scale: 1, 
                            rotate: 0,
                            transition: {
                              delay: 0.3 + (index * 0.1),
                              type: "spring",
                              stiffness: 150,
                              damping: 12
                            }
                          }}
                          viewport={{ once: true }}
                        >
                          <skill.icon className="w-12 h-12 mb-3 text-accent" />
                        </motion.div>
                        <h4 className="font-headline text-lg font-bold">{skill.name}</h4>
                      </PixelCard>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </TooltipProvider>
          </SectionWrapper>

          <SectionWrapper id="projects" title={PROJECTS_DATA.title} description={PROJECTS_DATA.description}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.8
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {PROJECTS_DATA.projects.map((project, index) => {
                    const projectId = `project-${index}`;
                    const isProjectViewed = isViewed(projectId);
                    const videoDemo = 'videoDemo' in project && typeof project.videoDemo === 'string'
                      ? project.videoDemo
                      : undefined;
                    
                    return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1, 
                          y: 0,
                          transition: {
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 120,
                            damping: 15,
                            duration: 0.6
                          }
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ 
                          scale: 1.03,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Dialog>
                      <PixelCard className="h-full flex flex-col relative">
                        {/* Retro notification badge for unviewed projects */}
                        <RetroNotificationBadge 
                          isVisible={isLoaded && !isProjectViewed} 
                          className="top-2 right-2"
                        />
                        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover image-pixelated rounded-t-sm" data-ai-hint={project.dataAiHint} />
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-headline text-2xl font-bold text-primary mb-2">{project.title}</h3>
                          <ScrollArea className="h-24 pr-4 mb-4">
                            <p className="text-muted-foreground flex-grow">{project.description}</p>
                          </ScrollArea>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                          </div>
                          <div className="mb-4">
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Focus</p>
                            <div className="flex flex-wrap gap-2">
                              {project.focus.slice(0, 3).map(item => <Badge key={item} variant="outline">{item}</Badge>)}
                            </div>
                          </div>
                          <div className="mt-auto flex flex-wrap gap-2">
                            <DialogTrigger asChild>
                              <Button onClick={() => markAsViewed(projectId)}>View details</Button>
                            </DialogTrigger>
                            {videoDemo && (
                              <Button asChild variant="outline">
                                <a href={videoDemo} target="_blank" rel="noopener noreferrer">
                                  <Play /> Video demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </PixelCard>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-64 object-cover image-pixelated rounded-t-sm mb-4" data-ai-hint={project.dataAiHint} />
                          <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
                          <DialogDescription className="sr-only">{project.description}</DialogDescription>
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
                            <p className="text-base text-muted-foreground">
                            {project.description}
                            </p>
                        </ScrollArea>
                        <div className="grid gap-6 my-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-headline text-lg font-bold mb-2">Key Features</h4>
                            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                              {project.keyFeatures.map(feature => <li key={feature}>{feature}</li>)}
                            </ul>
                          </div>
                          <div className="space-y-5">
                            <div>
                              <h4 className="font-headline text-lg font-bold mb-2">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-headline text-lg font-bold mb-2">Focus</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.focus.map(item => <Badge key={item} variant="outline">{item}</Badge>)}
                              </div>
                            </div>
                          </div>
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
                            {videoDemo && (
                                <a href={videoDemo} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-2">
                                    <Play className="w-5 h-5 text-primary" />
                                    <span>Watch video demo</span>
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
                      </motion.div>
                    </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </motion.div>
          </SectionWrapper>

          <SectionWrapper id="experience" title={EXPERIENCE_DATA.title} description={EXPERIENCE_DATA.description}>
            <motion.div 
              className="relative max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2"></div>
              {EXPERIENCE_DATA.entries.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative mb-8 pl-8 md:pl-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0, 
                    y: 0,
                    transition: {
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                      duration: 0.8
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background"
                    initial={{ scale: 0 }}
                    whileInView={{ 
                      scale: 1,
                      transition: {
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }
                    }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <div className={ `w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:ml-auto md:pr-12 md:text-right'}` }>
                    <PixelCard delay={index * 0.1}>
                      <div className="p-6">
                        <motion.div 
                          className="flex items-start gap-4"
                          variants={itemVariants}
                        >
                          <Avatar className="w-12 h-12 pixel-border shrink-0 bg-white">
                            <AvatarImage src={item.logo} alt={`${item.company} logo`} className="image-pixelated object-contain" />
                            <AvatarFallback>{item.company.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-grow">
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                            <h3 className="font-headline text-xl font-bold text-primary mt-1">{item.title}</h3>
                            <h4 className="font-semibold">{item.company}</h4>
                          </div>
                        </motion.div>
                        <ScrollArea className="h-40 pr-4 mt-4">
                          <p className="text-muted-foreground">{item.description}</p>
                        </ScrollArea>
                      </div>
                    </PixelCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </SectionWrapper>

          <SectionWrapper id="other-experience" title={OTHER_EXPERIENCE_DATA.title} description={OTHER_EXPERIENCE_DATA.description}>
            <motion.div className="relative max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }}>
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2"></div>
              {OTHER_EXPERIENCE_DATA.entries.map((item, index) => (
                <motion.div key={item.title + item.company} className="relative mb-8 pl-8 md:pl-0" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }}>
                  <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-accent rounded-full -translate-x-1/2 border-4 border-background"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:ml-auto md:pr-12 md:text-right'}`}>
                    <PixelCard delay={index * 0.1}>
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12 pixel-border shrink-0 bg-white">
                            <AvatarImage src={item.logo} alt={`${item.company} logo`} className="image-pixelated object-contain" />
                            <AvatarFallback>{item.company.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-grow">
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                            <h3 className="font-headline text-xl font-bold text-primary mt-1">{item.title}</h3>
                            <h4 className="font-semibold">{item.company}</h4>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-4">{item.description}</p>
                      </div>
                    </PixelCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </SectionWrapper>
          
          <SectionWrapper id="education" title={EDUCATION_DATA.title}>
            <motion.div 
              className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {EDUCATION_DATA.entries.map((item, index) => (
                <PixelCard key={index} delay={index * 0.2}>
                  <motion.div 
                    className="p-6 flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 0,
                        transition: {
                          delay: index * 0.2 + 0.3,
                          type: "spring",
                          stiffness: 150,
                          damping: 12
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <Avatar className="w-16 h-16 pixel-border shrink-0 bg-white">
                        <AvatarImage src={item.logo} alt={`${item.institution} logo`} className="image-pixelated object-contain" />
                        <AvatarFallback>{item.institution.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <motion.div className="flex-grow" variants={textVariants}>
                      <h3 className="font-headline text-xl font-bold">{item.degree}</h3>
                      <p className="font-semibold text-primary">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </motion.div>
                  </motion.div>
                </PixelCard>
              ))}
            </motion.div>
          </SectionWrapper>

          <SectionWrapper id="publications" title={PUBLICATIONS_DATA.title} description={PUBLICATIONS_DATA.description}>
            <motion.div 
              className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {PUBLICATIONS_DATA.entries.map((item, index) => {
                const publicationId = `publication-${index}`;
                const isPublicationViewed = isViewed(publicationId);
                
                return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Dialog>
                    <PixelCard className="flex flex-col items-start gap-4 p-4 h-full relative" delay={index * 0.1}>
                      {/* Retro notification badge for unviewed publications */}
                      <RetroNotificationBadge 
                        isVisible={isLoaded && !isPublicationViewed} 
                        className="top-2 right-2"
                      />
                      <motion.div 
                        className="flex items-start gap-4"
                        variants={itemVariants}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: 90 }}
                          whileInView={{ 
                            scale: 1, 
                            rotate: 0,
                            transition: {
                              delay: index * 0.1 + 0.3,
                              type: "spring",
                              stiffness: 150,
                              damping: 12
                            }
                          }}
                          viewport={{ once: true }}
                        >
                          <item.icon className="w-10 h-10 mt-1 text-accent flex-shrink-0" />
                        </motion.div>
                        <motion.div variants={textVariants}>
                          <h3 className="font-headline text-lg font-bold hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.journal}, {item.year}</p>
                        </motion.div>
                      </motion.div>
                      <motion.div className="mt-auto pt-4" variants={itemVariants}>
                        <DialogTrigger asChild>
                          <Button onClick={() => markAsViewed(publicationId)}>View Details</Button>
                        </DialogTrigger>
                      </motion.div>
                    </PixelCard>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="font-headline text-3xl text-primary">{item.title}</DialogTitle>
                           <DialogDescription>
                            {item.journal}, {item.year}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="my-4 space-y-2">
                          <p><span className="font-semibold">Authors:</span> {item.authors.join(', ')}</p>
                          {item.doi && <p><span className="font-semibold">DOI:</span> <a href={item.doi} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{item.doi}</a></p>}
                        </div>
                        <ScrollArea className="h-48 pr-4 mb-4">
                          <h4 className="font-headline text-lg font-bold mb-2">Abstract</h4>
                          <p className="text-base text-muted-foreground">{item.abstract}</p>
                        </ScrollArea>
                        
                        <div className="flex flex-col items-start gap-2 mt-4">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-2">
                                <ExternalLink className="w-5 h-5 text-primary" />
                                <span>View Publication</span>
                            </a>
                        </div>

                        <div className="flex gap-4 mt-auto pt-4">
                            <DialogClose asChild>
                                <Button variant="outline" className="flex-1">Close</Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
                );
              })}
            </motion.div>
          </SectionWrapper>

          <SectionWrapper id="certifications" title={CERTIFICATIONS_DATA.title} description={CERTIFICATIONS_DATA.description}>
            <motion.div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto" variants={cardVariants}>
              {CERTIFICATIONS_DATA.entries.map((item, index) => (
                <PixelCard key={item.credentialId} className="p-6" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <Award className="h-10 w-10 shrink-0 text-accent" />
                    <div className="flex-1">
                      <h3 className="font-headline text-xl font-bold text-primary">{item.name}</h3>
                      <p className="mt-1 text-muted-foreground">{item.issuer}</p>
                      <p className="mt-3 text-sm">Credential ID: {item.credentialId}</p>
                      <p className="text-sm text-muted-foreground">{item.issueDate} – {item.expirationDate}</p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-semibold text-primary hover:underline">
                        Verify credential
                      </a>
                    </div>
                  </div>
                </PixelCard>
              ))}
            </motion.div>
          </SectionWrapper>

          <SectionWrapper id="contact" title={CONTACT_DATA.title} description={CONTACT_DATA.description}>
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {CONTACT_DATA.contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <PixelCard className="p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 min-h-[200px]" delay={index * 0.1}>
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ 
                          scale: 1, 
                          rotate: 0,
                          transition: {
                            delay: index * 0.2 + 0.4,
                            type: "spring",
                            stiffness: 150,
                            damping: 12
                          }
                        }}
                        viewport={{ once: true }}
                      >
                        <contact.icon className="w-12 h-12 mb-4 text-accent flex-shrink-0" />
                      </motion.div>
                      <motion.div className="text-center flex-1 flex flex-col justify-between w-full" variants={textVariants}>
                        <div>
                          <h3 className="font-headline text-lg font-bold text-primary mb-2">{contact.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                        </div>
                        <div className="mt-auto">
                          {contact.href !== '#' ? (
                            <a 
                              href={contact.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-primary transition-colors duration-200 flex items-center gap-2 justify-center break-all text-sm"
                            >
                              <span className="break-all leading-tight">{contact.value}</span>
                              <ExternalLink className="w-4 h-4 flex-shrink-0" />
                            </a>
                          ) : (
                            <span className="font-semibold text-primary break-all text-sm leading-tight">{contact.value}</span>
                          )}
                        </div>
                      </motion.div>
                    </PixelCard>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <PixelCard className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
                  <motion.h3 
                    className="font-headline text-2xl font-bold text-primary mb-4"
                    variants={textVariants}
                  >
                    Ready to Collaborate?
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                    variants={textVariants}
                  >
                    I'm always interested in discussing new opportunities, innovative projects, 
                    or just having a conversation about data science and technology. 
                    Let's connect and explore what we can build together!
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                    <motion.a 
                      href="https://wa.me/6288706487712" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full sm:w-auto">
                        Get In Touch
                      </Button>
                    </motion.a>
                    <motion.a 
                      href="mailto:feryadiyulius24@gmail.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" className="w-full sm:w-auto">
                        Send Email
                      </Button>
                    </motion.a>
                  </motion.div>
                </PixelCard>
              </motion.div>
            </motion.div>
          </SectionWrapper>

        </div>
      </main>
      <Footer />
      
      {/* Floating Robot Button */}
      <FloatingRobotButton />
    </div>
  );
}
