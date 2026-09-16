import { defineCollection, z } from 'astro:content';

const projectCategories = [
  'AIプロダクト開発',
  'AIエージェント基盤構築',
  '競合調査・市場分析レポート',
  'AIエンジニアリング基盤設計',
  'AIスキル・ツール設計',
  'コンテンツ自動化パイプライン',
  'AI-driven ビジネス構築',
] as const;

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(projectCategories),
    date: z.string(),
    techStack: z.array(z.string()),
    description: z.string(),
    clientValue: z.string(),
    highlights: z.array(z.string()),
    outcome: z.string().optional(),
    order: z.number(),
    tier: z.enum(['S', 'A', 'B']),
  }),
});

const participations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    period: z.string(),
    techStack: z.array(z.string()),
    description: z.string(),
    highlights: z.array(z.string()),
    outcome: z.string().optional(),
  }),
});

export const collections = { projects, participations };