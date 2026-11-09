export type Lang = "ko" | "en";

export const LANGS: readonly Lang[] = ["ko", "en"];

interface Strings {
    readonly title: string;
    readonly greeting: string;
    readonly about: string;
    readonly strengths: string;
    readonly career: string;
    readonly education: string;
    readonly projects: string;
    readonly repos: string;
    readonly skills: string;
    readonly personal: string;
    readonly work: string;
    readonly role: string;
    readonly period: string;
    readonly stack: string;
    readonly back: string;
    readonly otherLang: string;
    readonly menu: string;
    readonly statRepos: string;
    readonly statRos: string;
    readonly statFeatured: string;
    readonly statSince: string;
}

export const STRINGS: Record<Lang, Strings> = {
    ko: {
        title: "강준모 — 로보틱스 툴링 엔지니어",
        greeting: "로봇 소프트웨어의 사용자 접점을 만듭니다",
        about: "소개",
        strengths: "하는 일",
        career: "경력",
        education: "학력",
        projects: "프로젝트",
        repos: "저장소",
        skills: "기술",
        personal: "개인",
        work: "업무",
        role: "역할",
        period: "기간",
        stack: "기술",
        back: "← 프로젝트",
        otherLang: "English",
        menu: "메뉴",
        statRepos: "공개 저장소",
        statRos: "ROS 2 패키지 · 라이브러리",
        statFeatured: "대표 프로젝트",
        statSince: "ROS 2 를 다룬 해부터",
    },
    en: {
        title: "Junmo Kang — Robotics Tooling Engineer",
        greeting: "I build where people meet robot software",
        about: "About",
        strengths: "What I do",
        career: "Experience",
        education: "Education",
        projects: "Projects",
        repos: "Repositories",
        skills: "Skills",
        personal: "Personal",
        work: "Work",
        role: "Role",
        period: "Period",
        stack: "Stack",
        back: "← Projects",
        otherLang: "한국어",
        menu: "Menu",
        statRepos: "Public repositories",
        statRos: "ROS 2 packages · libraries",
        statFeatured: "Featured projects",
        statSince: "Working with ROS 2 since",
    },
};

/** The home page of a language. */
export function homePath(lang: Lang): string {
    return lang === "ko" ? "/" : "/en/";
}

/** A project's page in a language. */
export function projectPath(lang: Lang, slug: string): string {
    return `${homePath(lang)}projects/${slug}/`;
}
