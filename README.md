# panneau-solaire-loire-atlantique.fr

Site Astro Rank & Rent créé **from scratch** pour la Loire-Atlantique (44).

## Fonctionnalités

- Astro 6 SSG + Cloudflare Pages
- Design premium vert nantais / ambre, responsive, CSS vanilla
- Photographies locales/solaires et illustrations de données
- 79 communes, avec deux familles de pages :
  - `/panneau-solaire-[commune]/`
  - `/installateur-solaire-[commune]/`
- Plus de 1 500 mots rendus par page locale, 5 blocs locaux et maillage de proximité
- 8 guides éditoriaux complets avec photographie, sommaire et FAQ
- Simulateurs production, ROI, PAC + solaire et carte du 44
- Formulaire multi-étapes orienté conversion
- Cloudflare Pages Function `/api/lead`
- Dual-write serveur Supabase + ViteUnDevis
- Validation du code postal `44xxx`, anti-spam, contrôle d’origine et idempotence

## Commandes

```bash
npm install
npm run data:cities
npm run data:content
npm test
npm run build
npm run audit:site
npm run dev
```

## Variables Cloudflare

Les secrets ne sont jamais stockés dans le dépôt :

```text
VUD_API_KEY
SUPABASE_URL
SUPABASE_ANON_KEY
ALLOW_LOCAL_ORIGIN
```

## Déploiement Cloudflare Pages

```text
Build command: npm run build
Output directory: dist/client
Node: 22+
Repository: baguettecroissant/panneau-solaire-loire-atlantique.fr
```

Le sitemap est généré à `/sitemap-index.xml` et `robots.txt` référence le domaine canonique.
