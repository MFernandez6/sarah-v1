import Link from "next/link";
import { ArrowRight, Briefcase, Users, Globe } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { FounderPortrait } from "@/components/media/founder-portrait";

const highlights = [
  {
    icon: Briefcase,
    title: "20+ Years of Leadership",
    description:
      "Senior executive in luxury hospitality. SVP of Design. Mentoring professionals and developing leaders throughout her career.",
  },
  {
    icon: Users,
    title: "Female Perspective",
    description:
      "A successful, experienced woman offering honest insight into how women think, communicate, and perceive confidence.",
  },
  {
    icon: Globe,
    title: "Global Experience",
    description:
      "Traveled to 50+ countries. Grew up in Dubai. Brings a worldly perspective to coaching and human connection.",
  },
];

export function AboutSarahSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <FounderPortrait />
          </FadeIn>

          <FadeIn delay={0.2}>
            <SectionHeader
              eyebrow={`About ${siteConfig.founder}`}
              title="Real Experience. Honest Guidance."
              description="I'm not a therapist — I'm an experienced executive and mentor who helps men take action, build confidence, and create meaningful change through a female perspective."
              align="left"
              className="mb-8"
            />

            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--brand-silver-light)] bg-[var(--concept-primary)]/5">
                    <item.icon className="h-5 w-5 text-[var(--concept-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--concept-foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8">
              <Link href="/about">
                Read My Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
