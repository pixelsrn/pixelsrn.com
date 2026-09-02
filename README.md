# pixelsrn.com

The PixelsRN marketing site. Astro + TypeScript + Tailwind, built to static
HTML and served by a Cloudflare Worker.

If you only want to change wording, links, or names, you need exactly one
file: [`src/config.ts`](src/config.ts). Skip to
[Changing the content](#changing-the-content).

## First-time setup

You need **Node 24**. Check with `node -v`. If you're on something older,
install Node 24 LTS from [nodejs.org](https://nodejs.org) — or use a version
manager like [fnm](https://github.com/Schniz/fnm) or [Volta](https://volta.sh),
which read the `.nvmrc` in this repo and switch automatically.

```bash
git clone https://github.com/PixelsRN/pixelsrn.com.git
cd pixelsrn.com
npm ci
npm run dev
```

Then open <http://localhost:4321>. Edits appear as you save.

Use `npm ci`, not `npm install`. It installs exactly what's in
`package-lock.json` instead of quietly resolving different versions, which is
what CI does too.

If VS Code prompts you to install recommended extensions, say yes — Astro,
Prettier, and Tailwind. Formatting settings are committed in `.vscode/`, so
everyone gets the same behaviour without configuring anything.

## Changing the content

Everything editable lives in **`src/config.ts`**:

| Export         | What it controls                                      |
| -------------- | ----------------------------------------------------- |
| `SITE`         | Company name, legal name, location, contact email     |
| `NAV`          | Top bar links. Empty today; add an entry and it shows |
| `TEAM`         | Founder names, titles, and profile links              |
| `PUBLICATIONS` | Selected papers. Empty, and the section stays hidden  |

Each founder takes any number of links (Scholar, ORCID, LinkedIn, personal
site). Use `links: []` for someone who'd rather not be linked — their row
still renders. All of them open in a new tab.

The headline and the paragraph under it are the only copy still living in
markup, at the top of `src/pages/index.astro`.

## Commands

| Command                | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Dev server with hot reload. Your daily driver   |
| `npm run build`        | Static build into `dist/`                       |
| `npm run preview`      | Serves `dist/` through the real Workers runtime |
| `npm run check`        | Astro + TypeScript diagnostics                  |
| `npm run format`       | Prettier, write                                 |
| `npm run format:check` | Prettier, verify only — this is what CI runs    |

## Making a change

1. Branch off `main` (`feat/`, `fix/`, or `chore/` prefix).
2. Commit and push.
3. Open a PR. CI runs format, typecheck, and build. Cloudflare comments with a
   preview URL — open it on your phone to check the change before merging.
4. Merge to `main`. Cloudflare deploys production automatically.

`main` and `dev` are protected; changes reach them through pull requests.

## How it's deployed

**Cloudflare Workers Builds** — the dashboard Git integration — watches this
repo. There's no deploy workflow here; GitHub Actions only runs the checks in
`.github/workflows/ci.yml`.

- Push to `main` → production
- Any other branch or PR → preview URL, posted as a PR comment

The build runs `npm run build`, then `wrangler deploy` on `main` or
`wrangler versions upload` elsewhere. `wrangler.jsonc` points the Worker at
`dist/` as static assets, so no server code runs on a request.

Free plan gives 3,000 build minutes a month. This builds in about a second.

## Structure

```
src/
  config.ts                 all editable content — start here
  pages/index.astro         homepage layout
  pages/404.astro
  layouts/Base.astro        <head>, sticky top bar, mobile contact bar
  components/Mark.astro     the RGB-subpixel logo
  components/Contact.astro  contact block, two variants
  styles/global.css         design tokens (@theme) + scanline overlay
public/                     favicons, og.png, robots.txt — served at the root
wrangler.jsonc              tells the Worker to serve dist/ as static assets
```

## Conventions

- **Never hand-edit `package.json` to add a dependency.** Run
  `npm install <pkg>` so the lockfile updates in the same commit. For Astro
  integrations use `npx astro add <name>`.
- **Commit the lockfile.** CI's `npm ci` fails without it.
- Prettier owns formatting. Run `npm run format` before pushing if CI
  complains.
- Colors come from the `@theme` block in `src/styles/global.css`. Use the
  token names (`text-phosphor`, `bg-void`) rather than raw hex.
