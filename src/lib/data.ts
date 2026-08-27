import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import { url } from './base';

export type Article = CollectionEntry<'articles'>;

export async function getArticles(locale: Locale): Promise<Article[]> {
  const all = await getCollection('articles', (entry) => entry.data.locale === locale);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function articleHref(locale: Locale, path: string): string {
  return url(locale === 'zh' ? `/zh/articles/${path}/` : `/articles/${path}/`);
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
