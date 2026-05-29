const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET as string;
const PLAYLIST_ID = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID as string;

let cachedToken: string | null = null;
let tokenExpiry = 0;

async function getToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiry) return cachedToken;

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    body: 'grant_type=client_credentials',
  });

  if (!res.ok) throw new Error('Spotify auth failed');
  const data = await res.json() as { access_token: string; expires_in: number };
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return cachedToken;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string; width: number }[];
  };
  duration_ms: number;
  external_urls: { spotify: string };
  preview_url: string | null;
}

export async function getPlaylistTracks(): Promise<SpotifyTrack[]> {
  const token = await getToken();
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks?limit=50`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  if (!res.ok) throw new Error('Spotify playlist fetch failed');
  const data = await res.json() as { items: { track: SpotifyTrack }[] };
  return data.items.map(i => i.track).filter(Boolean);
}
