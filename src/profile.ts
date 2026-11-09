import type { Lang } from "./i18n";

/** Text in both languages. */
export type Localized = Readonly<Record<Lang, string>>;

export interface Link {
    readonly label: string;
    readonly href: string;
    readonly icon: "github" | "linkedin" | "blog" | "mail";
}

export interface Career {
    readonly company: Localized;
    readonly role: Localized;
    readonly period: string;
    readonly points: readonly Localized[];
}

export interface Education {
    readonly school: Localized;
    readonly degree: Localized;
    readonly period: string;
}

export interface Strength {
    readonly icon: "cpu" | "layout" | "server";
    readonly title: Localized;
    readonly body: Localized;
}

export interface SkillGroup {
    readonly title: Localized;
    readonly items: readonly string[];
}

export const PROFILE = {
    name: { ko: "강준모", en: "Junmo Kang" } satisfies Localized,
    handle: "reidlo5135",
    avatar: "https://avatars.githubusercontent.com/u/87562370?v=4",
    role: { ko: "로보틱스 툴링 엔지니어", en: "Robotics Tooling Engineer" } satisfies Localized,
    company: { ko: "MX On Co., Ltd.", en: "MX On Co., Ltd." } satisfies Localized,
    location: { ko: "경기 안양", en: "Anyang, Korea" } satisfies Localized,
    bio: {
        ko: "ROS 2 로봇과 그 로봇을 다루는 사람 사이의 소프트웨어를 만듭니다.",
        en: "I build the software between ROS 2 robots and the people who run them.",
    } satisfies Localized,
};

export const LINKS: readonly Link[] = [
    { label: "GitHub", href: "https://github.com/reidlo5135", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/reidlo5135cr", icon: "linkedin" },
    { label: "Blog", href: "https://reidlo-sw-develop.tistory.com/", icon: "blog" },
];

export const INTRO: Readonly<Record<Lang, readonly string[]>> = {
    ko: [
        "ROS 2(rclcpp · rclpy)로 로봇 쪽을 다루고, 그 위에서 사람이 쓰는 엔지니어링 도구 · 관제 화면 · 원격 조종과 그 뒤의 서버를 설계하고 만듭니다.",
        "화면은 사실만 말하고, 손이 가는 곳은 손이 기억하는 대로 움직여야 한다고 생각합니다. 설계 판단은 다이어그램과 문서로 남겨 같이 일하는 사람이 따라올 수 있게 합니다.",
    ],
    en: [
        "I work on the robot side with ROS 2 (rclcpp · rclpy) and design and build what people use on top of it: engineering tools, fleet dashboards, teleoperation, and the servers behind them.",
        "A screen should state facts, and a control should move the way the hand expects. I leave design decisions in diagrams and documents so the people I work with can follow them.",
    ],
};

export const STRENGTHS: readonly Strength[] = [
    {
        icon: "cpu",
        title: { ko: "로봇 쪽", en: "Robot side" },
        body: {
            ko: "ROS 2 노드 · 브리지 · 하드웨어 기동, Nav2 · SLAM 연동, MQTT · WebSocket 으로 로봇을 바깥에 여는 일",
            en: "ROS 2 nodes, bridges and hardware bringup, Nav2 and SLAM integration, opening robots to the outside over MQTT and WebSocket",
        },
    },
    {
        icon: "layout",
        title: { ko: "화면", en: "Screens" },
        body: {
            ko: "IDE 형 엔지니어링 도구, 관제 · 원격 조종 화면, 2D 지도 · 3D 월드 렌더링, 웹 · 데스크톱 · 모바일 한 소스",
            en: "IDE-style engineering tools, fleet and teleoperation screens, 2D maps and 3D worlds, one codebase for web, desktop and mobile",
        },
    },
    {
        icon: "server",
        title: { ko: "서버", en: "Servers" },
        body: {
            ko: "NestJS · Spring Boot 도메인 설계, 오류 카탈로그 · 트랜잭션 · 계약(OpenAPI), 로봇 데이터 영속화",
            en: "Domain design in NestJS and Spring Boot, error catalogs, transactions and OpenAPI contracts, persisting robot data",
        },
    },
];

/** Filled in from jmkang; an empty list hides the section. */
export const CAREER: readonly Career[] = [];

/** Filled in from jmkang; an empty list hides the section. */
export const EDUCATION: readonly Education[] = [];

export const SKILL_GROUPS: readonly SkillGroup[] = [
    { title: { ko: "로봇", en: "Robotics" }, items: ["ROS 2 (rclcpp · rclpy)", "Nav2", "SLAM", "MQTT", "Docker"] },
    { title: { ko: "화면", en: "Front end" }, items: ["TypeScript", "React", "Three.js", "Electron", "Capacitor", "Qt 6"] },
    { title: { ko: "서버", en: "Back end" }, items: ["NestJS", "Spring Boot", "TypeORM", "PostgreSQL"] },
    { title: { ko: "언어", en: "Languages" }, items: ["C++", "C", "Python", "TypeScript", "Java", "Kotlin"] },
];
