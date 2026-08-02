import { buildJsonLdGraph } from "@/lib/seo";

export function JsonLd() {
  const data = buildJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
