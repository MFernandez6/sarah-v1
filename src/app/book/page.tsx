import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book a free discovery call with Sarah Angelo at The Better Man Project — one-on-one coaching for men.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        title="Book a Session"
        description="One-on-one coaching only. Virtual sessions via phone or video, with optional in-person meetings. Start with a free discovery call."
      />

      <Section>
        <Container>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <Card
                  className={cn(
                    "relative flex h-full flex-col",
                    plan.highlighted &&
                      "border-[var(--concept-primary)] shadow-lg ring-1 ring-[var(--concept-primary)]"
                  )}
                >
                  {plan.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-[family-name:var(--concept-font-heading)] text-xl">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-[var(--concept-primary)] sm:text-3xl">
                        {plan.price}
                      </span>
                      <span className="block text-sm text-[var(--concept-muted-foreground)]">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm text-[var(--concept-muted-foreground)]">
                      {plan.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-[var(--concept-muted-foreground)]"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--concept-primary)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full">
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section variant="muted" id="schedule">
        <Container>
          <FadeIn>
            <SectionHeader
              title="Schedule Your Free Discovery Call"
              description="Reach out directly to book your complimentary 30-minute discovery call. We'll discuss your goals and see if coaching is the right fit."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-xl rounded-xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-8 text-center">
              <p className="text-[var(--concept-muted-foreground)] leading-relaxed">
                Online scheduling is coming soon. For now, contact Sarah directly to
                arrange your free discovery call.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-[var(--concept-primary)] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                    className="font-semibold text-[var(--concept-primary)] hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Send a Message</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
