import { whoIHelp } from "@/lib/constants";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function WhoIHelpSection() {
  return (
    <Section variant="off-white">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Who I Help"
            title="Coaching for Men Ready to Level Up"
            description="Whether you're navigating a career transition or simply ready for more, coaching provides the clarity and accountability you need."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {whoIHelp.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="group relative overflow-hidden rounded-xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)]/60 p-8 backdrop-blur-sm transition-all hover:border-[var(--brand-silver)] hover:shadow-lg">
                <span className="font-[family-name:var(--concept-font-heading)] text-5xl font-bold text-[var(--concept-primary)]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[var(--concept-foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--concept-muted-foreground)]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
