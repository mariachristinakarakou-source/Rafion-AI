import { Sparkles, RefreshCw, CalendarPlus, Target, Shield, Clock } from "lucide-react";

const keyFeatures = [
  {
    icon: Sparkles,
    title: "Hyper-Personalization",
    description:
      "AI researches each prospect and crafts unique messages based on their role, company, recent news, and social activity.",
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: "Smart Follow-ups",
    description:
      "Intelligent follow-up sequences that adapt based on prospect engagement and optimal timing windows.",
    highlight: true,
  },
  {
    icon: CalendarPlus,
    title: "Auto-Booking",
    description:
      "Prospects book directly into your calendar. Rafion handles timezone conversion and availability checks.",
    highlight: true,
  },
  {
    icon: Target,
    title: "Lead Scoring",
    description:
      "AI prioritizes the hottest leads so you focus on prospects most likely to convert.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Compliance Built-in",
    description:
      "Stay compliant with GDPR, CAN-SPAM, and LinkedIn limits. We protect your accounts and reputation.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description:
      "Your AI SDR never sleeps. Engage prospects across timezones while you focus on closing deals.",
    highlight: false,
  },
];

export function KeyFeatures() {
  return (
    <section className="py-24 px-4 border-t border-border relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
            Powerful Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Key Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade AI sales automation that delivers results without the enterprise complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-xl border transition-all duration-300 ${
                feature.highlight
                  ? "border-accent/30 bg-accent/5 hover:border-accent/60 hover:bg-accent/10"
                  : "border-border bg-card hover:border-accent/50"
              }`}
            >
              {/* Highlight badge */}
              {feature.highlight && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Core
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                feature.highlight
                  ? "bg-accent/20 group-hover:bg-accent/30"
                  : "bg-secondary group-hover:bg-accent/10"
              }`}>
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
  );
}
