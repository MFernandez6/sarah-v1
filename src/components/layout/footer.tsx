import Link from "next/link";
import { navLinks, siteConfig, brandCopy } from "@/lib/constants";
import { legalLinks } from "@/lib/legal";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SocialLinks } from "@/components/integrations/social-links";
import { NewsletterSignup } from "@/components/integrations/newsletter-signup";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="texture-muted border-t border-[var(--brand-silver-light)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLogo />
            <p className="mt-3 text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
              {brandCopy.subheadline}
            </p>
            <p className="mt-2 text-xs text-[var(--concept-muted-foreground)]">
              {siteConfig.legalName}
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--concept-foreground)]">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--concept-muted-foreground)] transition-colors hover:text-[var(--concept-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--concept-foreground)]">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--concept-muted-foreground)] transition-colors hover:text-[var(--concept-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--concept-foreground)]">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--concept-muted-foreground)]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block max-w-full whitespace-nowrap transition-colors hover:text-[var(--concept-primary)]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                  className="transition-colors hover:text-[var(--concept-primary)]"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--concept-foreground)]">
                Newsletter
              </p>
              <div className="mt-4">
                <NewsletterSignup compact />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-[var(--concept-muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>
            Coaching only — not therapy or mental health treatment.{" "}
            <Link href="/legal" className="hover:text-[var(--concept-primary)] hover:underline">
              Disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
