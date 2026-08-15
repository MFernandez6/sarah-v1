/**
 * Booking / scheduling configuration.
 *
 * Default: Sarah’s Google Calendar Appointment Schedule.
 * Override with NEXT_PUBLIC_BOOKING_URL in `.env.local` if the schedule URL changes.
 */
export const GOOGLE_APPOINTMENT_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1fJmctKqB4V5pUPqnbXRLNjx3qtixQxCciFn8J8mXyE3xNbk_t6sW0Q33S2lCr3-p8dBpBUNiM?gv=true";

export const bookingConfig = {
  url: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || GOOGLE_APPOINTMENT_URL,
  eventName: "Free 30-Minute Discovery Call",
};

export type BookingProvider =
  | "google"
  | "calendly"
  | "calcom"
  | "other"
  | "none";

export function getBookingProvider(
  url: string = bookingConfig.url
): BookingProvider {
  if (!url) return "none";
  if (url.includes("calendar.google.com")) return "google";
  if (url.includes("calendly.com")) return "calendly";
  if (url.includes("cal.com") || url.includes("cal.eu")) return "calcom";
  return "other";
}

/** Calendly brand-aligned embed URL */
export function getCalendlyEmbedUrl(url: string): string {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}hide_gdpr_banner=1&primary_color=1b2845`;
}
