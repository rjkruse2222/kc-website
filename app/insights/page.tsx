import { getAllArticles, categoryColors, type Article } from '@/lib/articles';
import InsightsClient from './InsightsClient';

export const metadata = {
  title: 'Insights & Resources | Kruse & Crawford CPAs',
  description: 'Tax strategies and business insights to help you make smarter financial decisions. Updated regularly with the latest strategies and regulatory changes.',
};

export default function InsightsPage() {
  const articles = getAllArticles();

  return <InsightsClient articles={articles} categoryColors={categoryColors} />;
}
