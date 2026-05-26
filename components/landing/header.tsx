"use client";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* High-tech Geometric R Logo */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Outer geometric frame */}
            <svg 
              viewBox="0 0 36 36" 
              fill="none" 
              className="absolute inset-0 w-full h-full"
            >
              {/* Hexagonal outer shape */}
              <path 
                d="M18 1L33 9.5V26.5L18 35L3 26.5V9.5L18 1Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="text-foreground/20 group-hover:text-foreground/40 transition-colors duration-300"
              />
              {/* Inner geometric accent lines */}
              <path 
                d="M18 1V8M33 9.5L26 13M3 9.5L10 13" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-foreground/10"
              />
            </svg>
            {/* The R letter - geometric style */}
            <span className="relative z-10 text-lg font-bold text-foreground tracking-tighter" style={{ fontFamily: 'system-ui' }}>
              R
            </span>
            {/* Corner accent dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rounded-full opacity-60" />
          </div>
          {/* Brand name */}
          <span className="text-lg font-semibold text-foreground tracking-tight">
            Rafion
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </a>
        </Button>
      </div>
    </header>
  );
}
