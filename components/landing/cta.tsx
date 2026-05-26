"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to automate your outbound?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Join hundreds of sales teams using Rafion Auto-SDR to book more meetings and close more deals.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-medium"
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
        <p className="text-sm text-muted-foreground mt-4">
          Free setup. No credit card required.
        </p>
      </div>
    </section>
  );
}
