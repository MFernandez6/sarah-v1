import { differentiator } from "@/lib/constants";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Check } from "lucide-react";

export function DifferentiatorSection() {
  return (
    <Section variant="muted">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="What Makes This Different"
            title={differentiator.title}
            description={differentiator.intro}
          />
        </FadeIn>

        <StaggerContainer className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {differentiator.points.map((point) => (
            <StaggerItem key={point}>
              <div className="flex items-start gap-3 rounded-lg border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)]/80 p-4 backdrop-blur-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--concept-primary)]" />
                <p className="text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
                  {point}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
