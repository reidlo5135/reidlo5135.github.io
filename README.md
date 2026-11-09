# reidlo5135.github.io

jmkang 의 포트폴리오 — https://reidlo5135.github.io (한국어 `/`, English `/en/`)

Astro 7 정적 사이트. `main` 에 push 하면 GitHub Actions 가 빌드해 GitHub Pages 로 올린다(`.github/workflows/deploy.yml`).

## 쓰기

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # 타입 검사
npm run build    # dist/
```

- 프로젝트 하나 = 언어마다 Markdown 하나: `src/content/projects/ko/<slug>.md`, `src/content/projects/en/<slug>.md`. 앞머리 칸은 `src/content.config.ts`.
- `draft: true` 면 빌드에 나오지 않는다. `order` 가 작을수록 앞에 선다.
- 소개 · 문구 · 기술 목록은 `src/i18n.ts`.
- 그림은 `public/` 에 두고 `/파일이름` 으로 건다.
