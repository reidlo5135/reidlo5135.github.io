import type { Lang } from "./i18n";
import type { Localized } from "./profile";
import data from "./data/repos.json";

export type RepoCategory = "ros2-package" | "ros-bridge-library" | "visualization" | "system-platform" | "app" | "study";

/** One public GitHub repository, as surveyed from its README and code. */
export interface Repo {
    readonly name: string;
    readonly created: string;
    readonly updated: string;
    readonly language: string;
    readonly category: RepoCategory;
    readonly stack: readonly string[];
    readonly ko: string;
    readonly en: string;
}

export const REPOS: readonly Repo[] = data as readonly Repo[];

export const CATEGORIES: readonly { readonly key: RepoCategory; readonly title: Localized }[] = [
    { key: "ros2-package", title: { ko: "ROS 2 패키지", en: "ROS 2 packages" } },
    { key: "ros-bridge-library", title: { ko: "브리지 · 클라이언트 라이브러리", en: "Bridges and client libraries" } },
    { key: "visualization", title: { ko: "시각화", en: "Visualization" } },
    { key: "system-platform", title: { ko: "시스템 · 플랫폼", en: "Systems and platforms" } },
    { key: "app", title: { ko: "앱", en: "Apps" } },
    { key: "study", title: { ko: "공부 · 실험", en: "Study and experiments" } },
];

/** A category's repositories, the most recently pushed first. */
export function reposIn(category: RepoCategory): Repo[] {
    return REPOS.filter((repo: Repo) => repo.category === category).sort((a: Repo, b: Repo) =>
        b.updated.localeCompare(a.updated),
    );
}

export function describe(repo: Repo, lang: Lang): string {
    return lang === "ko" ? repo.ko : repo.en;
}

/** The year of the oldest ROS repository: when ROS 2 work started. */
export function rosSince(): string {
    const years: string[] = REPOS.filter(
        (repo: Repo) => repo.category === "ros2-package" || repo.category === "ros-bridge-library",
    ).map((repo: Repo) => repo.created.slice(0, 4));
    return years.length > 0 ? years.sort()[0] : "—";
}
