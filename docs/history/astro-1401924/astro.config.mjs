import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
export default defineConfig({site:'https://jahnoah.com',output:'static',redirects:{'/Yoga':'/yoga/','/Arts':'/art/','/Tech':'/tech/'},integrations:[react()],vite:{plugins:[tailwind()]}});
