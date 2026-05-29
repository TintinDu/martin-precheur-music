export interface CoverTrack {
  id: string;
  name: string;
  artists: string[];
  album: string;
  albumImage: string;
  spotifyUrl: string;
  myVersionUrl?: string;
}

export const COVERS: readonly CoverTrack[] = [
  {
    id: '1TKYPzH66GwsqyJFKFkBkD',
    name: 'Vampire in the Corner',
    artists: ['Magdalena Bay'],
    album: 'Imaginal Disk',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2738257ff04aaf62d848030efeb',
    spotifyUrl: 'https://open.spotify.com/track/1TKYPzH66GwsqyJFKFkBkD',
  },
  {
    id: '2RlgNHKcydI9sayD2Df2xp',
    name: 'Dudu',
    artists: ['yeule'],
    album: 'softscars',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273b6a959158f89858a34ed9aca',
    spotifyUrl: 'https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp',
  },
  {
    id: '1uNFoZAHBGtllmzznpCI3s',
    name: 'Weird Fishes / Arpeggi',
    artists: ['Radiohead'],
    album: 'In Rainbows',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de3c04b08cc7573828a1572c',
    spotifyUrl: 'https://open.spotify.com/track/1uNFoZAHBGtllmzznpCI3s',
  },
  {
    id: '6LgJvl0Xdtc73RJ1mmpotq',
    name: 'Nude',
    artists: ['Radiohead'],
    album: 'In Rainbows',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de3c04b08cc7573828a1572c',
    spotifyUrl: 'https://open.spotify.com/track/6LgJvl0Xdtc73RJ1mmpotq',
  },
  {
    id: '5LL7jHjzuKbVFVqS3NMZM5',
    name: 'Let Down',
    artists: ['Radiohead'],
    album: 'OK Computer',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2736ce9a74f0f96c0aa58bcf26c',
    spotifyUrl: 'https://open.spotify.com/track/5LL7jHjzuKbVFVqS3NMZM5',
  },
  {
    id: '6I9JnMRtkFJtjtMoUFCH1q',
    name: 'Airbag',
    artists: ['Radiohead'],
    album: 'OK Computer',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2736ce9a74f0f96c0aa58bcf26c',
    spotifyUrl: 'https://open.spotify.com/track/6I9JnMRtkFJtjtMoUFCH1q',
  },
  {
    id: '3ZMiBs0kDpBIJ2BsFBQvNT',
    name: 'Lucky',
    artists: ['Radiohead'],
    album: 'OK Computer',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2736ce9a74f0f96c0aa58bcf26c',
    spotifyUrl: 'https://open.spotify.com/track/3ZMiBs0kDpBIJ2BsFBQvNT',
  },
  {
    id: '4sPmO7WMQUAf45kwQHiEDR',
    name: 'Angel on a Satellite',
    artists: ['Magdalena Bay'],
    album: 'Imaginal Disk',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2738257ff04aaf62d848030efeb',
    spotifyUrl: 'https://open.spotify.com/track/4sPmO7WMQUAf45kwQHiEDR',
  },
  {
    id: '6c5hbWFpgJiNpBCNDTRl9Z',
    name: 'Chaeri',
    artists: ['Magdalena Bay'],
    album: 'Imaginal Disk',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b2738257ff04aaf62d848030efeb',
    spotifyUrl: 'https://open.spotify.com/track/6c5hbWFpgJiNpBCNDTRl9Z',
  },
  {
    id: '14XW2oHjhSHjuWFb3rp4jL',
    name: 'Jigsaw Falling Into Place',
    artists: ['Radiohead'],
    album: 'In Rainbows',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de3c04b08cc7573828a1572c',
    spotifyUrl: 'https://open.spotify.com/track/14XW2oHjhSHjuWFb3rp4jL',
  },
  {
    id: '7F0vPBbaJRkuLGkTDfE1dG',
    name: 'Fake Plastic Trees',
    artists: ['Radiohead'],
    album: 'The Bends',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273d4945e92e56b5e7767fae19f',
    spotifyUrl: 'https://open.spotify.com/track/7F0vPBbaJRkuLGkTDfE1dG',
  },
] as const;

// Add your cover URL here when a version exists:
// find the track by id and add myVersionUrl: 'https://youtube.com/...'
