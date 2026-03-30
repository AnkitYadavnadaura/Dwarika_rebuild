# Dwarika Rebiuld

Official futuristic web portal concept for a virtual sovereign country.

## Local run

```bash
npm install
npm run dev
```

## Deployment

- Production deploy workflow runs from `main` using GitHub Actions.
- The workflow performs install, build, and deploy steps without repository-level Vercel auth token wiring.

## Security update (CVE-2025-66478)

Next.js is pinned to `15.5.7` to avoid vulnerable releases.
