export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group">
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
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rafion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
