"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { brandCopy, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroHighlights = [
  "Female Perspective Mentor",
  "30+ Years of Experience",
  "One-on-One Coaching Only",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden texture-hero">
      <div
        className="texture-hero-mesh pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[var(--brand-silver)]/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-navy)]/8 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-48 w-48 rounded-full border border-[var(--brand-silver-light)]/20" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-6 border-[var(--brand-silver)] bg-white/40 text-[var(--concept-primary)]"
          >
            {siteConfig.tagline}
          </Badge>
          <h1 className="font-[family-name:var(--concept-font-heading)] text-4xl font-bold leading-tight tracking-tight text-[var(--concept-foreground)] sm:text-5xl lg:text-6xl">
            {brandCopy.headline}
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-silver)]">
            {brandCopy.pillars}
          </p>
          <div className="silver-rule my-6 w-20" />
          <p className="text-lg leading-relaxed text-[var(--concept-muted-foreground)] sm:text-xl">
            {brandCopy.subheadline}
          </p>
          <p className="mt-3 text-sm italic text-[var(--concept-muted-foreground)]">
            {siteConfig.motto}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book">
                {brandCopy.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">{brandCopy.secondaryCta}</Link>
            </Button>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-1">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-[var(--concept-muted-foreground)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--concept-primary)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--brand-silver-light)] via-[var(--brand-silver)] to-[var(--brand-navy)] opacity-60" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/logo-full.png"
              alt="The Better Man Project — Guidance for Modern Men"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
