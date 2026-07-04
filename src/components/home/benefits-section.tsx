import {
  Shield,
  Heart,
  MessageCircle,
  Sparkles,
  Scale,
  Compass,
} from "lucide-react";
import { benefits } from "@/lib/constants";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = {
  Shield,
  Heart,
  MessageCircle,
  Sparkles,
  Scale,
  Compass,
};

export function BenefitsSection() {
  return (
    <Section variant="muted">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="What You'll Gain"
            title="Transform Every Area of Your Life"
            description="Practical coaching focused on the areas that matter most to men ready for real growth."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={benefit.title}>
                <Card className="h-full border-[var(--brand-silver-light)] bg-[var(--brand-off-white)]/80 backdrop-blur-sm transition-all hover:border-[var(--brand-silver)] hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--brand-silver-light)] bg-[var(--concept-primary)]/5">
                      <Icon className="h-6 w-6 text-[var(--concept-primary)]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--concept-foreground)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
