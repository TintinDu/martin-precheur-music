import type { TopTrackItem, TopArtistItem, RecentStream, UserStats, Range } from '../types';

const BASE = 'https://api.stats.fm/api/v1';
const USER = 'martin-precheur';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`stats.fm API error: ${res.status}`);
  const json = await res.json() as { items: T };
  return json.items;
}

export async function getTopTracks(range: Range): Promise<TopTrackItem[]> {
  return get<TopTrackItem[]>(`/users/${USER}/top/tracks?range=${range}`);
}

export async function getTopArtists(range: Range): Promise<TopArtistItem[]> {
  return get<TopArtistItem[]>(`/users/${USER}/top/artists?range=${range}`);
}

export async function getRecentStreams(): Promise<RecentStream[]> {
  return get<RecentStream[]>(`/users/${USER}/streams/recent`);
}

export async function getUserStats(): Promise<UserStats> {
  const res = await fetch(`${BASE}/users/${USER}/stats`);
  if (!res.ok) throw new Error(`stats.fm API error: ${res.status}`);
  const json = await res.json() as { items: UserStats };
  return json.items;
}
