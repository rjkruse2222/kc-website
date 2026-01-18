import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

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

// Get all article slugs
export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''));
}

// Get all articles (metadata only, no content)
export function getAllArticles(): Article[] {
  const slugs = getAllSlugs();
  const articles = slugs.map(slug => getArticleBySlug(slug, false)).filter((a): a is Article => a !== null);

  // Sort by date (newest first)
  return articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

// Get a single article by slug
export function getArticleBySlug(slug: string, includeContent = true): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    category: data.category || 'Uncategorized',
    date: data.date || new Date().toISOString().split('T')[0],
    readTime: data.readTime || '5 min read',
    excerpt: data.excerpt || '',
    image: data.image || '/images/blog-default.jpg',
    color: data.color || 'from-blue-500 to-blue-600',
    youtubeId: data.youtubeId || undefined,
    content: includeContent ? content : '',
  };
}

// Convert markdown to HTML
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Category colors for UI
export const categoryColors: Record<string, string> = {
  'Tax Strategy': 'bg-violet-100 text-violet-700',
  'Accounting': 'bg-emerald-100 text-emerald-700',
  'Business Advisory': 'bg-amber-100 text-amber-700',
  'Industry News': 'bg-blue-100 text-blue-700',
  'Tax Planning': 'bg-rose-100 text-rose-700',
};

// Get featured article (most recent)
export function getFeaturedArticle(): Article | null {
  const articles = getAllArticles();
  return articles.length > 0 ? articles[0] : null;
}

// Get recent articles (excluding featured)
export function getRecentArticles(count: number = 3): Article[] {
  const articles = getAllArticles();
  return articles.slice(1, count + 1);
}

// Get paginated articles
export function getPaginatedArticles(page: number, perPage: number = 6): {
  articles: Article[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const allArticles = getAllArticles();
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const totalPages = Math.ceil(allArticles.length / perPage);

  return {
    articles: allArticles.slice(start, end),
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
