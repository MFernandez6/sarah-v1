import Link from "next/link";
import { coachingDisclaimerShort } from "@/lib/legal";

export function CoachingDisclaimerBar() {
  return (
    <div
      className="border-t border-[var(--brand-silver-light)] bg-[var(--brand-navy)] text-white"
      role="note"
      aria-label="Coaching disclaimer"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
          <span className="font-semibold text-white">Important: </span>
          {coachingDisclaimerShort}
        </p>
        <Link
          href="/legal"
          className="shrink-0 text-xs font-semibold text-[var(--brand-silver-light)] underline-offset-2 hover:text-white hover:underline sm:text-sm"
        >
          Read Full Disclaimer
        </Link>
      </div>
    </div>
  );
}
