export type Lang = "ko" | "en";

export const LANGS: readonly Lang[] = ["ko", "en"];

export const SITE = {
    name: "jmkang",
    github: "https://github.com/reidlo5135",
} as const;

interface Strings {
    readonly title: string;
    readonly tagline: string;
    readonly intro: string;
    readonly projects: string;
    readonly about: string;
    readonly aboutBody: readonly string[];
    readonly skills: string;
    readonly contact: string;
    readonly personal: string;
    readonly work: string;
    readonly role: string;
    readonly period: string;
    readonly stack: string;
    readonly back: string;
    readonly otherLang: string;
}

export const STRINGS: Record<Lang, Strings> = {
    ko: {
        title: "jmkang — 로보틱스 툴링 엔지니어",
        tagline: "로봇 소프트웨어의 사용자 접점을 만듭니다",
        intro: "ROS 2 로봇과 그 로봇을 다루는 사람 사이 — 엔지니어링 도구, 관제 화면, 원격 조종, 그리고 그 뒤의 서버까지 직접 설계하고 만듭니다.",
        projects: "프로젝트",
        about: "소개",
        aboutBody: [
            "ROS 2(rclcpp · rclpy)로 로봇 쪽을 다루고, 그 위에서 사람이 쓰는 화면과 서버를 만듭니다.",
            "화면은 사실만 말하고, 손이 가는 곳은 손이 기억하는 대로 움직여야 한다고 생각합니다.",
        ],
        skills: "다루는 것",
        contact: "연락",
        personal: "개인",
        work: "업무",
        role: "역할",
        period: "기간",
        stack: "기술",
        back: "← 프로젝트",
        otherLang: "English",
    },
    en: {
        title: "jmkang — Robotics Tooling Engineer",
        tagline: "I build where people meet robot software",
        intro: "Between ROS 2 robots and the people who run them — engineering tools, fleet dashboards, teleoperation, and the servers behind them, designed and built end to end.",
        projects: "Projects",
        about: "About",
        aboutBody: [
            "I work on the robot side with ROS 2 (rclcpp · rclpy) and build the screens and servers people use on top of it.",
            "A screen should state facts, and a control should move the way the hand expects.",
        ],
        skills: "Tools",
        contact: "Contact",
        personal: "Personal",
        work: "Work",
        role: "Role",
        period: "Period",
        stack: "Stack",
        back: "← Projects",
        otherLang: "한국어",
    },
};

export const SKILLS: readonly string[] = [
    "ROS 2 (rclcpp · rclpy)",
    "TypeScript",
    "React",
    "Three.js",
    "Electron",
    "NestJS",
    "Spring Boot",
    "PostgreSQL",
    "Qt 6 / C++",
];

/** The home page of a language. */
export function homePath(lang: Lang): string {
    return lang === "ko" ? "/" : "/en/";
}

/** A project's page in a language. */
export function projectPath(lang: Lang, slug: string): string {
    return `${homePath(lang)}projects/${slug}/`;
}
