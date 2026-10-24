import type { MetadataRoute } from "next";
import { cities } from "./data/cities";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...cities.map((c) => ({
      url: `${SITE_URL}/debouchage-${c.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["95", "93", "94", "75"].map((d) => ({
      url: `${SITE_URL}/intervention/${d}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
