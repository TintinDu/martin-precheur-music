export interface CoverTrack {
  id: string;
  name: string;
  artists: string[];
  album: string;
  albumImage: string;
  spotifyUrl: string;
  youtubeUrl: string;
  myVersionUrl?: string;
}

export const COVERS: readonly CoverTrack[] = [
  {
    id: '51sGfEWVD2FPICqPrjMuTG',
    name: 'Vampire in the Corner',
    artists: ['Magdalena Bay'],
    album: 'Imaginal Disk',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2737339f7e95927d4b823189f62',
    spotifyUrl: 'https://open.spotify.com/track/51sGfEWVD2FPICqPrjMuTG',
    youtubeUrl: 'https://www.youtube.com/watch?v=q4KYYRzFUzE',
  },
  {
    id: '5vkJZHiK2s7Os8AM1vInjv',
    name: 'Dudu',
    artists: ['yeule'],
    album: 'softscars',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273bc69e073d326becac03d3cfa',
    spotifyUrl: 'https://open.spotify.com/track/5vkJZHiK2s7Os8AM1vInjv',
    youtubeUrl: 'https://www.youtube.com/watch?v=sUdvVt7Ldso',
  },
  {
    id: '4wajJ1o7jWIg62YqpkHC7S',
    name: 'Weird Fishes / Arpeggi',
    artists: ['Radiohead'],
    album: 'In Rainbows',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9',
    spotifyUrl: 'https://open.spotify.com/track/4wajJ1o7jWIg62YqpkHC7S',
    youtubeUrl: 'https://www.youtube.com/watch?v=LUjGtyYEi90',
  },
  {
    id: '35YyxFpE0ZTOoqFx5bADW8',
    name: 'Nude',
    artists: ['Radiohead'],
    album: 'In Rainbows',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9',
    spotifyUrl: 'https://open.spotify.com/track/35YyxFpE0ZTOoqFx5bADW8',
    youtubeUrl: 'https://www.youtube.com/watch?v=BbWBRnDK_AE',
  },
  {
    id: '2fuYa3Lx06QQJAm0MjztKr',
    name: 'Let Down',
    artists: ['Radiohead'],
    album: 'OK Computer',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856',
    spotifyUrl: 'https://open.spotify.com/track/2fuYa3Lx06QQJAm0MjztKr',
    youtubeUrl: 'https://www.youtube.com/watch?v=7G83jLIOmDg',
  },
  {
    id: '7c378mlmubSu7NGkLFa4sN',
    name: 'Airbag',
    artists: ['Radiohead'],
    album: 'OK Computer',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856',
    spotifyUrl: 'https://open.spotify.com/track/7c378mlmubSu7NGkLFa4sN',
    youtubeUrl: 'https://www.youtube.com/watch?v=Hw27WpM8AxY',
  },
  {
    id: '14xj58ZexBaEaHARb11Cqs',
    name: 'Lucky',
    artists: ['Radiohead'],
    album: 'OK Computer',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856',
    spotifyUrl: 'https://open.spotify.com/track/14xj58ZexBaEaHARb11Cqs',
    youtubeUrl: 'https://www.youtube.com/watch?v=2m1J6dMS8lo',
  },
  {
    id: '4znSsVaknTY7CUQCuTUC32',
    name: 'Angel on a Satellite',
    artists: ['Magdalena Bay'],
    album: 'Imaginal Disk',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2737339f7e95927d4b823189f62',
    spotifyUrl: 'https://open.spotify.com/track/4znSsVaknTY7CUQCuTUC32',
    youtubeUrl: 'https://www.youtube.com/watch?v=zWXEyRi9b-c',
  },
  {
    id: '1ZkfNNoRrgt69wTjcmJZE9',
    name: 'Chaeri',
    artists: ['Magdalena Bay'],
    album: 'Imaginal Disk',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2730ecbdac77e72dc16719a3e89',
    spotifyUrl: 'https://open.spotify.com/track/1ZkfNNoRrgt69wTjcmJZE9',
    youtubeUrl: 'https://www.youtube.com/watch?v=ben9qDbrLYU',
  },
  {
    id: '0YJ9FWWHn9EfnN0lHwbzvV',
    name: 'Jigsaw Falling Into Place',
    artists: ['Radiohead'],
    album: 'In Rainbows',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9',
    spotifyUrl: 'https://open.spotify.com/track/0YJ9FWWHn9EfnN0lHwbzvV',
    youtubeUrl: 'https://www.youtube.com/watch?v=GoLJJRIWCLU',
  },
  {
    id: '73CKjW3vsUXRpy3NnX4H7F',
    name: 'Fake Plastic Trees',
    artists: ['Radiohead'],
    album: 'The Bends',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2739293c743fa542094336c5e12',
    spotifyUrl: 'https://open.spotify.com/track/73CKjW3vsUXRpy3NnX4H7F',
    youtubeUrl: 'https://www.youtube.com/watch?v=n5h0qHwNrHk',
  },
] as const;

// To add your cover: add myVersionUrl: 'https://youtube.com/...' to the track
