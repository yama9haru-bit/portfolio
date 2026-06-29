import { describe, it, expect } from 'vitest';
import { projects, type Project } from '../src/data/projects';

describe('projects data structure', () => {
  it('should export an array of 24 projects', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects).toHaveLength(24);
  });

  it('each project should have all required fields with correct types', () => {
    for (const project of projects) {
      expect(typeof project.id).toBe('string');
      expect(project.id.length).toBeGreaterThan(0);

      expect(typeof project.title).toBe('string');
      expect(project.title.length).toBeGreaterThan(0);

      expect(typeof project.category).toBe('string');
      expect(project.category.length).toBeGreaterThan(0);

      expect(typeof project.description).toBe('string');
      expect(project.description.length).toBeGreaterThan(0);

      expect(typeof project.clientValue).toBe('string');
      expect(project.clientValue.length).toBeGreaterThan(0);

      expect(Array.isArray(project.techStack)).toBe(true);
      expect(project.techStack.length).toBeGreaterThan(0);

      expect(typeof project.date).toBe('string');
      expect(project.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);

      expect(Array.isArray(project.highlights)).toBe(true);
      expect(project.highlights.length).toBeGreaterThan(0);
    }
  });

  it('all project IDs should be unique', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all categories should match the 7 defined categories', () => {
    const validCategories = [
      'AIプロダクト開発',
      'AIエージェント基盤構築',
      '競合調査・市場分析レポート',
      'AIエンジニアリング基盤設計',
      'AIスキル・ツール設計',
      'コンテンツ自動化パイプライン',
      'AI-driven ビジネス構築',
    ];

    for (const project of projects) {
      expect(validCategories).toContain(project.category);
    }
  });

  it('all 7 categories should be represented', () => {
    const categories = new Set(projects.map((p) => p.category));
    expect(categories.size).toBe(7);
  });

  it('techStack items should be non-empty strings', () => {
    for (const project of projects) {
      for (const tech of project.techStack) {
        expect(typeof tech).toBe('string');
        expect(tech.length).toBeGreaterThan(0);
      }
    }
  });

  it('highlight items should be non-empty strings', () => {
    for (const project of projects) {
      for (const highlight of project.highlights) {
        expect(typeof highlight).toBe('string');
        expect(highlight.length).toBeGreaterThan(0);
      }
    }
  });

  it('optional fields should be correct types when present', () => {
    for (const project of projects) {
      if (project.sourcePath !== undefined) {
        expect(typeof project.sourcePath).toBe('string');
      }
      if (project.externalUrl !== undefined) {
        expect(typeof project.externalUrl).toBe('string');
      }
      if (project.outcome !== undefined) {
        expect(typeof project.outcome).toBe('string');
        expect(project.outcome.length).toBeGreaterThan(0);
      }
    }
  });
});