"use client";

import { useEffect, useId, useState } from "react";
import Script from "next/script";
import { Calendar, Check, ExternalLink, Loader2 } from "lucide-react";
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

  if (provider === "google") {
    return <GoogleAppointmentCard bookingUrl={bookingUrl} className={className} />;
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
          className="calendly-inline-widget w-full min-h-[560px] sm:min-h-[700px]"
          data-url={getCalendlyEmbedUrl(bookingUrl)}
          style={{ height: "560px" }}
        />
        <SchedulingFooter bookingUrl={bookingUrl} />
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden rounded-xl border border-[var(--brand-silver-light)] bg-white shadow-sm", className)}>
      <iframe
        src={bookingUrl}
        title={bookingConfig.eventName}
        className="min-h-[560px] w-full max-w-full border-0 sm:min-h-[700px]"
        loading="lazy"
        allow="camera; microphone; fullscreen"
      />
      <SchedulingFooter bookingUrl={bookingUrl} />
    </div>
  );
}

const discoveryNotes = [
  "Complimentary 30-minute conversation",
  "Phone or video — your choice",
  "Instant confirmation to your inbox",
  "No payment and no obligation",
];

function GoogleAppointmentCard({
  bookingUrl,
  className,
}: {
  bookingUrl: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-4xl items-start gap-8 overflow-x-clip lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-14",
        className
      )}
    >
      <div className="lg:pt-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--concept-primary)]">
          Schedule
        </p>
        <h2 className="mt-2 font-[family-name:var(--concept-font-heading)] text-2xl font-bold tracking-tight text-[var(--concept-foreground)] sm:text-3xl lg:text-4xl">
          Pick a time that works
        </h2>
        <div className="silver-rule my-4 w-20" />
        <p className="max-w-md text-base leading-relaxed text-[var(--concept-muted-foreground)]">
          Choose a date on the calendar, then a time. Sarah will confirm by email.
        </p>
        <ul className="mt-8 space-y-3">
          {discoveryNotes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-3 text-sm text-[var(--concept-muted-foreground)]"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--brand-silver-light)] bg-[var(--concept-primary)]/5">
                <Check className="h-3 w-3 text-[var(--concept-primary)]" />
              </span>
              {note}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-[26rem] overflow-x-clip sm:pb-3 sm:pr-3">
        <div
          className="absolute -bottom-2 -right-2 left-4 top-6 hidden rounded-2xl bg-[var(--brand-navy)] sm:block"
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-2xl bg-[var(--brand-off-white)] shadow-2xl ring-1 ring-[var(--brand-silver)]/50">
          <div className="texture-navy px-5 py-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-silver-light)]">
              Discovery Call
            </p>
            <p className="mt-1 font-[family-name:var(--concept-font-heading)] text-lg font-semibold text-white">
              {bookingConfig.eventName}
            </p>
          </div>
          <iframe
            src={bookingUrl}
            title={bookingConfig.eventName}
            className="block w-full max-w-full bg-white"
            style={{ height: "min(70dvh, 560px)", minHeight: "420px" }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="camera; microphone; fullscreen"
          />
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] px-4 py-3">
            <p className="text-[11px] leading-snug text-[var(--concept-muted-foreground)]">
              Powered by Google Calendar
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-[var(--concept-primary)] hover:underline"
            >
              Open full page
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
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
        The Google Calendar scheduler is not configured. You can still reach Sarah
        directly:
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
          <a href={`mailto:${siteConfig.email}?subject=Discovery%20Call%20Request`}>
            Email Sarah
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={`tel:${siteConfig.phone.replace(/\./g, "")}`}>Call {siteConfig.phone}</a>
        </Button>
      </div>
    </div>
  );
}
