import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { founderPortrait, imageAlts } from "@/lib/seo";

interface FounderPortraitProps {
  priority?: boolean;
  className?: string;
}

export function FounderPortrait({
  priority = false,
  className,
}: FounderPortraitProps) {
  return (
    <figure className={cn("relative mx-auto w-full max-w-[400px] overflow-x-clip sm:pb-3 sm:pr-3", className)}>
      <div
        className="absolute -bottom-3 -right-3 left-7 top-10 hidden rounded-2xl bg-[var(--brand-navy)] sm:block"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[var(--brand-silver)]/55">
        <div className="relative aspect-[3/4]">
          <Image
            src={founderPortrait.src}
            alt={imageAlts.founderPortrait}
            fill
            priority={priority}
            className="object-cover object-[center_16%]"
            sizes="(max-width: 1024px) 80vw, 400px"
          />
        </div>
      </div>
      <figcaption className="mt-5 text-center">
        <p className="font-[family-name:var(--concept-font-heading)] text-xl font-bold text-[var(--concept-foreground)]">
          {siteConfig.founder}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-silver)]">
          Founder &amp; Mentor
        </p>
      </figcaption>
    </figure>
  );
}
