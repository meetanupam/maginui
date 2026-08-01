import type { MetadataRoute } from "next";
import { components } from "@/config/components";
import { docs } from "@/config/docs";
import { pages } from "@/config/pages";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/components",
    "/playground",
    ...Object.keys(pages).map((x) => `/${x}`),
    ...components.map((x) => `/components/${x.slug}`),
    ...docs.map((x) => `/docs${x.slug ? `/${x.slug}` : ""}`),
  ];
  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/components") ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
