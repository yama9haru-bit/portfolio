import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yama9haru-bit.github.io',
  base: '/portfolio',
  output: 'static',
  redirects: {
    '/projects/p5-codex-hackathon': 'https://yama9haru-bit.github.io/portfolio/participations/codex-2026/',
    '/projects/p6-mercari-hackathon': 'https://yama9haru-bit.github.io/portfolio/participations/mercari-hackathon/',
  },
});
