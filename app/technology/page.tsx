import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Brain, 
  Shield, 
  RefreshCw, 
  Scan, 
  Lock, 
  Network,
  Database,
  Workflow,
  Plug
} from "lucide-react";

const capabilities = [
  {
    id: "semantic-analysis",
    icon: Brain,
    title: "Advanced Semantic Analysis",
    subtitle: "Understanding Prospect Intent",
    description: "Our AI doesn't just read profiles — it truly understands them. Using advanced natural language processing, Rafion analyzes prospect data to identify buying signals, pain points, and optimal engagement timing.",
    features: [
      {
        icon: Scan,
        title: "Deep Profile Analysis",
        description: "Extracts meaningful insights from LinkedIn activity, job changes, company news, and social signals to understand prospect context."
      },
      {
        icon: Brain,
        title: "Intent Signal Detection",
        description: "Identifies buying intent through behavioral patterns, engagement history, and market triggers that indicate readiness to purchase."
      },
      {
        icon: Network,
        title: "Relationship Mapping",
        description: "Maps organizational hierarchies and identifies key decision-makers, influencers, and potential champions within target accounts."
      }
    ]
  },
  {
    id: "security",
    icon: Shield,
    title: "Enterprise Security & Anti-Detection",
    subtitle: "Protecting Your LinkedIn Accounts",
    description: "We've engineered military-grade protection systems that keep your accounts safe. Our proprietary anti-detection technology mimics human behavior patterns while operating within platform guidelines.",
    features: [
      {
        icon: Shield,
        title: "Human Behavior Simulation",
        description: "Advanced algorithms replicate natural human interaction patterns — randomized delays, session durations, and activity distributions."
      },
      {
        icon: Lock,
        title: "IP & Device Fingerprinting",
        description: "Dedicated residential IPs, unique browser fingerprints, and session isolation ensure each account appears as a distinct, legitimate user."
      },
      {
        icon: RefreshCw,
        title: "Adaptive Rate Limiting",
        description: "Real-time monitoring adjusts activity levels based on account health scores, platform changes, and risk indicators."
      }
    ]
  },
  {
    id: "integrations",
    icon: Workflow,
    title: "Integration Ecosystem",
    subtitle: "Seamless CRM Synchronization",
    description: "Rafion doesn't operate in a silo. Our robust integration layer ensures every interaction, insight, and outcome flows directly into your existing tech stack, keeping your CRM as the single source of truth.",
    features: [
      {
        icon: Database,
        title: "Bi-directional Sync",
        description: "Real-time synchronization with Salesforce, HubSpot, Pipedrive, and 50+ CRMs. Every touchpoint logged, every status updated automatically."
      },
      {
        icon: Workflow,
        title: "Custom Workflows",
        description: "Trigger automated sequences based on CRM events — lead scoring changes, deal stage updates, or custom field modifications."
      },
      {
        icon: Plug,
        title: "API & Webhooks",
        description: "Full REST API access and webhook support for custom integrations, enabling seamless connection with your proprietary tools."
      }
    ]
  }
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="gap-2 text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-2.5">
            {/* High-tech Geometric R Logo */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="none" className="absolute inset-0 w-full h-full">
                <path 
                  d="M18 1L33 9.5V26.5L18 35L3 26.5V9.5L18 1Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="text-foreground/20"
                />
                <path 
                  d="M18 1V8M33 9.5L26 13M3 9.5L10 13" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-foreground/10"
                />
              </svg>
              <span className="relative z-10 text-base font-bold text-foreground tracking-tighter" style={{ fontFamily: 'system-ui' }}>
                R
              </span>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rounded-full opacity-60" />
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">Rafion</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Our Technology</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            The AI Engine Behind Your Success
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Discover the cutting-edge technology that powers Rafion Auto-SDR — built for enterprise scale, designed for human-like engagement.
          </p>
        </div>
      </section>

      {/* Capabilities Sections */}
      {capabilities.map((capability, index) => (
        <section 
          key={capability.id}
          className={`py-24 px-4 ${index % 2 === 0 ? 'bg-card/30' : ''} border-t border-border`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-start gap-6 mb-16">
              <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center shrink-0">
                <capability.icon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-sm text-accent font-medium mb-2">{capability.subtitle}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {capability.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {capability.features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to See It in Action?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how Rafion can transform your outbound sales pipeline.
          </p>
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
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rafion Auto-SDR. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
