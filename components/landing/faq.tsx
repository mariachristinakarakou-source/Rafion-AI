"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Rafion Auto-SDR personalize outreach at scale?",
    answer:
      "Our AI researches each prospect by analyzing their LinkedIn profile, company website, recent news, job changes, and social activity. It then crafts unique messages that reference specific details about the prospect, making every outreach feel hand-written and relevant.",
  },
  {
    question: "Will my LinkedIn account get restricted?",
    answer:
      "We take account safety seriously. Rafion operates within LinkedIn's activity limits and mimics human behavior patterns. We use smart throttling, randomized timing, and warm-up sequences to keep your account in good standing. In 2+ years, we've had zero account restrictions.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most customers are fully operational within 24-48 hours. Connect your accounts, define your ideal customer profile, and approve your first campaign. Our onboarding team guides you through every step to ensure success.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our customers typically see 3-5x more qualified meetings compared to manual outreach. Average reply rates are 15-25% for LinkedIn and 8-12% for email. Results vary based on your ICP, offer, and market, but our AI continuously optimizes for better performance.",
  },
  {
    question: "Can I customize the messaging style and tone?",
    answer:
      "Absolutely. You can set your preferred tone (professional, casual, direct), provide example messages you like, and the AI learns your voice. You approve all templates before they go live, and can adjust the AI's approach anytime.",
  },
  {
    question: "What happens when a prospect replies?",
    answer:
      "You get instant notifications for all replies. Positive responses are flagged for your immediate attention. The AI can handle common objections and questions automatically, or you can take over the conversation at any point.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "No long-term contracts. Rafion is billed monthly and you can cancel anytime. We believe in earning your business every month. Most customers stay because they see consistent ROI, not because they're locked in.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Rafion Auto-SDR.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card/50 data-[state=open]:border-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
