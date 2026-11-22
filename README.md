# 김정현 포트폴리오

지금까지 한 프로젝트를 기록하는 개인 홈페이지입니다. [Astro](https://astro.build)로 만들었고 GitHub Pages로 배포합니다.

주소: https://novoodi.github.io

## 자주 하는 일

### 새 프로젝트 추가하기

1. `src/content/projects/` 안의 글 하나를 복사해 이름을 바꿉니다. 파일 이름이 주소가 됩니다. (`my-app.md` → `/projects/my-app/`)
2. 맨 위 `---` 사이의 정보(제목, 요약, 기간, 기술 등)와 본문을 고칩니다.
3. 저장소에 올리면(`git push`) 몇 분 뒤 사이트에 반영됩니다.

스크린샷을 넣으려면 `src/assets/projects/<프로젝트이름>/`에 이미지를 두고, 글 맨 위에 이렇게 적습니다.

```yaml
cover: ../../assets/projects/my-app/main.png      # 카드 대표 이미지
gallery:
  - src: ../../assets/projects/my-app/shot1.png   # 상세 페이지 스크린샷
    caption: 화면 설명
```

첫 화면 "대표 프로젝트"에 올리려면 `featured: true`, 순서는 `order`(작은 숫자가 먼저)로 정합니다.
쓸 수 있는 항목 전체는 [src/content.config.ts](src/content.config.ts)에 설명과 함께 있습니다.

### 블로그 글 쓰기

`src/content/blog/`에 마크다운 파일을 만듭니다.

```markdown
---
title: 글 제목
date: 2026-11-22
summary: 목록에 보일 한 줄 요약
tags: [기록]
---

본문
```

아직 공개하고 싶지 않은 글은 `draft: true`를 넣으면 목록에 나오지 않습니다.

### 자기소개, 이력서 고치기

[src/data/profile.ts](src/data/profile.ts) 파일 하나만 고치면 소개와 이력서 페이지에 함께 반영됩니다.

### 색, 글꼴 바꾸기

[src/styles/global.css](src/styles/global.css) 맨 위의 변수(`--accent` 등)를 바꾸면 사이트 전체에 적용됩니다.

## 내 컴퓨터에서 보기

```sh
npm install      # 처음 한 번
npm run dev      # http://localhost:4321 에서 미리 보기 (저장하면 바로 반영)
npm run build    # 배포용으로 빌드해 오류가 없는지 확인
```

Node.js 22.12 이상이 필요합니다.

## 배포

`main` 브랜치에 push하면 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)이 빌드해서 GitHub Pages에 올립니다.
진행 상황은 저장소의 Actions 탭에서 볼 수 있습니다.

## 올리기 전에 확인할 것

이 저장소는 공개 저장소입니다. 아래 내용은 넣지 않습니다.

- 전화번호, 이메일, 주소 같은 개인 정보
- API 키, `.env`, 서명 키 파일
- 다른 사람의 이름이나 대화가 보이는 스크린샷
- 공개 허락을 받지 않은 팀·기관 자료

## 폴더 구조

```text
src/
├── content/
│   ├── projects/    프로젝트 글 (파일 하나 = 프로젝트 하나)
│   └── blog/        블로그 글
├── assets/projects/ 프로젝트 이미지
├── data/profile.ts  자기소개·이력서 정보
├── pages/           페이지 (홈, 프로젝트, 블로그, 소개, 이력서)
├── layouts/         공통 틀 (머리말, 꼬리말)
├── components/      카드, 태그 같은 부품
└── styles/          색과 글꼴
```
