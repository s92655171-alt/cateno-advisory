import type { MetadataRoute } from "next";

const siteUrl = "https://cateno-advisory.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl + "/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: siteUrl + "/business-consulting/",
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: siteUrl + "/business-consulting/",
          de: siteUrl + "/de/unternehmensberatung/",
        },
      },
    },
    {
      url: siteUrl + "/de/unternehmensberatung/",
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: siteUrl + "/business-consulting/",
          de: siteUrl + "/de/unternehmensberatung/",
        },
      },
    },
  ];
}
