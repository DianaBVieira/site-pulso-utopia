import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://pulso-utopia.utopiadesenvolviment.chatgpt.site", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
