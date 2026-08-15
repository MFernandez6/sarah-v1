import Link from "next/link";
import { brandCopy, bookingHref } from "@/lib/constants";
import { Container, Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl px-5 py-10 text-center sm:px-12 sm:py-16 texture-navy">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(212,216,222,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(212,216,222,0.1) 0%, transparent 40%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="font-[family-name:var(--concept-font-heading)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to Take the Next Step?
              </h2>
              <div className="silver-rule mx-auto my-6 w-24 opacity-60" />
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                Book a free discovery call and let&apos;s discuss your goals,
                challenges, and how coaching can help you move forward.
              </p>
              <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-[var(--concept-primary)] hover:bg-[var(--brand-off-white)] sm:w-auto"
                >
                  <Link href={bookingHref}>{brandCopy.primaryCta}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-[var(--brand-silver-light)] text-white hover:bg-white hover:text-[var(--concept-primary)] sm:w-auto"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
