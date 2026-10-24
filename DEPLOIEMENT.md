# Kidebouchetou.com – mise en ligne

Site Next.js 14 (export statique) hébergé sur **Firebase Hosting** (projet `kidebouchetou`).

## Déployer une nouvelle version

```bash
cd nextjs-site
npm ci            # 1re fois, ou après un changement de package-lock.json
npm run build     # génère le dossier dist/
npx firebase login   # 1re fois seulement
npx firebase deploy --only hosting
```

Puis vérifier dans un navigateur en navigation privée :

- https://kidebouchetou.com/ (accueil)
- https://kidebouchetou.com/debouchage-sarcelles/ (page ville)
- https://kidebouchetou.com/sitemap.xml et https://kidebouchetou.com/robots.txt
- https://kidebouchetou.com/une-page-qui-n-existe-pas/ → page 404 (et plus l'accueil)

## Domaines (console Firebase → Hosting → Domaines personnalisés)

Le domaine de référence est **kidebouchetou.com** (sans www) : c'est l'adresse des balises
canonical, du sitemap et de la fiche Google. `www.kidebouchetou.com` doit être déclaré en
**redirection** vers `kidebouchetou.com` (type « Redirect » lors de l'ajout du domaine), pas comme
second site. HTTPS est automatique.

## Après la mise en ligne (une fois)

1. Google Search Console : ajouter la propriété **Domaine** `kidebouchetou.com`, soumettre `sitemap.xml`.
2. Fiche Google : vérifier que le site web est `https://kidebouchetou.com/`.
3. Hébergement du .fr (Plesk) : déposer le `.htaccess` fourni dans `KIDEB/a-deployer-fr/`
   (redirige chaque ancienne page vers la nouvelle, en gardant /VENTURA/, /venturatest/, /taseur/).
4. Dès que la fiche Google est visible sur Maps : ajouter son lien « Partager » dans `sameAs`
   (`app/layout.tsx`, objet `structuredData`).

## Ajouter une ville

1. Ajouter une entrée dans `nextjs-site/app/data/cities.ts` (copier une ville existante, adapter
   quartiers, communes voisines, FAQ : le texte doit être différent des autres villes).
2. Créer `nextjs-site/app/debouchage-<slug>/page.tsx` en copiant un dossier existant et en
   changeant le slug.
3. `npm run build` : la page, le sitemap et les liens (accueil, pages villes) se mettent à jour seuls.

## Où sont les constantes

`nextjs-site/app/lib/site.ts` : téléphone, e-mail, adresse, délai d'intervention, nom de la société.
Modifier là, et tout le site suit.
