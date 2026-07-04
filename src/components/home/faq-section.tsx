import { faqs } from "@/lib/constants";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <Section variant="off-white">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            description="Everything you need to know about coaching with Sarah."
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-[var(--concept-foreground)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </Section>
  );
}
