import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SchedulingEmbed } from "@/components/integrations/scheduling-embed";
import { pricingPlans } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book a free discovery call with Sarah Angelo. Coaching packages start at $150 per session and $600/month.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        title="Book a Free Discovery Call"
        description="Choose a time below — no obligation. We'll talk through your goals and see if coaching is the right fit."
      />

      <Section id="schedule">
        <Container>
          <FadeIn>
            <SectionHeader
              title="Pick a Time That Works for You"
              description="Free 30-minute discovery call via phone or video. Instant confirmation to your inbox."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SchedulingEmbed />
          </FadeIn>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <SectionHeader
              title="Coaching Options"
              description="Transparent starting ranges so you know what to expect. Final package details are tailored on your discovery call."
            />
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mb-10 text-center text-sm text-[var(--concept-muted-foreground)]">
              Packages start at{" "}
              <span className="font-semibold text-[var(--concept-foreground)]">
                $150 per session
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[var(--concept-foreground)]">
                $600/month
              </span>
              .
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => {
              const isDiscovery = plan.price === "Free";
              const showBadge = Boolean(plan.badge || plan.highlighted);

              return (
                <StaggerItem key={plan.name}>
                  <Card
                    className={cn(
                      "relative flex h-full flex-col",
                      (plan.highlighted || isDiscovery) &&
                        "border-[var(--concept-primary)] shadow-lg ring-1 ring-[var(--concept-primary)]"
                    )}
                  >
                    {showBadge && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                        {plan.badge ?? "Most Popular"}
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="font-[family-name:var(--concept-font-heading)] text-xl">
                        {plan.name}
                      </CardTitle>
                      <div className="mt-4">
                        <span
                          className={cn(
                            "font-bold text-[var(--concept-primary)]",
                            plan.price.length > 8 ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                          )}
                        >
                          {plan.price}
                        </span>
                        <span className="mt-1 block text-sm text-[var(--concept-muted-foreground)]">
                          {plan.period}
                        </span>
                        {"priceNote" in plan && plan.priceNote && (
                          <span className="mt-2 block text-xs leading-snug text-[var(--concept-muted-foreground)]">
                            {plan.priceNote}
                          </span>
                        )}
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
                      <Button
                        asChild
                        className="mt-6 w-full"
                        variant={isDiscovery || plan.highlighted ? "default" : "outline"}
                      >
                        <Link href={plan.href}>{plan.cta}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-[var(--concept-muted-foreground)]">
              Ranges shown are starting guides based on scope and intensity. Exact investment
              is confirmed during your free discovery call — no pressure and no obligation.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
