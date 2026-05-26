"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const includedFeatures = [
  "Unlimited LinkedIn outreach",
  "Unlimited email sequences",
  "AI-powered personalization",
  "Dedicated account manager",
  "CRM integrations",
  "Priority support",
  "Custom reporting",
  "A/B testing",
];

export function Pricing() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            One plan. Everything included. No hidden fees or usage limits.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl opacity-50" />
          
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Price Section */}
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Pro Plan
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">$499</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Billed monthly. Cancel anytime.
                </p>
              </div>

              {/* CTA */}
              <div className="lg:text-right">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium w-full lg:w-auto"
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
                <p className="text-sm text-muted-foreground mt-3">
                  30-day money-back guarantee
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8" />

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {includedFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
