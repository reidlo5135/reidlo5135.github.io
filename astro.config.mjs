// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://reidlo5135.github.io",
    i18n: {
        locales: ["ko", "en"],
        defaultLocale: "ko",
        // Korean lives at /, English at /en/.
        routing: { prefixDefaultLocale: false },
    },
    markdown: {
        // Diagrams are drawn in the browser (src/components/Mermaid.astro), so their source stays plain.
        syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid", "math"] },
    },
});
