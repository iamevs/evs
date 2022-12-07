import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  base:"./",
  integrations: [react(), svelte()]
});