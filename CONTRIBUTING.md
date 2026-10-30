# Contributing

Thanks for helping out! For more information contact [**Evan**](mailto:evan@pixelsrn.com).

**START HERE:** Most editable content lives in **`src/config.ts`**.

## First-Time Setup

You need **Node 24**. Check with `node -v`. If you're on something older,
install Node 24 LTS from [nodejs.org](https://nodejs.org).

```bash
git clone https://github.com/PixelsRN/pixelsrn.com.git
cd pixelsrn.com
npm ci
npm run dev
```

Then open <http://localhost:4321>. Edits are live. If VS Code prompts you to install recommended extensions, say yes: Astro,
Prettier, and Tailwind.

## Commands

| Command                | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Dev server with hot reload. Your daily driver   |
| `npm run build`        | Static build into `dist/`                       |
| `npm run preview`      | Serves `dist/` through the real Workers runtime |
| `npm run check`        | Astro + TypeScript diagnostics                  |
| `npm run format`       | Prettier, write                                 |
| `npm run format:check` | Prettier, verify only. This is what CI runs     |

## Making a Change

`main` is protected, so changes reach them only through pull
requests.

1. Branch off `main` with a `feat/`, `fix/`, or `chore/` prefix,
   e.g. `fix/mobile-contact-bar`.
2. Commit and push.
3. Open a PR. CI runs format, typecheck, and build. Cloudflare comments with a
   preview URL.
4. Merge to `main`. Cloudflare deploys production automatically.

## Conventions

- **Never hand-edit `package.json` to add a dependency.** Run
  `npm install <pkg>` so the lockfile updates in the same commit. For Astro
  integrations, use `npx astro add <name>`.
- **Commit the lockfile.** CI's `npm ci` fails without it.
- **Prettier owns formatting.** Run `npm run format` before pushing if CI
  complains.
- **Use design tokens, not raw hex.** Colors come from the `@theme` block in
  `src/styles/global.css`. Use the token names (`text-phosphor`, `bg-void`).
- **Content goes in `src/config.ts`**, not hard-coded in components.

## Project Layout

```
src/
  config.ts                 all editable content (start here)
  pages/index.astro         homepage layout
  pages/404.astro
  layouts/Base.astro        <head>, sticky top bar, mobile contact bar
  components/Mark.astro     the RGB-subpixel logo
  components/Contact.astro  contact block, two variants
  styles/global.css         design tokens (@theme) + scanline overlay
public/                     favicons, og.png, robots.txt (served at the root)
docs/                       longer-form docs (deployment, etc.)
.github/                    CI workflow and issue templates
wrangler.jsonc              tells the Worker to serve dist/ as static assets
```
