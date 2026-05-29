export interface Artist {
  id: number;
  name: string;
  image: string;
}

export interface Album {
  id: number;
  name: string;
  image: string;
}

export interface Track {
  id: number;
  name: string;
  durationMs: number;
  explicit: boolean;
  artists: Artist[];
  albums: Album[];
  spotifyPopularity: number;
  spotifyPreview: string | null;
  externalIds: {
    spotify?: string;
    appleMusic?: string;
  };
}

export interface TopTrackItem {
  position: number;
  streams: number;
  playedMs: number;
  track: Track;
}

export interface TopArtistItem {
  position: number;
  streams: number;
  playedMs: number;
  artist: Artist;
}

export interface RecentStream {
  endTime: string;
  durationMs: number;
  track: Track;
}

export interface UserStats {
  count: number;
  durationMs: number;
}

export type Range = 'weeks' | 'months' | 'lifetime';

