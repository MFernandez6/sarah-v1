import { socialLinks, siteConfig } from "@/lib/constants";

/**
 * Centralized image alt text for accessibility and SEO.
 * When photography arrives, update founderPortrait with a true description
 * (e.g. "Sarah Angelo, founder of The Better Man Project, smiling in a navy blazer").
 */
export const imageAlts = {
  logoMark:
    "The Better Man Project logo: a gold compass rose emblem on a navy background",
  logoFull:
    "The Better Man Project brand lockup — gold compass logo above the name and tagline Guidance for Modern Men on a navy textured background",
  /** Replace this string when Sarah’s headshot is uploaded */
  founderPortrait:
    "Placeholder for Sarah Angelo professional headshot — currently showing The Better Man Project compass logo",
  brandLogoNav: "The Better Man Project",
} as const;

function getSameAsLinks() {
  return socialLinks
    .map((link) => link.href)
    .filter(
      (href) =>
        !href.endsWith("instagram.com") &&
        !href.endsWith("linkedin.com") &&
        !href.endsWith("tiktok.com") &&
        !href.endsWith("x.com") &&
        !href.endsWith("twitter.com")
    );
}

export function buildJsonLdGraph() {
  const orgId = `${siteConfig.url}/#organization`;
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const sameAs = getSameAsLinks();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": orgId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        image: `${siteConfig.url}/images/logo-full.png`,
        logo: `${siteConfig.url}/images/logo.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        slogan: siteConfig.motto,
        priceRange: "$$",
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "South Florida",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        serviceType: [
          "Personal development coaching",
          "Men's life coaching",
          "Confidence coaching",
          "Relationship coaching",
          "Style and image coaching",
        ],
        founder: { "@id": personId },
        employee: { "@id": personId },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.founder,
        jobTitle: "Personal Development Coach and Mentor",
        description:
          "Founder of The Better Man Project. Female perspective mentor for men focused on confidence, relationships, communication, and personal style. Based in South Florida; virtual coaching worldwide.",
        url: `${siteConfig.url}/about`,
        worksFor: { "@id": orgId },
        knowsAbout: [
          "Personal development coaching",
          "Executive mentoring",
          "Communication",
          "Personal style",
          "Luxury hospitality leadership",
        ],
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
    ],
  };
}
