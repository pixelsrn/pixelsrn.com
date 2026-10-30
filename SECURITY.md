# Security Policy

## Scope

This repository is the source for [pixelsrn.com](https://pixelsrn.com), a
static marketing site served by a Cloudflare Worker. Only the version
currently deployed from `main` is supported. There are no older releases to
patch.

In scope:

- The site at pixelsrn.com and its preview deployments
- Code, configuration, and dependencies in this repository
- The CI workflow in `.github/workflows/`

Out of scope:

- Cloudflare's or GitHub's own infrastructure (report those to the vendor)
- Findings that need a compromised device or browser
- Missing security headers or best-practice suggestions with no demonstrated
  impact (these are welcome as regular issues instead)

## Reporting a Vulnerability

**Please don't open a public issue.** Instead, use one of these:

- **Preferred:** [Report a vulnerability privately](https://github.com/PixelsRN/pixelsrn.com/security/advisories/new)
  through GitHub
- **Email:** evan@pixelsrn.com

Include what you found, how to reproduce it, and what impact you think it has.

## What to Expect

- **Acknowledgement** within 3 business days <!-- TODO: adjust to what you can commit to -->
- **An initial assessment** (accepted, declined, or need more information)
  within 10 business days
- If accepted, we'll fix it, deploy, and let you know when it's resolved.
  We're glad to credit you in the advisory unless you'd prefer not to be named.
- If declined, we'll explain why.

We won't pursue legal action over good-faith research that respects this
policy, avoids accessing other people's data, and doesn't degrade the site for
others.
