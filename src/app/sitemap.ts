import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getProgrammes,
  getStemAreas,
} from "@/lib/content";

const staticRoutes = [
  "",
  "/about",
  "/programmes",
  "/stem-areas",
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

  const programmeEntries: MetadataRoute.Sitemap = getProgrammes().map((p) => ({
    url: `${siteConfig.url}/programmes/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const stemAreaEntries: MetadataRoute.Sitemap = getStemAreas().map((a) => ({
    url: `${siteConfig.url}/stem-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...programmeEntries, ...stemAreaEntries];
}
