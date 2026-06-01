import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UNHAS MUN 2026",
    short_name: "UNHAS MUN",
    description:
      "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#8b1616",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
