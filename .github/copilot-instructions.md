# AI Coding Assistant Instructions for Feryadi Yulius Portfolio

## Project Overview
This is a **Next.js 15 portfolio website** for Feryadi Yulius, a Data Science student. The project showcases his academic work, projects, and professional experience with a distinctive **pixel art aesthetic**.

## Architecture & Tech Stack
- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom pixel art utilities
- **UI Components**: Radix UI primitives wrapped in custom components
- **Animations**: Framer Motion with consistent spring-based transitions
- **AI Integration**: Google Genkit for AI features
- **State Management**: Custom hooks with cookie-based persistence

## Key Development Patterns

### 1. Component Structure
```typescript
// Always use motion wrappers for animations
<PixelCard className="..." delay={index * 0.1}>
  <motion.div variants={itemVariants}>
    {/* Content */}
  </motion.div>
</PixelCard>
```

### 2. Animation Patterns
- **Container animations**: Use `staggerChildren` for sequential reveals
- **Item animations**: Spring transitions with `stiffness: 150, damping: 12`
- **Hover effects**: Consistent `y: -5, scale: 1.02` transforms
- **Viewport triggers**: `whileInView` with `once: true, margin: "-50px"`

### 3. Data Management
- **Centralized data**: All content in `/src/lib/data.ts`
- **Typed interfaces**: Strong TypeScript typing for all data structures
- **Modular exports**: Separate data objects for each section

### 4. Styling Conventions
- **Pixel art aesthetic**: Use `pixel-border`, `image-pixelated` classes
- **Color scheme**: Primary (red) and accent (green) with semantic CSS variables
- **Typography**: `font-headline` for headings, `font-body` for content
- **Responsive design**: Mobile-first with `md:`, `lg:` breakpoints

### 5. State Management
```typescript
// Custom hook pattern for persistent state
const { isViewed, markAsViewed, isLoaded } = useViewedItems();
```

## Critical Workflows

### Development Server
```bash
npm run dev  # Runs on port 9002 with Turbopack
```

### AI Development
```bash
npm run genkit:dev    # Start Genkit development server
npm run genkit:watch  # Watch mode for AI flows
```

### Build & Deploy
```bash
npm run build   # Production build
npm run start   # Production server
```

## Component Patterns

### Dialog Modals
```typescript
<Dialog>
  <DialogTrigger asChild>
    <Button>View Details</Button>
  </DialogTrigger>
  <DialogContent className="max-w-3xl">
    {/* Modal content */}
  </DialogContent>
</Dialog>
```

### Animated Sections
```typescript
<SectionWrapper id="section" title="Title" description="Description">
  <motion.div variants={cardVariants}>
    {/* Section content */}
  </motion.div>
</SectionWrapper>
```

### Skill Cards with Tooltips
```typescript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <PixelCard>
        <skill.icon className="w-12 h-12" />
      </PixelCard>
    </TooltipTrigger>
    <TooltipContent>
      <p>{skill.description}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## File Organization

### Key Directories
- `/src/app/` - Next.js app router pages and layouts
- `/src/components/` - Reusable UI components
- `/src/components/ui/` - Radix UI wrappers and base components
- `/src/lib/` - Utilities and data management
- `/src/hooks/` - Custom React hooks
- `/src/ai/` - Google Genkit AI integration
- `/public/images/` - Static assets with pixel art styling

### Naming Conventions
- **Components**: PascalCase (e.g., `PixelCard.tsx`)
- **Files**: kebab-case (e.g., `animated-section.tsx`)
- **Data objects**: SCREAMING_SNAKE_CASE (e.g., `PROJECTS_DATA`)
- **CSS classes**: kebab-case with semantic prefixes

## Data Structure Patterns

### Project Data Format
```typescript
{
  title: string,
  description: string,
  image: string,
  dataAiHint: string,  // For AI-generated content hints
  skills: string[],
  link?: string,
  relatedUrl1?: string,
  relatedUrl2?: string,
  year: string,
  collaborators: string[]
}
```

### Animation Variants
```typescript
export const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      duration: 0.6
    }
  }
};
```

## Common Patterns to Follow

### 1. Always Use Motion Components
Wrap interactive elements with Framer Motion for consistent animations.

### 2. Implement Viewed State Tracking
Use `useViewedItems` hook for tracking user interactions with content.

### 3. Maintain Pixel Art Aesthetic
Apply `pixel-border` and `image-pixelated` classes consistently.

### 4. Use Semantic Color Variables
Leverage CSS custom properties for theming (`--primary`, `--accent`, etc.).

### 5. Implement Responsive Design
Ensure mobile-first approach with appropriate breakpoints.

### 6. Add Data AI Hints
Include `data-ai-hint` attributes for AI-generated content optimization.

## Error Handling & Validation

### TypeScript Configuration
- Strict mode enabled
- Build errors ignored in `next.config.ts` for development flexibility
- ESLint warnings suppressed during builds

### Image Optimization
- Next.js Image component with `image-pixelated` class
- Remote patterns configured for external images
- Pixel art rendering maintained across devices

## Performance Considerations

### Animation Optimization
- Use `once: true` for viewport-triggered animations
- Implement `staggerChildren` for sequential reveals
- Optimize motion variants for smooth 60fps animations

### Bundle Optimization
- Turbopack for fast development builds
- Tree shaking enabled through Next.js
- Lazy loading for heavy components

## AI Integration Guidelines

### Genkit Setup
- AI flows defined in `/src/ai/` directory
- Google AI Gemini 2.0 Flash model configured
- Development and watch modes available

### Content Generation
- Use `data-ai-hint` attributes to guide AI content generation
- Maintain consistent tone and pixel art theme
- Ensure generated content fits the portfolio narrative

## Testing & Quality Assurance

### Build Validation
```bash
npm run typecheck  # TypeScript validation
npm run lint       # ESLint checking
```

### Development Best Practices
- Use `cn()` utility for conditional class names
- Implement proper TypeScript interfaces
- Follow component composition patterns
- Maintain consistent animation timing

## Deployment Notes

### Environment Variables
- Firebase configuration for data persistence
- Google AI API keys for Genkit integration
- Environment-specific build configurations

### Static Asset Handling
- Images stored in `/public/images/` with descriptive names
- Pixel art assets optimized for web delivery
- Responsive image loading with Next.js Image component

---

*This portfolio represents Feryadi Yulius's journey in data science, featuring his academic projects, research publications, and professional experience with a unique pixel art aesthetic that reflects his creative approach to technology.*

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `.github/antislop.md` (core) and then the available skill for the task:
- UI / visual: `.github/skills/antislop-ui/SKILL.md`
- Copy & text: `.github/skills/antislop-copywriting/SKILL.md`
- People: `.github/skills/antislop-human/SKILL.md`
- Mobile / responsive: `.github/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `.github/skills/antislop-code/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source.
<!-- antislop:end -->