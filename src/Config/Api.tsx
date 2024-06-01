// api.tsx
import axios from 'axios';

export interface Artist {
  _id: string;
  name: string;
  genre: string;
  image_url: string;
  songs: string[];
  __v: number;
}

export interface Songs {
  _id: string;
  title: string;
  genre: string;
  image_url: string;
  songs: string[];
  __v: number;
}

export const fetchArtists = async (): Promise<Artist[]> => {
  try {
    const response = await axios.get('https://server-liart-kappa.vercel.app/api/artists');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
