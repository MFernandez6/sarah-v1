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
    <figure className={cn("mx-auto w-full max-w-[380px]", className)}>
      <div className="relative">
        <div
          className="absolute inset-[10px_0_0_10px] rounded-2xl bg-[var(--brand-navy)] sm:inset-[12px_0_0_12px]"
          aria-hidden="true"
        />
        <div className="relative mb-2.5 mr-2.5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-[var(--brand-silver)]/50 sm:mb-3 sm:mr-3">
          <div className="relative aspect-[3/4]">
            <Image
              src={founderPortrait.src}
              alt={imageAlts.founderPortrait}
              fill
              priority={priority}
              className="object-cover object-[center_16%]"
              sizes="(max-width: 1024px) 80vw, 380px"
            />
          </div>
        </div>
      </div>
      <figcaption className="mt-6 text-center">
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
