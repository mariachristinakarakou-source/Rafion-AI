import { UserPlus, Bot, CalendarCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Connect Your Accounts",
    description:
      "Link your LinkedIn and email accounts in minutes. Our secure OAuth integration keeps your credentials safe.",
  },
  {
    step: "02",
    icon: Bot,
    title: "Define Your ICP",
    description:
      "Tell us who your ideal customers are. Our AI learns your target audience and crafts personalized outreach strategies.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Watch Meetings Roll In",
    description:
      "Sit back as Rafion handles prospecting, outreach, and follow-ups. You just show up to qualified meetings.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in three simple steps and watch your calendar fill with qualified meetings.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-accent/50 to-transparent" />
              )}
              
              <div className="group text-center p-8 rounded-2xl border border-border bg-card/50 hover:border-accent/50 hover:bg-card transition-all duration-300">
                {/* Step number */}
                <div className="text-5xl font-bold text-accent/20 mb-4 group-hover:text-accent/40 transition-colors">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
