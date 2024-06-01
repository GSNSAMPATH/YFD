export interface Artist {
    _id: string;
    name: string;
    genre: string;
    image_url: string;
  }
  
export interface Song {
    _id: string;
    title: string;
    artist: Artist;
    duration: number;
    songimageUrl: string;
    songurl: string;
    trending: number;
  }
  