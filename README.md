# panneau-solaire-loire-atlantique.fr

Site Astro Rank & Rent créé from scratch pour la Loire-Atlantique (44).

- Astro SSG + Cloudflare Pages
- CSS vanilla vert/ambre, fonts Onest + Lato + IBM Plex Mono
- Pages locales : panneau solaire, installateur, prix, devis, batterie par commune
- Formulaire `/api/lead` Cloudflare Pages Function
- Secrets uniquement en variables Cloudflare : `VUD_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`

## Commandes

```bash
npm install
npm test
npm run build
npm run audit:site
```

## Déploiement Cloudflare Pages

Build command: `npm run build`
Output directory: `dist/client`
Repository: `baguettecroissant/panneau-solaire-loire-atlantique.fr`
