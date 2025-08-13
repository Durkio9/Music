# Overview

MELVIN is a comprehensive music hub web application showcasing the complete catalogs of six legendary rap artists: King Von, YNW Melly, Lil Durk, Lil Baby, Lil Loaded, and Juice WRLD. The application provides an immersive platform where users can explore detailed information about Chicago drill music culture, emo rap, and modern hip-hop, browse through extensive song collections (16 tracks each totaling 96 tracks), and access working YouTube links for each track that open in new tabs. Built as a full-stack application with a React frontend and Express.js backend, it features a modern dark-themed design with elegant borders, subtle animations, refined logo design with sophisticated borders, and educational content about music history and evolution.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing with pages for Home, King Von, YNW Melly, Lil Durk, Lil Baby, Lil Loaded, Juice WRLD, and 404 error handling
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark color scheme with elegant borders, gradient effects, and artist-specific color themes
- **State Management**: TanStack React Query for server state management and data fetching
- **Component Structure**: Modular design with reusable UI components and six dedicated artist pages
- **Enhanced Visuals**: Refined logo design with decorative borders, subtle shadows, and elegant animations that removed neon colors for a more sophisticated aesthetic

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Build System**: ESBuild for production builds with tree-shaking and bundling
- **Development**: Hot module replacement via Vite integration for seamless development experience
- **Storage Layer**: Abstract storage interface with in-memory implementation (MemStorage) for user management
- **Middleware**: Request logging, JSON parsing, and error handling middleware

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM with migrations support
- **ORM**: Drizzle ORM for type-safe database operations with schema definition in shared folder
- **Connection**: Neon Database serverless PostgreSQL for production deployment
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple
- **Schema**: User management with username/password authentication system

## Authentication and Authorization
- **User Model**: Simple user entity with ID, username, and password fields
- **Validation**: Zod schemas for runtime type validation and data parsing
- **Storage Interface**: CRUD operations abstracted through IStorage interface allowing for different storage implementations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for database connectivity
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and migration tools for PostgreSQL
- **@tanstack/react-query**: Server state management and caching for React

### UI and Styling
- **@radix-ui/***: Comprehensive collection of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for styling components
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **vite**: Modern build tool with HMR and optimized bundling
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development error handling
- **@replit/vite-plugin-cartographer**: Replit integration for enhanced development experience
- **esbuild**: Fast JavaScript bundler for production builds

### Form and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolver integration
- **zod**: TypeScript-first schema validation library

### Third-Party Services
- **YouTube**: External links for music playback (no API integration, direct links)
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for music-related icons
- **Unsplash**: Placeholder images for artist profiles