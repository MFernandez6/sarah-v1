import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ServicesOverviewSection() {
  return (
    <Section variant="muted">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Services"
            title="Coaching Programs Tailored to You"
            description="Focused coaching areas designed to address the challenges men face most."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--concept-font-heading)]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--concept-muted-foreground)]">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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

        <FadeIn className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
