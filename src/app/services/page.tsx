import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore coaching services including confidence, relationships, style & image, and work-life balance coaching for men.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Coaching Services"
        description="Focused coaching programs designed to help men build confidence, improve relationships, and create balance in every area of life."
      />

      <Section>
        <Container>
          <StaggerContainer className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <div
                    className="h-2"
                    style={{ background: "var(--concept-hero-gradient)" }}
                  />
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--concept-font-heading)] text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--concept-muted-foreground)] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--concept-foreground)]">
                        Focus Areas
                      </p>
                      <ul className="space-y-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-[var(--concept-muted-foreground)]"
                          >
                            <Check className="h-4 w-4 shrink-0 text-[var(--concept-primary)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <SectionHeader
              title="How Coaching Works"
              description="Every engagement starts with understanding your goals and creating a personalized plan."
            />
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "A free 30-minute conversation to discuss your goals and determine if we're a good fit.",
              },
              {
                step: "02",
                title: "Custom Plan",
                description:
                  "We'll create a coaching plan tailored to your specific challenges, timeline, and objectives.",
              },
              {
                step: "03",
                title: "Take Action",
                description:
                  "Regular sessions with accountability, honest feedback, and practical strategies for real progress.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <span className="font-[family-name:var(--concept-font-heading)] text-5xl font-bold text-[var(--concept-primary)]/20">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--concept-muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/book">
                Book Your Free Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
