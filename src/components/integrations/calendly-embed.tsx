"use client";

import { Calendar } from "lucide-react";

interface CalendlyEmbedProps {
  title?: string;
  className?: string;
}

export function CalendlyEmbed({
  title = "Schedule Your Session",
  className,
}: CalendlyEmbedProps) {
  return (
    <div
      className={`rounded-xl border-2 border-dashed border-[var(--concept-border)] bg-[var(--concept-muted)] p-8 text-center ${className ?? ""}`}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--concept-primary)]/10">
        <Calendar className="h-8 w-8 text-[var(--concept-primary)]" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[var(--concept-foreground)]">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--concept-muted-foreground)]">
        Calendly embed placeholder — replace with your Calendly inline widget
        URL when ready.
      </p>
      <div className="mx-auto mt-6 max-w-lg rounded-lg bg-[var(--concept-background)] p-6 shadow-inner">
        <p className="font-mono text-xs text-[var(--concept-muted-foreground)]">
          {`<!-- Calendly inline widget begin -->`}
          <br />
          {`<div class="calendly-inline-widget"`}
          <br />
          {`  data-url="https://calendly.com/your-link"`}
          <br />
          {`  style="min-width:320px;height:700px;">`}
          <br />
          {`</div>`}
          <br />
          {`<!-- Calendly inline widget end -->`}
        </p>
      </div>
      <button
        type="button"
        className="mt-6 inline-flex items-center rounded-md bg-[var(--concept-primary)] px-6 py-3 text-sm font-medium text-[var(--concept-primary-foreground)] opacity-75"
        disabled
      >
        Open Calendly (Demo)
      </button>
    </div>
  );
}
