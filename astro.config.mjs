import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://wearesorcol.com",
  integrations: [
    starlight({
      favicon: "./src/assets/hand-base.png",
      defaultLocale: "es",
      title: "Sorcol's doc",
      logo: {
        src: "./src/assets/hand-base.png",
        alt: "Sorcol's brand",
      },
      social: {
        github: "https://github.com/Sorcol-App/web",
        instagram: "https://www.instagram.com/wearesorcol",
        facebook: "https://www.facebook.com/wearesorcol",
      },
      editLink: {
        baseUrl:
          "https://github.com/Sorcol-App/docs/tree/main/src/content/docs",
      },
      sidebar: [
        {
          label: "Bienvenida",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Onboarding", slug: "bienvenida/onboarding" },
          ],
        },
        {
          label: "Requerimientos",
          // autogenerate: { directory: "platforms" },
          items: [
            {
              label: "Herramientas y tecnologías",
              slug: "requerimientos/tools",
            },
            {
              label: "Datos sensibles",
              slug: "requerimientos/datos-sensibles",
            },
          ],
        },
        {
          label: "Entorno de desarrollo local",
          slug: "local/entorno",
        },
        { label: "Sorcol Platform", link: "https://wearesorcol.com" },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@assets": "/src/assets",
      },
    },
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
  },
});
