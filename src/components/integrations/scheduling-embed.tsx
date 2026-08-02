"use client";

import { useEffect, useId, useState } from "react";
import Script from "next/script";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";
import {
  bookingConfig,
  getBookingProvider,
  getCalendlyEmbedUrl,
} from "@/lib/booking";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SchedulingEmbedProps {
  className?: string;
  /** Override env URL (useful for testing) */
  url?: string;
}

export function SchedulingEmbed({ className, url }: SchedulingEmbedProps) {
  const bookingUrl = (url ?? bookingConfig.url).trim();
  const provider = getBookingProvider(bookingUrl);
  const widgetId = useId().replace(/:/g, "");
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (provider !== "calendly" || !scriptReady || !bookingUrl) return;

    const win = window as Window & {
      Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
    };

    const el = document.getElementById(`calendly-embed-${widgetId}`);
    if (el && win.Calendly) {
      el.innerHTML = "";
      win.Calendly.initInlineWidget({
        url: getCalendlyEmbedUrl(bookingUrl),
        parentElement: el,
      });
    }
  }, [provider, scriptReady, bookingUrl, widgetId]);

  if (provider === "none") {
    return <SchedulingSetupFallback className={className} />;
  }

  if (provider === "calendly") {
    return (
      <div className={cn("overflow-hidden rounded-xl border border-[var(--brand-silver-light)] bg-white shadow-sm", className)}>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          onLoad={() => setScriptReady(true)}
        />
        {!scriptReady && <SchedulingLoading />}
        <div
          id={`calendly-embed-${widgetId}`}
          className="calendly-inline-widget min-h-[700px] w-full"
          data-url={getCalendlyEmbedUrl(bookingUrl)}
          style={{ minWidth: "320px", height: "700px" }}
        />
        <SchedulingFooter bookingUrl={bookingUrl} />
      </div>
    );
  }

  // Cal.com and generic iframe embeds
  return (
    <div className={cn("overflow-hidden rounded-xl border border-[var(--brand-silver-light)] bg-white shadow-sm", className)}>
      <iframe
        src={bookingUrl}
        title={bookingConfig.eventName}
        className="min-h-[700px] w-full border-0"
        loading="lazy"
        allow="camera; microphone; fullscreen"
      />
      <SchedulingFooter bookingUrl={bookingUrl} />
    </div>
  );
}

function SchedulingLoading() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 text-[var(--concept-muted-foreground)]">
      <Loader2 className="h-6 w-6 animate-spin text-[var(--concept-primary)]" />
      <p className="text-sm">Loading scheduler…</p>
    </div>
  );
}

function SchedulingFooter({ bookingUrl }: { bookingUrl: string }) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 border-t border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] px-4 py-3 text-center sm:flex-row sm:text-left">
      <p className="text-xs text-[var(--concept-muted-foreground)]">
        Pick a time that works for you — confirmation is sent to your email instantly.
      </p>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs font-medium text-[var(--concept-primary)] hover:underline"
      >
        Open in new tab
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
}

/** Shown only when NEXT_PUBLIC_BOOKING_URL is not set yet */
function SchedulingSetupFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-8 text-center sm:p-10",
        className
      )}
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--concept-primary)]/10">
        <Calendar className="h-7 w-7 text-[var(--concept-primary)]" />
      </div>
      <h3 className="mt-4 font-[family-name:var(--concept-font-heading)] text-xl font-semibold text-[var(--concept-foreground)]">
        Scheduler almost ready
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
        Add your Calendly or Cal.com link as{" "}
        <code className="rounded bg-[var(--brand-off-white-muted)] px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_BOOKING_URL
        </code>{" "}
        in <code className="rounded bg-[var(--brand-off-white-muted)] px-1.5 py-0.5 text-xs">.env.local</code>, then
        restart the server. Until then, you can still reach Sarah directly:
      </p>
      <div className="mt-6 flex flex-col items-center gap-2 text-sm">
        <a
          href={`mailto:${siteConfig.email}?subject=Discovery%20Call%20Request`}
          className="font-semibold text-[var(--concept-primary)] hover:underline"
        >
          {siteConfig.email}
        </a>
        <a
          href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
          className="font-semibold text-[var(--concept-primary)] hover:underline"
        >
          {siteConfig.phone}
        </a>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild>
          <a
            href="https://calendly.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create a Calendly account
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://cal.com/signup" target="_blank" rel="noopener noreferrer">
            Or use Cal.com (free)
          </a>
        </Button>
      </div>
    </div>
  );
}
