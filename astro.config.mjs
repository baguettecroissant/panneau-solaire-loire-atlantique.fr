import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site:'https://panneau-solaire-loire-atlantique.fr', output:'static', adapter: cloudflare({ imageService:'passthrough' }), integrations:[sitemap({ changefreq:'weekly', filter:(page)=>!page.includes('/404/') })], build:{format:'directory',inlineStylesheets:'always'} });
