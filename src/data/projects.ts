// ✅ แนะนำให้สร้างไฟล์ใหม่เพื่อเก็บข้อมูลโปรเจกต์ เช่น:
// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Skill Mapping System',
    description:
      'Dashboard for curriculum/skills tracking using Quasar + Prisma.',
    image: '/assets/img/projects/skillmapping.png',
    technologies: ['Quasar', 'Prisma', 'NestJS'],
  },
  {
    title: 'Cooperative Training',
    description:
      'OCR-powered certificate hours, secure auto-deploy via GitHub Runner & Cloudflare Tunnel.',
    image: '/assets/img/projects/cooperative.png',
    technologies: ['Vue', 'FastAPI', 'MongoDB'],
    link: 'https://cooperative.sahapham.uk',
  },
  {
    title: 'Goodsuit Blog',
    description: 'Headless CMS storefront using WordPress + Nuxt + GraphQL.',
    image: '/assets/img/projects/goodsuitbrand.png',
    technologies: ['WordPress', 'GraphQL', 'Nuxt'],
    link: 'https://www.goodsuitbrand.com/blogs',
  },
  {
    title: 'RTG Quotation System',
    description:
      'Fullstack app with PDF quotes, secured via Cloudflare Zero Trust.',
    image: '/assets/img/projects/rtg.jpg',
    technologies: ['Nuxt', 'NestJS', 'Cloudflare'],
  },
];
