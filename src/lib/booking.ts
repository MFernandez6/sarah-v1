/**
 * Booking / scheduling configuration.
 *
 * Set NEXT_PUBLIC_BOOKING_URL in `.env.local` to your live scheduling link.
 * Supports Calendly or Cal.com, for example:
 *   NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-name/discovery-call
 *   NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-name/discovery-call
 */
export const bookingConfig = {
  url: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "",
  eventName: "Free 30-Minute Discovery Call",
};

export type BookingProvider = "calendly" | "calcom" | "other" | "none";

export function getBookingProvider(url: string = bookingConfig.url): BookingProvider {
  if (!url) return "none";
  if (url.includes("calendly.com")) return "calendly";
  if (url.includes("cal.com") || url.includes("cal.eu")) return "calcom";
  return "other";
}

/** Calendly brand-aligned embed URL */
export function getCalendlyEmbedUrl(url: string): string {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}hide_gdpr_banner=1&primary_color=1b2845`;
}
