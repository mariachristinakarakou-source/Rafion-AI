"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">AI-Powered Sales Automation</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Your Autonomous AI Sales Representative
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Rafion Auto-SDR automates your LinkedIn and Email outreach, 
          booking qualified meetings while you focus on closing deals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
            asChild
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary px-8 py-6 text-lg"
            asChild
          >
            <Link href="/technology">
              Learn More
            </Link>
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Trusted by sales teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <span className="text-foreground font-semibold text-lg">Stripe</span>
            <span className="text-foreground font-semibold text-lg">Notion</span>
            <span className="text-foreground font-semibold text-lg">Linear</span>
            <span className="text-foreground font-semibold text-lg">Vercel</span>
            <span className="text-foreground font-semibold text-lg">Supabase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
