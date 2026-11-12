import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cateno-advisory.com/sitemap.xml",
    host: "https://cateno-advisory.com",
  };
}
