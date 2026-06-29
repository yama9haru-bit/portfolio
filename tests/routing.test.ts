import { describe, it, expect } from 'vitest';
import { projects, type Project } from '../src/data/projects';
import { categorySlugs, categories, slugToCategory } from '../src/data/categories';

describe('category slugs', () => {
  it('should have exactly 7 category slugs', () => {
    expect(Object.keys(categorySlugs)).toHaveLength(7);
  });

  it('all category slugs should be non-empty URL-safe strings', () => {
    for (const [category, slug] of Object.entries(categorySlugs)) {
      expect(typeof slug).toBe('string');
      expect(slug.length).toBeGreaterThan(0);
      // URL-safe: lowercase letters, numbers, hyphens only
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('all category slugs should be unique', () => {
    const slugs = Object.values(categorySlugs);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all categories in categorySlugs should match the 7 defined categories', () => {
    for (const category of Object.keys(categorySlugs)) {
      expect(categories).toContain(category);
    }
  });

  it('slugToCategory should reverse-map all slugs back to categories', () => {
    for (const [category, slug] of Object.entries(categorySlugs)) {
      expect(slugToCategory[slug]).toBe(category);
    }
  });
});

describe('project routing', () => {
  it('should have 24 projects', () => {
    expect(projects).toHaveLength(24);
  });

  it('all project IDs should be unique', () => {
    const ids = projects.map((p: Project) => p.id.toLowerCase());
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all project IDs should be non-empty', () => {
    for (const p of projects) {
      expect(p.id.length).toBeGreaterThan(0);
    }
  });

  it('all project categories should have a corresponding slug', () => {
    for (const p of projects) {
      expect(categorySlugs).toHaveProperty(p.category);
    }
  });
});