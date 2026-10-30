# Deployment

**Cloudflare Workers Builds** (the dashboard Git integration) watches this
repo. There's no deploy workflow here. GitHub Actions only runs the checks in
[`.github/workflows/ci.yml`](../.github/workflows/ci.yml).

| Trigger                  | Result                              |
| ------------------------ | ----------------------------------- |
| Push to `main`           | Production deploy to pixelsrn.com   |
| Any other branch or a PR | Preview URL, posted as a PR comment |

## What the Build Does

1. `npm run build` produces static HTML in `dist/`.
2. On `main`: `wrangler deploy`. Elsewhere: `wrangler versions upload`.

[`wrangler.jsonc`](../wrangler.jsonc) points the Worker at `dist/` as static
assets, so no server code runs on a request.

## Checking a Deployment

- Build logs: Cloudflare dashboard → Workers & Pages → pixelsrn.com → Deployments
- To reproduce production locally: `npm run build && npm run preview`
