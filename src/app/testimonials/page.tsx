import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { brandCopy, bookingHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials for The Better Man Project — coming soon.",
  robots: { index: false, follow: false },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials"
        description="Client stories will be shared here as The Better Man Project grows."
      />

      <Section>
        <Container>
          <FadeIn className="mx-auto max-w-xl text-center">
            <p className="text-lg text-[var(--concept-muted-foreground)] leading-relaxed">
              Testimonials are coming soon. In the meantime, book a free discovery call
              to learn how coaching can help you.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href={bookingHref}>{brandCopy.primaryCta}</Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
