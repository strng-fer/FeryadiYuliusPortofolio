"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Bot, 
  Cpu, 
  GraduationCap, 
  Compass, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PixelCard } from '@/components/ui/pixel-card';

export interface JourneyMilestone {
  id: string;
  stageNumber: number;
  period: string;
  yearRange: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  track: 'ai' | 'teaching';
  trackLabel: string;
  trackColor: string;
  status: 'active' | 'completed';
  statusLabel: string;
  summary: string;
  impactPoints: string[];
  skills: string[];
  highlight?: string;
  projectAnchor?: string;
  projectAnchorText?: string;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'itera-math',
    stageNumber: 1,
    period: 'September 2023 – January 2025',
    yearRange: '2023 - 2025',
    title: 'Basic Mathematics Tutorial Assistant',
    company: 'Sumatera Institute of Technology (ITERA)',
    location: 'South Lampung, Indonesia',
    logo: '/images/logo-itera.png',
    track: 'teaching',
    trackLabel: 'Academic Tutoring',
    trackColor: 'border-blue-500/60 text-blue-500 bg-blue-500/10',
    status: 'completed',
    statusLabel: 'Completed Quest',
    summary: 'Taught foundational mathematics to first-year university students across two semesters with self-study modules and weekly interactive workshops. Established the core communication style for explaining complex technical concepts clearly.',
    impactPoints: [
      'Taught 10 core mathematics modules to 130+ first-year undergraduates across two semesters.',
      'Designed and assigned 10+ self-study modules per semester, achieving an 85% completion rate.',
      'Conducted interactive problem-solving workshops that earned a 4.5/5 satisfaction rating in post-semester surveys.',
      'Diagnosed conceptual bottlenecks in first-year students and adapted weekly session pacing accordingly.'
    ],
    skills: ['Calculus', 'Linear Algebra', 'Problem Decomposition', 'Pedagogy', 'Student Mentoring']
  },
  {
    id: 'sains-data-itera',
    stageNumber: 2,
    period: 'September 2024 – December 2025',
    yearRange: '2024 - 2025',
    title: 'Teaching Assistant, Statistics & Programming',
    company: 'Sains Data ITERA',
    location: 'South Lampung, Indonesia',
    logo: '/images/logo-sainsdata.png',
    track: 'teaching',
    trackLabel: 'Academic TA',
    trackColor: 'border-emerald-500/60 text-emerald-500 bg-emerald-500/10',
    status: 'completed',
    statusLabel: 'Completed Quest',
    summary: 'Four consecutive semesters of teaching assistantships in the Data Science undergraduate program covering statistics, algorithmic programming, functional paradigms, and data analysis laboratory sessions.',
    impactPoints: [
      'Led 10 statistical lab sessions in R covering hypothesis testing and regression modeling for 60+ students.',
      'Delivered Python algorithm labs to 60+ students with 95% completing their final algorithmic projects.',
      'Managed 500+ pre-test records and graded assignments, midterm, and final examinations per course without loss.',
      'Mentored student project groups solving real-world business and data problem sets.'
    ],
    skills: ['Python', 'R', 'Algorithms', 'Hypothesis Testing', 'Statistical Modeling', 'Grading & Assessment']
  },
  {
    id: 'brin-intern',
    stageNumber: 3,
    period: 'June 2025 – August 2025',
    yearRange: 'Jun - Aug 2025',
    title: 'Data Science Intern',
    company: 'Badan Riset dan Inovasi Nasional (BRIN RI)',
    location: 'Bandung, West Java, Indonesia',
    logo: '/images/logo-brin.png',
    track: 'ai',
    trackLabel: 'Marine AI Research',
    trackColor: 'border-primary/60 text-primary bg-primary/10',
    status: 'completed',
    statusLabel: 'Completed Research Mission',
    summary: 'Built a deep learning classifier for phytoplankton species recognition from Belitung coastal water samples, turning the model into two working prototypes (web + Android) and a co-authored scientific paper.',
    impactPoints: [
      'Cleaned and labelled 236 microscope images spanning 26 phytoplankton classes from Belitung coastal waters.',
      'Applied 9 augmentation techniques for oversampling, expanding the dataset past 10,000 images to eliminate class imbalance.',
      'Trained and benchmarked 13 CNN architecture variants including ResNet, DenseNet, EfficientNet, MobileNet, and ConvNeXt.',
      'Shipped an interactive web prototype and an Android camera app (PlanktoScan with BRIN Copyright Registration).'
    ],
    skills: ['Deep Learning', 'CNN Architectures', 'Computer Vision', 'PyTorch', 'Data Augmentation', 'Android App', 'Scientific Writing'],
    projectAnchor: '#projects',
    projectAnchorText: 'Explore PlanktoScan Project 🔬'
  },
  {
    id: 'timedoor',
    stageNumber: 4,
    period: 'January 2026 – October 2026',
    yearRange: 'Jan - Oct 2026',
    title: 'Programming Teacher',
    company: 'Timedoor Academy · Bandar Lampung',
    location: 'Kota Bandar Lampung, Lampung, Indonesia',
    logo: '/images/timedoorlogo.jpg',
    track: 'teaching',
    trackLabel: 'Coding & AI Education',
    trackColor: 'border-yellow-500/60 text-yellow-500 bg-yellow-500/10',
    status: 'completed',
    statusLabel: 'Completed Teaching Track',
    summary: 'Taught programming to students aged 5 to 18 across game development, web development, mobile apps, IoT, and artificial intelligence. Designed tailored lessons per age group and coached students from first code line to deployed projects.',
    impactPoints: [
      'Built and delivered interactive lessons across five tracks: game development, web development, mobile apps, IoT, and AI.',
      'Guided students through real projects that train problem solving, algorithmic decomposition, and logical thinking.',
      'Adapted complex concepts for varying ages (from 7-year-olds to 18-year-olds), reinforcing clear mental models of fundamentals.',
      'Ran hands-on debugging sessions where students identify and resolve their own code errors instead of copying solutions.'
    ],
    skills: ['Python', 'Game Development', 'Web & Mobile', 'IoT', 'AI Curriculum', 'Debugging Pedagogy']
  },
  {
    id: 'ruangguru',
    stageNumber: 5,
    period: 'June 2026 – July 2026',
    yearRange: 'Jun - Jul 2026',
    title: 'Master Teacher',
    company: 'Akademia by Ruangguru',
    location: 'Greater Bandar Lampung, Indonesia',
    logo: '/images/ruangguru.jpg',
    track: 'teaching',
    trackLabel: 'Exam Coaching',
    trackColor: 'border-orange-500/60 text-orange-500 bg-orange-500/10',
    status: 'completed',
    statusLabel: 'Completed Intensive Block',
    summary: 'Taught CPNS preparation for Akademia by Ruangguru, with the primary teaching load focused on Penalaran Umum inside the Tes Intelegensi Umum (TIU), mathematics, and numerical logic patterns.',
    impactPoints: [
      'Delivered intensive Penalaran Umum sessions for CPNS candidates, covering verbal reasoning, numerical reasoning, and quantitative comparison.',
      'Taught mathematics and number pattern techniques alongside reasoning material under rigorous timed conditions.',
      'Ran on-site classes across a two-month teaching block in Bandar Lampung.',
      'Kept the pace aligned with real exam speed, coaching candidates to optimize accuracy alongside time management.'
    ],
    skills: ['Verbal Reasoning', 'Numerical Logic', 'Quantitative Comparison', 'Exam Strategy', 'Classroom Instruction']
  },
  {
    id: 'brin-thesis',
    stageNumber: 6,
    period: 'August 2026 – October 2026',
    yearRange: 'Aug - Oct 2026',
    title: 'Data Science Thesis Student',
    company: 'Badan Riset dan Inovasi Nasional (BRIN RI)',
    location: 'Bandung, West Java, Indonesia',
    logo: '/images/logo-brin.png',
    track: 'ai',
    trackLabel: 'Undergraduate Thesis',
    trackColor: 'border-purple-500/60 text-purple-500 bg-purple-500/10',
    status: 'completed',
    statusLabel: 'Completed Bachelor Thesis 🎓',
    summary: 'Conducted undergraduate thesis research at BRIN RI on deep learning object detection for coastal water imagery. Benchmarked Faster R-CNN against YOLO architectures to determine optimal trade-offs between precision, mAP, and real-time deployment inference latency.',
    impactPoints: [
      'Designed and built comparative deep learning pipelines evaluating two-stage (Faster R-CNN) and one-stage (YOLO) detectors.',
      'Evaluated Faster R-CNN backbones (ResNet-50, MobileNetV3-Large, ResNet-101) alongside YOLOv8n and YOLOv26n variants.',
      'Assessed detection trade-offs using mAP, precision, recall, and F1-score across Belitung coastal water image sets.',
      'Delivered undergraduate thesis research bridging marine ecological surveillance with deployable computer vision models.'
    ],
    skills: ['Deep Learning', 'Faster R-CNN', 'YOLO', 'PyTorch', 'Model Evaluation', 'Computer Vision', 'Thesis Research'],
    projectAnchor: '#projects',
    projectAnchorText: 'Explore Bachelor Thesis Project 🌊'
  },
  {
    id: 'ggf',
    stageNumber: 7,
    period: 'October 2026 – Present',
    yearRange: 'Oct 2026 - Present',
    title: 'AI Engineer',
    company: 'Great Giant Foods (GGF)',
    location: 'Central Lampung Regency, Lampung, Indonesia',
    logo: '/images/logo-ggf.png',
    track: 'ai',
    trackLabel: 'AI & Precision Agriculture',
    trackColor: 'border-accent/60 text-accent bg-accent/10',
    status: 'active',
    statusLabel: 'Active Mission 🌟',
    summary: 'Developing deep learning and computer vision pipelines for precision agriculture across large-scale pineapple plantations. Specialized in real-time pineapple detection, automated fruit counting, and plantation yield monitoring using YOLO and PyTorch from aerial drone and field camera imagery.',
    impactPoints: [
      'Engineered deep learning object detection pipelines (YOLO & PyTorch) to accurately detect and localize pineapple fruits and plants across different growth stages.',
      'Designed real-time inference workflows for aerial drone and field camera video streams, generating bounding boxes and confidence scores for automated yield estimation.',
      'Built robust data preprocessing and augmentation pipelines for agricultural field conditions, resolving challenges with dense foliage, occlusion, and weed interference.',
      'Evaluated model inference latency and tracking pipelines to support autonomous counting and precision crop management.'
    ],
    skills: ['AI Engineering', 'YOLO', 'PyTorch', 'Computer Vision', 'OpenCV', 'Precision Agriculture', 'Drone CV'],
    projectAnchor: '#projects',
    projectAnchorText: 'Explore Pineapple Detection System 🍍'
  }
];

export function ExperienceJourneyMap() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'teaching'>('all');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('ggf');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredMilestones = JOURNEY_MILESTONES.filter(item => {
    if (activeFilter === 'all') return true;
    return item.track === activeFilter;
  });

  const selectedMilestone = JOURNEY_MILESTONES.find(m => m.id === selectedMilestoneId) || filteredMilestones[0];
  const selectedIndexInFiltered = filteredMilestones.findIndex(m => m.id === selectedMilestone.id);

  // Auto-select first in filter if current selected is not in filtered list
  useEffect(() => {
    if (!filteredMilestones.some(m => m.id === selectedMilestoneId)) {
      if (filteredMilestones.length > 0) {
        setSelectedMilestoneId(filteredMilestones[0].id);
      }
    }
  }, [activeFilter, filteredMilestones, selectedMilestoneId]);

  const handlePrev = () => {
    if (selectedIndexInFiltered > 0) {
      const prev = filteredMilestones[selectedIndexInFiltered - 1];
      setSelectedMilestoneId(prev.id);
      scrollToNode(prev.id);
    }
  };

  const handleNext = () => {
    if (selectedIndexInFiltered < filteredMilestones.length - 1) {
      const next = filteredMilestones[selectedIndexInFiltered + 1];
      setSelectedMilestoneId(next.id);
      scrollToNode(next.id);
    }
  };

  const scrollToNode = (id: string) => {
    if (!scrollContainerRef.current) return;
    const element = document.getElementById(`journey-node-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const scrollMap = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = direction === 'left' ? -280 : 280;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="w-full space-y-8">
      {/* Friendly Robot Guide Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-md pixel-border"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-foreground text-sm sm:text-base flex items-center gap-2">
              Career Journey Map & Experience Questline
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                Interactive Map
              </Badge>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Explore sideways across milestones — from foundational tutoring to industrial AI engineering.
            </p>
          </div>
        </div>

        {/* Filter Track Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-background/80 rounded-lg pixel-border text-xs w-full sm:w-auto justify-center">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeFilter === 'all' 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            🗺️ All ({JOURNEY_MILESTONES.length})
          </button>
          <button
            onClick={() => setActiveFilter('ai')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeFilter === 'ai' 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            ⚡ AI & Research ({JOURNEY_MILESTONES.filter(m => m.track === 'ai').length})
          </button>
          <button
            onClick={() => setActiveFilter('teaching')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeFilter === 'teaching' 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            👨‍🏫 Mentorship ({JOURNEY_MILESTONES.filter(m => m.track === 'teaching').length})
          </button>
        </div>
      </motion.div>

      {/* Horizontal Journey Map Route */}
      <div className="relative">
        {/* Navigation Arrow Left */}
        <button
          onClick={() => scrollMap('left')}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-9 h-9 rounded-full bg-card pixel-border border border-border shadow-lg flex items-center justify-center text-foreground hover:text-primary hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={() => scrollMap('right')}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-9 h-9 rounded-full bg-card pixel-border border border-border shadow-lg flex items-center justify-center text-foreground hover:text-primary hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Map Canvas with Horizontal Flow */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-6 pt-4 px-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent scroll-smooth focus:outline-none"
        >
          <div className="relative flex items-center gap-6 md:gap-8 min-w-max py-6">
            {/* Connecting Roadmap Path (Background dashed trail) */}
            <div className="absolute left-8 right-8 top-[60px] h-1 border-t-2 border-dashed border-primary/30 z-0"></div>

            {/* Checkpoints / Level Nodes */}
            {filteredMilestones.map((milestone, idx) => {
              const isSelected = milestone.id === selectedMilestone.id;
              const isCurrent = milestone.status === 'active';

              return (
                <div 
                  key={milestone.id}
                  id={`journey-node-${milestone.id}`}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    setSelectedMilestoneId(milestone.id);
                    scrollToNode(milestone.id);
                  }}
                >
                  {/* Bouncing Selected Indicator Arrow */}
                  <div className="h-6 flex items-center justify-center">
                    {isSelected && (
                      <motion.div 
                        layoutId="activeMapPointer"
                        className="flex flex-col items-center text-primary"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full shadow-sm mb-0.5">
                          Selected
                        </span>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                      </motion.div>
                    )}
                  </div>

                  {/* Stage Checkpoint Node */}
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between text-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-card border-2 border-primary shadow-xl ring-4 ring-primary/20 -translate-y-1' 
                        : 'bg-card/90 border border-border/80 hover:border-primary/50 hover:bg-card shadow-md'
                    } pixel-border`}
                  >
                    {/* Level Badge */}
                    <div className="flex items-center justify-between w-full px-1">
                      <span className="text-[10px] font-mono font-bold text-muted-foreground">
                        LVL {milestone.stageNumber}
                      </span>
                      {isCurrent ? (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                      ) : (
                        <CheckCircle2 className="w-3 h-3 text-muted-foreground/60" />
                      )}
                    </div>

                    {/* Logo Avatar */}
                    <div className="relative my-0.5">
                      <Avatar className="w-10 h-10 md:w-12 md:h-12 bg-white pixel-border border border-border/60 shrink-0">
                        <AvatarImage 
                          src={milestone.logo} 
                          alt={`${milestone.company} logo`} 
                          className="object-contain p-1"
                        />
                        <AvatarFallback className="font-bold text-xs text-primary">
                          {milestone.company.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Timeline Date Pill */}
                    <div className="w-full">
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md truncate block ${
                        isSelected 
                          ? 'bg-primary/10 text-primary font-bold' 
                          : 'bg-muted/60 text-muted-foreground'
                      }`}>
                        {milestone.yearRange}
                      </span>
                    </div>
                  </motion.div>

                  {/* Node Label Below */}
                  <div className="mt-3 text-center w-32 md:w-36">
                    <p className={`font-headline text-xs font-bold truncate ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                      {milestone.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                      {milestone.company.split('·')[0]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Spotlight Card (Detailed Level Card) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMilestone.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative"
        >
          <PixelCard className="p-6 md:p-8 relative overflow-hidden border-2 border-primary/30">
            {/* Background subtle glowing radial gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 space-y-6">
              {/* Header row: Company, Role, Badges */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/70">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 rounded-xl bg-white pixel-border shrink-0 border-2 border-primary/20 shadow-sm">
                    <AvatarImage 
                      src={selectedMilestone.logo} 
                      alt={`${selectedMilestone.company} logo`} 
                      className="object-contain p-2"
                    />
                    <AvatarFallback className="font-bold text-lg text-primary">
                      {selectedMilestone.company.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded">
                        STAGE 0{selectedMilestone.stageNumber}
                      </span>
                      <Badge variant="outline" className={selectedMilestone.trackColor}>
                        {selectedMilestone.trackLabel}
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className={selectedMilestone.status === 'active' ? 'bg-accent/15 text-accent border border-accent/40 font-semibold' : ''}
                      >
                        {selectedMilestone.statusLabel}
                      </Badge>
                    </div>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                      {selectedMilestone.title}
                    </h3>
                    <h4 className="font-semibold text-foreground text-base md:text-lg mt-0.5">
                      {selectedMilestone.company}
                    </h4>
                  </div>
                </div>

                {/* Period & Location Metadata */}
                <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2 text-xs md:text-sm text-muted-foreground bg-secondary/40 md:bg-transparent p-3 md:p-0 rounded-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{selectedMilestone.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{selectedMilestone.location}</span>
                  </div>
                </div>
              </div>

              {/* Story Summary Narrative */}
              <div className="space-y-2">
                <h5 className="font-headline font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Mission Overview
                </h5>
                <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                  {selectedMilestone.summary}
                </p>
              </div>

              {/* Key Impact & Achievements */}
              <div className="space-y-3">
                <h5 className="font-headline font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Key Quests & Technical Deliverables
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedMilestone.impactPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-card/70 border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-sm bg-primary mt-1.5 shrink-0" />
                      <p className="text-xs md:text-sm text-muted-foreground leading-normal">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Unlocked Skills & Tech Stack */}
              <div className="space-y-2 pt-2">
                <h5 className="font-headline font-bold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  Skills & Tools Mastered
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="px-2.5 py-1 text-xs bg-background/80 hover:border-primary transition-colors pixel-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom Bar: Related Project Link & Step Controller */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/70">
                {selectedMilestone.projectAnchor ? (
                  <a 
                    href={selectedMilestone.projectAnchor} 
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>{selectedMilestone.projectAnchorText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="text-xs text-muted-foreground italic flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-accent" />
                    <span>Level {selectedMilestone.stageNumber} of {filteredMilestones.length} in current track</span>
                  </div>
                )}

                {/* Stepper Buttons (Previous Level / Next Level) */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrev}
                    disabled={selectedIndexInFiltered === 0}
                    className="pixel-border text-xs gap-1.5 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous Stage
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleNext}
                    disabled={selectedIndexInFiltered === filteredMilestones.length - 1}
                    className="pixel-border text-xs gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-40"
                  >
                    Next Stage
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </PixelCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
