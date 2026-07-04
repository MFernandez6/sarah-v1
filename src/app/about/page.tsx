import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Heart, Globe, Award } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aboutSarah, experience, siteConfig, values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sarah Angelo — luxury hospitality executive, female perspective mentor, and founder of The Better Man Project.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${siteConfig.founder}`}
        description="Senior executive, world traveler, and female perspective mentor dedicated to helping men become the best version of themselves."
      />

      <Section>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <SectionHeader
                eyebrow="Sarah's Story"
                title="Built on Real-World Experience"
                align="left"
                className="mb-0"
              />
              <div className="mt-6 space-y-4 text-[var(--concept-muted-foreground)] leading-relaxed">
                <p className="text-lg font-medium text-[var(--concept-foreground)]">
                  {aboutSarah.intro}
                </p>
                {aboutSarah.paragraphs.slice(0, 4).map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/logo-full.png"
                  alt="The Better Man Project"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-4 text-[var(--concept-muted-foreground)] leading-relaxed">
              {aboutSarah.paragraphs.slice(4).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <p className="text-lg font-medium text-[var(--concept-foreground)]">
                {aboutSarah.closing}
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Background"
              title="Three Decades of Leadership"
              description="Sarah's coaching is grounded in decades of executive experience in luxury hospitality — not textbook theory."
            />
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: "SVP of Design",
                description:
                  "Senior Vice President of Design for a luxury hospitality uniform manufacturer.",
              },
              {
                icon: Award,
                title: "Fashion & Textiles",
                description:
                  "Six years of study in fashion and textiles — expertise in personal style and image.",
              },
              {
                icon: Globe,
                title: "50+ Countries",
                description:
                  "Global perspective from traveling the world and growing up in Dubai.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--concept-primary)]/10">
                      <item.icon className="h-7 w-7 text-[var(--concept-primary)]" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--concept-muted-foreground)]">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section variant="off-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader
                eyebrow="Why Coaching"
                title="Why I Do This Work"
                align="left"
                className="mb-0"
              />
              <div className="mt-6 space-y-4 text-[var(--concept-muted-foreground)] leading-relaxed">
                <p>
                  I&apos;ve seen too many capable men struggle in silence — stuck in
                  patterns, unsure of their next move, and without someone in their
                  corner who truly gets it.
                </p>
                <p>
                  What inspired me to start The Better Man Project was the fact that I
                  already do this for all my friends and colleagues. Coaching isn&apos;t
                  about fixing what&apos;s broken — it&apos;s about unlocking potential
                  that&apos;s already there.
                </p>
                <p>
                  This is not therapy or counseling. This is strategic, action-oriented
                  mentorship for men who are ready to do the work — with the added benefit
                  of a female perspective.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-8">
                <Heart className="h-8 w-8 text-[var(--concept-primary)]" />
                <h3 className="mt-4 font-[family-name:var(--concept-font-heading)] text-2xl font-bold">
                  Mission Statement
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[var(--concept-muted-foreground)]">
                  To empower men with confidence, clarity, and accountability through a
                  female perspective — helping them build stronger relationships, develop
                  personal style, and live with purpose.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <SectionHeader eyebrow="Values" title="What Guides My Coaching" />
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-6">
                  <h3 className="font-semibold text-[var(--concept-primary)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--concept-muted-foreground)]">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionHeader eyebrow="Experience" title="Professional Journey" />
          </FadeIn>

          <div className="mx-auto max-w-3xl">
            {experience.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="relative border-l-2 border-[var(--concept-primary)] pl-8 pb-10 last:pb-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[var(--concept-primary)]" />
                  <p className="text-sm font-semibold text-[var(--concept-primary)]">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[var(--concept-muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/book">
                Book a Free Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
