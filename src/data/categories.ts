export const categories = [
  'AIプロダクト開発',
  'AIエージェント基盤構築',
  '競合調査・市場分析レポート',
  'AIエンジニアリング基盤設計',
  'AIスキル・ツール設計',
  'コンテンツ自動化パイプライン',
  'AI-driven ビジネス構築',
] as const;

export const categorySlugs: Record<string, string> = {
  'AIプロダクト開発': 'ai-product',
  'AIエージェント基盤構築': 'ai-agent-infra',
  '競合調査・市場分析レポート': 'market-research',
  'AIエンジニアリング基盤設計': 'ai-engineering',
  'AIスキル・ツール設計': 'ai-skills',
  'コンテンツ自動化パイプライン': 'content-automation',
  'AI-driven ビジネス構築': 'ai-business',
};

export const slugToCategory: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugs).map(([category, slug]) => [slug, category]),
);

export function getCategorySlug(category: string): string {
  return categorySlugs[category] ?? category;
}

export function getCategoryFromSlug(slug: string): string | undefined {
  return slugToCategory[slug];
}