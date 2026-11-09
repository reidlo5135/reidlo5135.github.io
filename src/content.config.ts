import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per project and language: src/content/projects/<lang>/<slug>.md
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        period: z.string(),
        role: z.string(),
        kind: z.enum(["personal", "work"]),
        stack: z.array(z.string()),
        order: z.number(),
        links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
