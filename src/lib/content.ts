import { getCollection } from 'astro:content';

/** order가 작은 프로젝트부터 */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** 최신 글부터. draft: true인 글은 뺍니다 */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const dateFormat = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Seoul',
});

/** 2026. 11. 22. 형식 */
export function formatDate(date: Date) {
  return dateFormat.format(date);
}
