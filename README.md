# connectorzzz-dev

Developer and product hub for Connectorzzz systems.

The first product section is Genesis Mesh:

```text
dev.connectorzzz.com/genesismesh
dev.connectorzzz.com/genesismesh/videos
dev.connectorzzz.com/genesismesh/articles
```

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
http://localhost:3000/genesismesh
```

## Content Model

Genesis Mesh links, video IDs, article links, SDK cards, pillars, and campaign cards live in:

```text
src/content/genesismesh.ts
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
