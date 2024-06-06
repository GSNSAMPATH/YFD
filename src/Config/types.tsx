export interface Artist {
    _id: string;
    name: string;
    genre: string;
    image_url: string;
  }
  
export interface Song {
    isPlaying: any;
    name: ReactNode;
    _id: string;
    title: string;
    artist: Artist;
    duration: number;
    songimageUrl: string;
    songurl: string;
    trending: number;
  }

export interface AlbumData {
    [x: string]: string[];
    _id: string;
    title: string;
    releaseDate: string;
    songs: Song[];
 
  }
  