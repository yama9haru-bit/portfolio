import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    techStack: z.array(z.string()),
    description: z.string(),
    clientValue: z.string(),
    highlights: z.array(z.string()),
    outcome: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };