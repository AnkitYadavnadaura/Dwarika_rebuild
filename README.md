# Dwarika Rebuild

Next.js project for a virtual-country concept website.

## Local run

```bash
npm install
npm run dev
```

## Deploy (Vercel)

- Ensure the **Root Directory** is the repository root (`/`) where `package.json` lives.
- Framework is pre-declared in `vercel.json` as `nextjs`.

## Auto deploy from `main`

A GitHub Actions workflow is included at `.github/workflows/vercel-deploy.yml`.

To enable production deployment on every push to `main`, configure these repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Security update (CVE-2025-66478)

This project now pins Next.js to a patched release line (`15.5.7`) to remediate CVE-2025-66478 for App Router deployments.
After upgrading and redeploying, rotate sensitive environment variables in your hosting platform.
