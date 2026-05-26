"use client";

import { Linkedin } from "lucide-react";

const MARIA_LINKEDIN =
  "https://www.linkedin.com/in/maria-christina-karakou-354b2038b/";
const KONSTANTINOS_LINKEDIN =
  "https://www.linkedin.com/in/konstantinos-lambiris-6b62ab3ba/";

const teamMembers = [
  {
    name: "Maria Christina Karakou",
    role: "Founder & Head of Growth",
    image: "/maria.jpg",
    linkedin: MARIA_LINKEDIN,
  },
  {
    name: "Konstantinos Lambiris",
    role: "Co-Founder & Lead Engineer",
    image: "/konstantinos.jpg",
    linkedin: KONSTANTINOS_LINKEDIN,
  },
];

export function Team() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The people behind Rafion Auto-SDR, dedicated to revolutionizing sales automation.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/50"
            >
              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute -inset-px bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <div className="relative flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full bg-secondary border-2 border-border overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="relative z-10 flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
