// api.ts
import axios from 'axios';
import { Artist, Song } from './types';

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

