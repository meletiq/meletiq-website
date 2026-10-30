# Meletiq website

**Thoughtful software. Useful by design.**

A lightweight Astro and TypeScript landing page for an independent software studio. Static output, no server adapter, no analytics, no remote fonts, and no runtime framework dependency. Includes responsive layouts, accessible landmarks and skip link, system-aware light/dark themes, reduced-motion support, SEO metadata, original SVG mark, and explicit coming-soon product categories.

## Development

Use Node 24 LTS (`nvm use`) and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. The theme follows the system unless the visitor chooses a theme; that choice is stored locally in their browser. The site works without JavaScript; only manual theme switching requires it.

## Validation and production build

```sh
npm run lint
npm run check
npm run build
npm test
npm run preview
```

`npm run format` formats source. `npm test` checks the built HTML, so build first. Production files are in `dist/`. CI runs formatting, Astro/TypeScript checks, build, and HTML smoke tests.

## Cloudflare Pages: free Git integration

1. Sign in to Cloudflare and open Workers & Pages. Select Create application, then the Pages / import an existing Git repository flow.
2. Connect GitHub. Grant the Cloudflare GitHub app access to **only `meletiq/meletiq-website`**, not the private extension repository. The organization owner must approve this access.
3. Select the repository. Project name: `meletiq` (if available). Production branch: `main`. Framework preset: Astro. Root directory: repository root (leave blank).
4. Build command: `npm run build`. Build output directory: `dist`. Set environment variable `NODE_VERSION` to `24`. No server adapter or Worker deployment command is required.
5. Deploy using the free Pages service. Do not add a custom domain, paid plan, or billable add-on. Cloudflare will confirm the actual assigned URL; `meletiq.pages.dev` is a preference, not a reserved address.
6. After the actual production address is assigned, set `SITE_URL` to its HTTPS origin in production environment variables and redeploy. It supplies canonical and Open Graph URLs. Until then, the build uses `CF_PAGES_URL` when available; local builds omit a canonical URL.
7. Check the production page at mobile and desktop widths, keyboard navigation, both themes, and GitHub contact links. Preview deployments use Cloudflare's preview URLs.

No Cloudflare credentials or API token belong in the repository. The headers in `public/_headers` are copied to the output for Pages to apply.

## Content and structure

- `src/pages/index.astro`: content, metadata, theme enhancement.
- `src/styles/global.css`: responsive styles and motion preferences.
- `public/favicon.svg`: original Meletiq mark.
- `.github/`: CI and Dependabot configuration.
- `tests/`: built-page smoke tests.

Product categories are explorations; none are advertised as launched. Contact is through public GitHub issues. A future private support address should be deliberately chosen before publishing it. No private personal email is included.

## Licensing

No license has been selected. Do not assume reuse permission from the repository's public visibility. Ask the owner before adding a license.
