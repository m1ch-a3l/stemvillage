import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  getProgrammes,
  getStemAreas,
  getEvents,
  getBlogPosts,
} from "@/lib/content";

const staticRoutes = [
  "",
  "/about",
  "/programmes",
  "/stem-areas",
  "/workshops",
  "/schools-partnerships",
  "/events",
  "/impact",
  "/blog",
  "/resources",
  "/contact",
  "/team",
  "/mentors",
  "/partners",
  "/faqs",
  "/careers",
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

  const eventEntries: MetadataRoute.Sitemap = getEvents().map((e) => ({
    url: `${siteConfig.url}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const blogEntries: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...programmeEntries, ...stemAreaEntries, ...eventEntries, ...blogEntries];
}
