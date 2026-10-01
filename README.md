# connectorzzz-dev

Developer and product hub for Connectorzzz systems.

The first product section is Genesis Mesh:

```text
dev.connectorzzz.com/
dev.connectorzzz.com/genesismesh
dev.connectorzzz.com/genesismesh/sdks
dev.connectorzzz.com/genesismesh/videos
dev.connectorzzz.com/genesismesh/articles
dev.connectorzzz.com/concepts/how-genesis-mesh-works/foundation
dev.connectorzzz.com/concepts/how-genesis-mesh-works/governed-action
dev.connectorzzz.com/concepts/how-genesis-mesh-works/full-model
```

`/concepts/how-genesis-mesh-works` redirects to the Foundation view. Concepts are
deep-linkable by fragment, e.g. `/foundation#recognition-treaty`.

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

How Genesis Mesh Works concepts, relationships, stages, and the mental-model
questions live in one file; the three views are filters over it:

```text
src/content/how-genesis-mesh-works.ts
```

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
