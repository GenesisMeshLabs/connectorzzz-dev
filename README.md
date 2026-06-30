# connectorzzz-dev

Developer and product hub for Connectorzzz systems.

The first product section is Genesis Mesh:

```text
dev.connectorzzz.com/
dev.connectorzzz.com/genesismesh
dev.connectorzzz.com/genesismesh/sdks
dev.connectorzzz.com/genesismesh/videos
dev.connectorzzz.com/genesismesh/articles
```

This repository is intended to be public. Do not commit local environment files,
generated screenshots, deployment credentials, or private campaign drafts.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `lucide-react` icons

## Local Development

```powershell
npm ci
npm.cmd run dev
```

Default local URL:

```text
http://localhost:3000/
```

## Content Model

Genesis Mesh links, fallback video IDs, fallback article links, SDK cards, pillars, and campaign cards live in:

```text
src/content/genesismesh.ts
```

Public content indexes are fetched server-side:

- YouTube videos use the public GenesisMesh Labs channel feed.
- Patreon articles are discovered from public GenesisMesh Labs post links.
- Both pages fall back to curated local content if a public feed or page is unavailable.

Shared UI sections live in:

```text
src/components/
```

Marketing and brand images are served from:

```text
public/images/
```

## Validation

```powershell
npm.cmd run lint
npm.cmd run build
```
