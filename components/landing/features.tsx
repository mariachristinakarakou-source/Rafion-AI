import { Mail, Linkedin, Bot, Calendar, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    description:
      "Automatically send connection requests, follow-ups, and personalized messages at scale.",
  },
  {
    icon: Mail,
    title: "Email Outreach",
    description:
      "Craft and send hyper-personalized cold emails that land in primary inboxes.",
  },
  {
    icon: Bot,
    title: "AI Personalization",
    description:
      "Every message is uniquely crafted using AI to research prospects and write like a human.",
  },
  {
    icon: Calendar,
    title: "Meeting Booking",
    description:
      "Prospects can book directly into your calendar. No back-and-forth scheduling.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track open rates, reply rates, and pipeline generated in real-time.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Connect your accounts and start generating leads within 24 hours.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to scale outbound
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Replace your entire SDR team with an AI that works 24/7, never takes vacation, and books meetings while you sleep.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
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
  );
}
