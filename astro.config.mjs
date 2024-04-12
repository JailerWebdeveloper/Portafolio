import { defineConfig } from 'astro/config';
import playformCompress from "@playform/compress";
import astroI18next from "astro-i18next";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), tailwind(),astroI18next()]
});