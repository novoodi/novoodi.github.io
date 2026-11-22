import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 프로젝트: src/content/projects/*.md
 * 파일 하나가 프로젝트 하나입니다. 파일 이름이 주소가 됩니다. (moimi.md → /projects/moimi)
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** 카드와 상세 상단에 나오는 한두 문장 설명 */
      summary: z.string(),
      /** 예: "2026.03 ~ 2026.11" */
      period: z.string(),
      /** 예: "개인 프로젝트", "팀 프로젝트", "연구" */
      kind: z.string(),
      /** 내가 맡은 일 */
      role: z.string(),
      stack: z.array(z.string()),
      /** 수상·게재·출품 등. 없으면 생략 */
      award: z.string().optional(),
      /** 상세 상단에 크게 보여 줄 핵심 수치 (최대 4개 권장) */
      highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      /** 카드 대표 이미지. 없으면 생략 */
      cover: image().optional(),
      /** 상세 페이지 스크린샷 */
      gallery: z.array(z.object({ src: image(), caption: z.string() })).default([]),
      github: z.url().optional(),
      demo: z.url().optional(),
      /** true면 첫 화면 "대표 프로젝트"에 나옵니다 */
      featured: z.boolean().default(false),
      /** 작은 숫자가 먼저 나옵니다 */
      order: z.number().default(100),
    }),
});

/** 블로그: src/content/blog/*.md */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    /** true면 목록에 나오지 않습니다 */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
