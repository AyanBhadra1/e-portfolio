# CV Website Design Style Guide

## Design Philosophy

### Visual Language
- **Modern Editorial Aesthetic**: Drawing inspiration from contemporary design publications like Kinfolk and The Gentlewoman
- **Minimalist Sophistication**: Clean, uncluttered layouts with purposeful white space
- **Professional Confidence**: Design that conveys competence and attention to detail
- **Subtle Innovation**: Incorporating 2024 design trends without overwhelming the professional content

### Color Palette
- **Primary**: Deep charcoal (#2C2C2C) for headings and primary text
- **Secondary**: Warm gray (#6B7280) for body text and secondary elements
- **Accent**: Soft sage green (#8B9A7A) for highlights and interactive elements
- **Background**: Off-white (#FEFEFE) with subtle texture
- **Interactive States**: Muted coral (#E8A598) for hover effects

### Typography
- **Display Font**: Canela (serif) for headings and hero text - bold, editorial feel
- **Body Font**: Suisse Int'l (sans-serif) for content - clean, readable, modern
- **Code Font**: JetBrains Mono for technical elements
- **Hierarchy**: Large display headings (48px+), medium section headers (24px), body text (16px)

## Visual Effects & Animation

### Core Libraries Integration
1. **Anime.js**: Smooth micro-interactions and page transitions
2. **ECharts.js**: Interactive skill radar charts and progress visualizations
3. **p5.js**: Creative coding background effects and particle systems
4. **Splide.js**: Project showcase carousels and image galleries
5. **Typed.js**: Dynamic text effects for career objective and taglines
6. **Splitting.js**: Advanced text animations and staggered reveals
7. **Matter.js**: Subtle physics-based interactions for project cards

### Background Effects
- **Subtle Particle System**: Using p5.js to create a gentle, professional particle field
- **Gradient Flow**: Soft, animated gradients that don't distract from content
- **Geometric Patterns**: Minimal line work and shapes as decorative elements

### Text Effects
- **Typewriter Animation**: For the main heading and career objective
- **Staggered Reveal**: Section headers animate in with split-letter effects
- **Color Cycling**: Subtle color transitions on key phrases
- **Gradient Text**: Professional gradient effects on hero text

### Interactive Elements
- **3D Card Hover**: Project cards lift and tilt on hover using CSS transforms
- **Skill Radar**: Interactive radar chart showing technical proficiencies
- **Timeline Animation**: Education and experience timeline with scroll-triggered reveals
- **Image Galleries**: Smooth carousels for project screenshots

### Scroll Motion
- **Gentle Reveals**: Content fades in as it enters the viewport (opacity 0.9 to 1.0)
- **Minimal Translation**: Elements move no more than 16px vertically
- **Staggered Timing**: Sequential reveals with 50ms delays between elements
- **Parallax Restraint**: Subtle background movement limited to ±4%

## Layout & Structure

### Grid System
- **12-column responsive grid** with consistent gutters
- **Asymmetrical layouts** for visual interest while maintaining balance
- **Generous white space** for professional appearance
- **Mobile-first responsive design**

### Navigation
- **Fixed header** with subtle transparency and backdrop blur
- **Clean typography** navigation with hover animations
- **Mobile hamburger menu** with smooth slide transitions
- **Active state indicators** for current page

### Content Sections
- **Hero Section**: Full-height with professional imagery and animated introduction
- **Skills Visualization**: Interactive charts and progress indicators
- **Project Portfolio**: Grid layout with detailed case studies
- **Education Timeline**: Vertical timeline with animated milestones
- **Contact Section**: Clean form design with real-time validation

## Professional Imagery

### Hero Image
- **Professional portrait**: High-quality, well-lit professional photography
- **Contextual background**: Subtle office or technology-themed backdrop
- **Consistent lighting**: Natural, soft lighting that complements the color palette

### Project Images
- **Consistent aspect ratios**: 16:9 for landscape, 4:3 for portrait orientations
- **Professional mockups**: Clean device frames and presentation contexts
- **Consistent filtering**: Subtle color grading that matches the overall palette

### Icon System
- **Minimal line icons**: Consistent stroke weight and style
- **Technology icons**: Custom icons for programming languages and tools
- **Social icons**: Professional, branded social media representations

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Optimizations
- **Touch-friendly interactions**: Minimum 44px touch targets
- **Simplified animations**: Reduced motion for performance
- **Optimized typography**: Larger text sizes for readability
- **Streamlined navigation**: Collapsible menu systems

## Accessibility

### Color Contrast
- **WCAG AA compliance**: Minimum 4.5:1 contrast ratio for all text
- **High contrast mode**: Alternative color scheme for accessibility
- **Color independence**: Information not conveyed by color alone

### Interactive Elements
- **Keyboard navigation**: Full keyboard accessibility for all interactions
- **Screen reader support**: Proper ARIA labels and semantic HTML
- **Focus indicators**: Clear visual focus states for all interactive elements