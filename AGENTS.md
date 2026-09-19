# AGENTS.md

Astro + Starlight docs site (static output, GitHub Pages). Use **pnpm**, not npm (`pnpm-lock.yaml`).

## Commands

```bash
pnpm install   # install dependencies
pnpm dev       # start dev server
pnpm build     # build static site to dist/ — the primary verification step
pnpm preview   # preview the production build
```

Start dev server in background mode when working interactively:

```bash
astro dev --background
```

Manage with `astro dev stop`, `astro dev status`, `astro dev logs`.

**No test, lint, or typecheck setup** — skip `npm test`, `pnpm lint`, `pnpm check`. Verify with `pnpm build`.

## Content (Starlight)

- Skill guides **MDX files** under `src/content/docs/`. Folder = category, filename = route slug (`src/content/docs/Start Here/index.mdx` → `/start-here/`).
- Collection defined once in `src/content.config.ts` via Starlight `docsLoader`/`docsSchema`. New guide = new `.mdx` file, no code registration.
- Frontmatter follows Starlight schema (`title`, `description`, `sidebar`, `hero`, `template`). See existing files.
- Guide-writing conventions in `CONTRIBUTING.md`.

## Styling

- Tailwind CSS **v4 via Vite plugin** (`@tailwindcss/vite`) + `@astrojs/starlight-tailwind` — not Tailwind v3 PostCSS setup. No `tailwind.config`.
- Design tokens (colors, fonts) in `@theme` block of `src/styles/global.css`. Brand accent `#FA892D`; dark surfaces `#1E1E2E`.
- Starlight layer order declared at top of `global.css` (`base, starlight, theme, components, utilities`).

## Custom head

`src/components/StarlightHead.astro` overrides Starlight default head (registered in `astro.config.mjs` via `components.Head`) and injects `ClientRouter` (`astro:transitions`) for client-side navigation. Don't remove.

## Official docs

Before content or styling work, consult [Starlight docs](https://starlight.astro.build); for framework-level work, [Astro docs](https://docs.astro.build):

- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)