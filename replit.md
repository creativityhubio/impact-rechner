# Impact Calculator - Nature Invest Paraguay

## Overview

This is a React-based environmental impact calculator application for Nature Invest Paraguay. The application allows users to calculate and visualize the positive environmental impact of their investments in sustainable forestry and conservation projects in Paraguay. Users can adjust investment amounts using an interactive slider and see real-time calculations of CO₂ reduction, trees planted, species protected, and other environmental metrics.

The application features a modern, glass-morphism design with animated backgrounds and responsive components, designed to engage users in understanding the environmental benefits of their investments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React hooks for local state, TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Component Structure
- **Modular Components**: Reusable UI components in `/components/ui/`
- **Business Components**: Application-specific components like `ImpactCalculator`, `MetricCard`
- **Layout Components**: `AnimatedBackground` for visual effects
- **Page Components**: Route-level components in `/pages/`

### Design System
- **Theme**: Custom nature-inspired color palette with CSS variables
- **Typography**: Inter font family for clean, modern text
- **Visual Effects**: Glass-morphism effects, animated backgrounds, and smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Data Layer
- **Database Schema**: Defined with Drizzle ORM using PostgreSQL
- **Type Safety**: Full TypeScript integration with Drizzle-generated types
- **Validation**: Zod schemas for runtime type checking

### Impact Calculations
- **Business Logic**: Centralized calculation functions in `/lib/impact-calculations.ts`
- **Real-time Updates**: Dynamic recalculation based on user input
- **Environmental Metrics**: CO₂ reduction, tree planting, species protection, water and soil conservation

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe database queries and migrations
- **Connection**: Environment variable `DATABASE_URL` for database connection

### UI Framework
- **Radix UI**: Headless, accessible UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **TypeScript**: Static type checking across the entire application
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Runtime Dependencies
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Date-fns**: Date manipulation utilities
- **Wouter**: Lightweight routing solution

### Development Environment
- **Replit Integration**: Specialized plugins for Replit development environment
- **Hot Module Replacement**: Fast development iteration
- **Error Overlay**: Runtime error reporting during development

The application follows a modern full-stack architecture with strong TypeScript integration, focusing on environmental impact visualization and user engagement through interactive components and real-time calculations.