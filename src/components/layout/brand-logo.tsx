import Image from "next/image";
import Link from "next/link";
import { imageAlts } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
  imageClassName?: string;
}

export function BrandLogo({
  variant = "dark",
  showText = true,
  className,
  imageClassName,
}: BrandLogoProps) {
  return (
    <Link href="/" className={cn("flex min-w-0 items-center gap-2 sm:gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt={imageAlts.brandLogoNav}
        width={48}
        height={48}
        className={cn("h-10 w-10 object-contain sm:h-12 sm:w-12", imageClassName)}
        priority
      />
      {showText && (
        <div className="leading-tight">
          <span
            className={cn(
              "block font-[family-name:var(--concept-font-heading)] text-sm font-bold tracking-tight sm:text-base",
              variant === "dark"
                ? "text-[var(--concept-foreground)]"
                : "text-white"
            )}
          >
            The Better Man
          </span>
          <span
            className={cn(
              "block text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
              variant === "dark"
                ? "text-[var(--concept-muted-foreground)]"
                : "text-[var(--brand-silver-light)]"
            )}
          >
            Project
          </span>
        </div>
      )}
    </Link>
  );
}
