import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getLearningTribes,
} from "@/lib/content";

const staticRoutes = [
  "",
  "/about",
  "/programmes",
  "/workshops",
  "/schools-partnerships",
  "/contact",
  "/team",
  "/mentors",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const programmeEntries: MetadataRoute.Sitemap = getLearningTribes().map((t) => ({
    url: `${siteConfig.url}/programmes/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...programmeEntries];
}
