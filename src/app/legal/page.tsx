import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { legalSections, legalFaqs } from "@/lib/legal";
import { siteConfig } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Coaching Disclaimer",
  description:
    "Legal disclaimer for The Better Man Project — personal development coaching only, not therapy or mental health treatment.",
};

export default function LegalPage() {
  return (
    <>
      <PageHeader
        title="Coaching Disclaimer & Legal Notice"
        description="Please read this notice carefully before using this website or engaging in coaching services."
      />

      <Section>
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
                This notice explains the nature of services provided by{" "}
                <strong className="text-[var(--concept-foreground)]">
                  {siteConfig.legalName}
                </strong>{" "}
                through {siteConfig.name}. By using this website or participating in
                coaching, you agree to the terms below.
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-3xl space-y-12">
            {legalSections.map((section, index) => (
              <FadeIn key={section.id} delay={index * 0.05}>
                <section id={section.id}>
                  <h2 className="font-[family-name:var(--concept-font-heading)] text-2xl font-bold text-[var(--concept-foreground)]">
                    {section.title}
                  </h2>
                  <div className="silver-rule my-4 w-16" />
                  <div className="space-y-4 text-[var(--concept-muted-foreground)] leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                    {section.listTitle && (
                      <p className="font-medium text-[var(--concept-foreground)]">
                        {section.listTitle}
                      </p>
                    )}
                    {section.list && (
                      <ul className="list-disc space-y-2 pl-5">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--concept-font-heading)] text-2xl font-bold text-[var(--concept-foreground)]">
              Frequently Asked Legal Questions
            </h2>
            <div className="silver-rule my-4 w-16" />
            <Accordion type="single" collapsible className="mt-6">
              {legalFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`legal-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm text-[var(--concept-muted-foreground)]">
              Questions about this notice?{" "}
              <Link href="/contact" className="font-medium text-[var(--concept-primary)] hover:underline">
                Contact us
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
