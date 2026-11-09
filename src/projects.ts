import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

import type { Lang } from "./i18n";

type Project = CollectionEntry<"projects">;

/** The entry's file name: "ko/res" → "res". */
export function slugOf(project: Project): string {
    return project.id.split("/").slice(1).join("/");
}

/** One language's published projects, in their order. */
export async function projectsIn(lang: Lang): Promise<Project[]> {
    const all: Project[] = await getCollection(
        "projects",
        (project: Project) => project.id.startsWith(`${lang}/`) && !project.data.draft,
    );
    return all.sort((a: Project, b: Project) => a.data.order - b.data.order);
}
