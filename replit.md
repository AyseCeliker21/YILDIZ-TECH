# Replit.md

## Overview

YildizTech is a corporate technology company website built with React and Vite. The site showcases software development and embedded systems solutions, featuring a modern, visually engaging design with 3D elements, animations, and a dark theme. The website is primarily in Turkish and includes contact functionality via EmailJS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with Vite as the build tool for fast development and optimized production builds
- **React Router DOM** for client-side routing and navigation
- **Tailwind CSS** for utility-first styling with custom configuration

### Visual & Animation Layer
- **Three.js** with React Three Fiber and Drei for 3D graphics and interactive visual elements
- **Framer Motion** for smooth UI animations and transitions
- Custom CSS for code-rain effects and glassmorphism design patterns

### Design System
- Dark theme (gray-950 background) with gradient accents using custom "brand" color palette
- Custom typography using Inter (UI) and Fira Code (monospace/code elements)
- Glassmorphism effects via custom `.glass` utility class

### Build Configuration
- Vite configured for both local development (port 5000) and GitHub Pages deployment
- Dynamic base path handling for deployment flexibility
- HMR configured for Replit environment (clientPort 443)

### Contact Form Integration
- **EmailJS** for client-side email sending without backend
- **Google reCAPTCHA v2** integration for spam protection (requires VITE_RECAPTCHA_SITE_KEY environment variable)

## External Dependencies

### Third-Party Services
- **EmailJS** (@emailjs/browser) - Client-side email delivery for contact forms
- **Google reCAPTCHA v2** - Spam protection for form submissions
- **Google Fonts** - Inter and Fira Code font families loaded via CDN

### Deployment
- **GitHub Pages** (gh-pages) - Static site hosting with custom build script
- Cross-env for environment variable handling during builds

### Key Environment Variables
- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA site key for form protection
- `VITE_BASE` - Base path override for deployment (used in GitHub Pages build)