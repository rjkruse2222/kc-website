import { createReader } from '@keystatic/core/reader';
import config from '../keystatic.config';

export const reader = createReader(process.cwd(), config);

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  color: string;
  youtubeId?: string;
  content: string;
}

// Helper to format date from YYYY-MM-DD to Month DD, YYYY
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Get all articles from Keystatic
export async function getArticles(): Promise<Article[]> {
  const articleSlugs = await reader.collections.articles.list();

  const articles = await Promise.all(
    articleSlugs.map(async (slug) => {
      const article = await reader.collections.articles.read(slug);
      if (!article) return null;

      return {
        slug,
        title: article.title.name,
        category: article.category,
        date: formatDate(article.date || new Date().toISOString().split('T')[0]),
        readTime: article.readTime,
        excerpt: article.excerpt,
        image: article.image || '/images/blog-default.jpg',
        color: article.color,
        youtubeId: article.youtubeId || undefined,
        content: '', // Content will be loaded separately when needed
      } as Article;
    })
  );

  // Filter out nulls and sort by date (newest first)
  return articles
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = await reader.collections.articles.read(slug);
  if (!article) return null;

  // Get the rendered content
  const content = await article.content();

  return {
    slug,
    title: article.title.name,
    category: article.category,
    date: formatDate(article.date || new Date().toISOString().split('T')[0]),
    readTime: article.readTime,
    excerpt: article.excerpt,
    image: article.image || '/images/blog-default.jpg',
    color: article.color,
    youtubeId: article.youtubeId || undefined,
    content: content ? JSON.stringify(content) : '',
  };
}

// Get all article slugs (for static generation)
export async function getAllSlugs(): Promise<string[]> {
  return reader.collections.articles.list();
}
