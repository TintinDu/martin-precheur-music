# martin-precheur-music

Personal music dashboard — what I listen to, what I play.

**[→ Live](https://martin-precheur-music.vercel.app)** · [stats.fm/martin-precheur](https://stats.fm/martin-precheur)

## Sections

| Tab | Description |
|---|---|
| `// LISTEN` | Top artists, top tracks, recent streams — pulled from stats.fm public API |
| `// PLAY` | Songs I can cover, with Spotify embed + YouTube official links |
| `// CONTACT` | Get in touch |

## Stack

- React 19 + TypeScript + Vite 8
- TanStack Query — data fetching & caching
- Framer Motion — animations
- CSS Modules — scoped styles
- stats.fm public API
- Vercel Analytics

## Running locally

Requires Node 22+ (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

## Adding a cover

Edit [`src/data/covers.ts`](src/data/covers.ts) and add `myVersionUrl` to the relevant track:

```ts
{
  id: '...',
  name: 'Weird Fishes / Arpeggi',
  // ...
  myVersionUrl: 'https://youtube.com/watch?v=...',
}
```
