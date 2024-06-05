// api.ts
import axios from 'axios';
import { AlbumData, Artist, Song } from './types';

export const fetchArtists = async (): Promise<Artist[]> => {
  return new Promise((resolve, reject) => {
    axios.get<Artist[]>("https://server-liart-kappa.vercel.app/api/artists")
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const fetchSongs = async (): Promise<Song[]> => {
  const response = await axios.get<Song[]>("https://server-liart-kappa.vercel.app/api/songs");
  return response.data;
};

export const fetchAlbums = async (): Promise<AlbumData[]> => {
  try {
    const response = await axios.get<AlbumData[]>("https://server-liart-kappa.vercel.app/api/albums");
    const albumsData = response.data.map((album: AlbumData) => ({
      ...album,
      colors: getRandomGradientColors(),
    }));
    return albumsData;
  } catch (error) {
    throw new Error(error.message);
  }
};



const getRandomGradientColors = () => {
  const gradients = [
    ['#9A1BE9', '#F7F5F8'],
    ['#C4C0C3', '#F303B7'],
    ['#20B2AA', '#5F9EA0'],
    ['#047860', '#BDCBC8'],
    ['#880983', '#6E6C6E'],
    ['#6B0111', '#858484'],
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};



export const fetchArtist_Songs = async (_id: string): Promise<Song[]> => {
  try {
    const response = await axios. get<Song[]>(`https://server-liart-kappa.vercel.app/api/artists/${_id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};



