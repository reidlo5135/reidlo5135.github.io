---
title: PokeSix
summary: 포켓몬 세대별 정주행 보조 도구 — 도감 · 파티 분석 · 아이템 · 세이브 뷰어. Qt 6 데스크톱 앱으로 시작해 멀티 플랫폼 React 로 다시 만들고 있다.
period: 2026-09 ~
role: 혼자 설계 · 구현
kind: personal
stack: [TypeScript, React, Vite, Electron, Capacitor, Vitest, Qt 6, C++20]
order: 2
links:
  - label: GitHub
    href: https://github.com/reidlo5135/PokeSix
---

[//]: # "채울 것: 파티 분석 화면 캡처"

## 무엇인가

포켓몬 시리즈를 세대 순서대로 다시 할 때 옆에 띄워 두는 도구. 도감, 여섯 마리 파티(SixSquad)의 상성 분석, 아이템, 세이브 파일 보기를 한 앱에 담았다. 데이터는 [PokéAPI](https://pokeapi.co/) 를 쓰고, 게임 에셋은 넣지 않는다.

## Qt 6 에서 React 로

처음에는 Qt 6 / C++20 데스크톱 앱으로 v0.5.1 까지 냈다. 같은 앱을 웹 · 데스크톱 · 모바일에서 쓰고 싶어서 TypeScript · React 로 처음부터 다시 만들고 있다. Qt 판은 `qt6-final` 태그와 Releases 에 그대로 있다.

[//]: # "채울 것: 두 스택을 다 써 보고 느낀 차이"
