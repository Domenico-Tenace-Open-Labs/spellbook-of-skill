// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://spellbook-of-skill.netlify.app/",
  integrations: [
    starlight({
      title: "SpellBook of Skill",
      description:
        "A curated collection of development skills, tutorials and guides to level up your craft — from coding fundamentals to advanced techniques.",
      components: {
        Head: "./src/components/StarlightHead.astro",
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Domenico-Tenace-Open-Labs/spellbook-of-skill",
        },
      ],
      favicon: "/favicon.ico",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "description",
            content:
              "A curated collection of development skills, tutorials and guides to level up your craft — from coding fundamentals to advanced techniques.",
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:type", content: "website" },
        },
        {
          tag: "meta",
          attrs: { property: "og:site_name", content: "SpellBook of Skill" },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "SpellBook of Skill | Developer Skills & Guides",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content:
              "A curated collection of development skills, tutorials and guides to level up your craft.",
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:image", content: "/og-image.svg" },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:card", content: "summary_large_image" },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: "SpellBook of Skill | Developer Skills & Guides",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:description",
            content:
              "A curated collection of development skills, tutorials and guides to level up your craft.",
          },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:image", content: "/og-image.svg" },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content:
              "developer skills, coding tutorials, programming guides, web development, software engineering",
          },
        },
      ],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
