import { cn } from "@/lib/utils";

interface BlogCoverArtProps {
  className?: string;
  category?: string;
}

export function BlogCoverArt({ className, category }: BlogCoverArtProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden texture-navy",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />

      <svg
        viewBox="0 0 240 240"
        className="relative h-[55%] w-[55%] max-h-48 max-w-48 opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle
          cx="120"
          cy="120"
          r="88"
          stroke="var(--brand-silver-light)"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <circle
          cx="120"
          cy="120"
          r="72"
          stroke="var(--brand-silver)"
          strokeWidth="0.75"
          opacity="0.35"
        />

        {/* Cardinal points */}
        <path
          d="M120 24 L124 52 L120 46 L116 52 Z"
          fill="var(--brand-silver-light)"
          opacity="0.7"
        />
        <path
          d="M120 216 L124 188 L120 194 L116 188 Z"
          fill="var(--brand-silver-light)"
          opacity="0.45"
        />
        <path
          d="M24 120 L52 124 L46 120 L52 116 Z"
          fill="var(--brand-silver-light)"
          opacity="0.45"
        />
        <path
          d="M216 120 L188 124 L194 120 L188 116 Z"
          fill="var(--brand-silver-light)"
          opacity="0.45"
        />

        {/* Compass star — sketch-style */}
        <path
          d="M120 58 L128 112 L120 104 L112 112 Z"
          stroke="var(--brand-silver-light)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(212, 216, 222, 0.12)"
        />
        <path
          d="M120 182 L128 128 L120 136 L112 128 Z"
          stroke="var(--brand-silver-light)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(212, 216, 222, 0.08)"
        />
        <path
          d="M58 120 L112 128 L104 120 L112 112 Z"
          stroke="var(--brand-silver-light)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(212, 216, 222, 0.08)"
        />
        <path
          d="M182 120 L128 128 L136 120 L128 112 Z"
          stroke="var(--brand-silver-light)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(212, 216, 222, 0.08)"
        />

        {/* Center hub */}
        <circle
          cx="120"
          cy="120"
          r="6"
          stroke="var(--brand-silver-light)"
          strokeWidth="1.25"
          fill="rgba(255, 255, 255, 0.08)"
        />

        {/* Small stars — hand-drawn feel */}
        {[
          [88, 88, 0.5],
          [152, 86, 0.4],
          [158, 148, 0.45],
          [82, 152, 0.4],
          [120, 76, 0.35],
        ].map(([x, y, op], i) => (
          <path
            key={i}
            d={`M${x} ${Number(y) - 4} L${Number(x) + 1} ${Number(y) - 1} L${Number(x) + 4} ${y} L${Number(x) + 1} ${Number(y) + 1} L${x} ${Number(y) + 4} L${Number(x) - 1} ${Number(y) + 1} L${Number(x) - 4} ${y} L${Number(x) - 1} ${Number(y) - 1} Z`}
            fill="var(--brand-silver-light)"
            opacity={op}
          />
        ))}

        {/* Subtle sketch lines */}
        <path
          d="M48 168 Q120 140 192 168"
          stroke="var(--brand-silver)"
          strokeWidth="0.75"
          opacity="0.25"
          strokeDasharray="4 6"
        />
        <path
          d="M56 72 Q120 98 184 72"
          stroke="var(--brand-silver)"
          strokeWidth="0.75"
          opacity="0.2"
          strokeDasharray="3 5"
        />
      </svg>

      {category && (
        <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
          {category}
        </span>
      )}
    </div>
  );
}
