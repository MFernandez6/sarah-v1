"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section, SectionHeader } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SocialLinks } from "@/components/integrations/social-links";
import { coachingAcknowledgmentLabel } from "@/lib/legal";
import { siteConfig, faqs } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form placeholder submission");
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Contact"
        description="Have a question or ready to get started? Reach out — I'd love to hear from you."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader
                eyebrow="Get in Touch"
                title="Send a Message"
                align="left"
                className="mb-8"
              />

              {submitted ? (
                <div className="rounded-xl border border-[var(--concept-primary)] bg-[var(--concept-primary)]/5 p-8 text-center">
                  <h3 className="text-lg font-semibold text-[var(--concept-primary)]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-[var(--concept-muted-foreground)]">
                    Thank you for reaching out. This is a demo placeholder — Sarah
                    will respond within 24 hours when the site is live.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your goals and what you're looking for..."
                    />
                  </div>
                  <label className="flex cursor-pointer items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      required
                      checked={acknowledged}
                      onChange={(e) => setAcknowledged(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[var(--concept-primary)]"
                    />
                    <span className="text-xs leading-relaxed text-[var(--concept-muted-foreground)]">
                      {coachingAcknowledgmentLabel}
                    </span>
                  </label>
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!acknowledged}>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-center gap-3 text-[var(--concept-muted-foreground)]">
                      <Mail className="h-5 w-5 text-[var(--concept-primary)]" />
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-[var(--concept-primary)]"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-[var(--concept-muted-foreground)]">
                      <Phone className="h-5 w-5 text-[var(--concept-primary)]" />
                      {siteConfig.phone}
                    </li>
                    <li className="flex items-center gap-3 text-[var(--concept-muted-foreground)]">
                      <MapPin className="h-5 w-5 text-[var(--concept-primary)]" />
                      {siteConfig.location}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Follow Sarah</h3>
                  <div className="mt-4">
                    <SocialLinks />
                  </div>
                </div>

                <div
                  className="rounded-xl p-8 text-white"
                  style={{ background: "var(--concept-hero-gradient)" }}
                >
                  <h3 className="font-[family-name:var(--concept-font-heading)] text-xl font-bold">
                    Prefer to Talk?
                  </h3>
                  <p className="mt-2 text-sm text-white/90">
                    Book a free 30-minute discovery call and let&apos;s discuss your
                    goals in person.
                  </p>
                  <Button
                    asChild
                    className="mt-4 bg-white text-[var(--concept-primary)] hover:bg-white/90"
                  >
                    <a href="/book">Book a Free Call</a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`contact-faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
