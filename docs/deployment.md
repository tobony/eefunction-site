# Deployment Plan

## Target

The intended public address is `eefunction.brbrsoft.com`.

## Initial delivery model

- GitHub is the source of truth.
- Pull requests run build, link, content-schema, and accessibility checks.
- The default branch deploys to production only after required checks pass.
- Preview deployments are created for pull requests where supported.
- Secrets are stored in the deployment platform, never in the repository.

## Recommended platform

Start with Astro and Cloudflare Pages for static and content-driven pages. Use Cloudflare Workers only when server-side requirements such as account, license, checkout, or protected API behavior are introduced.

Keep the public marketing site operational even when commercial APIs are unavailable.

## Domain migration

1. Deploy to a temporary Cloudflare address.
2. Validate Korean and English routes, redirects, canonical URLs, and sitemap.
3. Connect `eefunction.brbrsoft.com`.
4. Connect `docs.eefunction.brbrsoft.com` to the existing documentation project.
5. Preserve `eefunction-doc.pages.dev` during migration.
6. Add permanent redirects only after link validation.

## Required checks before production

- clean install and production build;
- type and lint checks;
- broken internal and external links;
- structured content validation;
- responsive smoke tests;
- keyboard and accessibility checks;
- no secrets or private repository URLs in output;
- correct product edition and lifecycle labels;
- correct canonical and social metadata;
- download-file integrity checks.

## Environment separation

- Local: developer machine with mock public content
- Preview: per-pull-request deployment, no production secrets
- Production: protected branch and least-privilege deployment token

Commercial services, analytics, checkout, and license APIs must use separate credentials and documented data flows.
