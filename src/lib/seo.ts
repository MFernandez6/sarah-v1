import { socialLinks, siteConfig } from "@/lib/constants";

export const founderPortrait = {
  src: "/images/sarah-angelo.jpg",
  width: 543,
  height: 1024,
  /** Square crop for Gmail / Google Workspace / circular avatars */
  profileSrc: "/images/sarah-angelo-profile.jpg",
  profileSize: 800,
} as const;

/**
 * Centralized image alt text for accessibility and SEO.
 */
export const imageAlts = {
  logoMark:
    "The Better Man Project logo: a gold compass rose emblem on a navy background",
  logoFull:
    "The Better Man Project brand lockup — gold compass logo above the name and tagline Guidance for Modern Men on a navy textured background",
  founderPortrait:
    "Sarah Angelo, founder of The Better Man Project, in a white blazer with a warm, confident smile",
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
        image: `${siteConfig.url}${founderPortrait.profileSrc}`,
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
