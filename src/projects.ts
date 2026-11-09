import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

import type { Lang } from "./i18n";

type Project = CollectionEntry<"projects">;

/** The entry's file name: "ko/res" → "res". */
export function slugOf(project: Project): string {
    return project.id.split("/").slice(1).join("/");
}

/** Every published page of one language, sub-pages included, in their order. */
export async function pagesIn(lang: Lang): Promise<Project[]> {
    const all: Project[] = await getCollection(
        "projects",
        (project: Project) => project.id.startsWith(`${lang}/`) && !project.data.draft,
    );
    return all.sort((a: Project, b: Project) => a.data.order - b.data.order);
}

/** One language's projects for the home grid: sub-pages stay under their parent. */
export async function projectsIn(lang: Lang): Promise<Project[]> {
    return (await pagesIn(lang)).filter((project: Project) => project.data.parent === undefined);
}

/** A project and its sub-pages, the project first: the tabs on each of their pages. */
export async function familyOf(project: Project, lang: Lang): Promise<Project[]> {
    const root: string = project.data.parent ?? slugOf(project);
    const pages: Project[] = await pagesIn(lang);
    return [
        ...pages.filter((page: Project) => slugOf(page) === root),
        ...pages.filter((page: Project) => page.data.parent === root),
    ];
}
