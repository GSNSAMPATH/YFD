import React, { createContext, useState, useRef, useContext, ReactNode, useEffect } from 'react';
import { Image } from 'react-native';
import Sound from 'react-native-sound';

type Song = {
  songurl: string;
  songimageUrl: string;
  // Add any other properties of a song here
};

type AudioPlayerContextType = {
  currentSong: Song | null;
  currentPosition: number;
  duration: number;
  isPlaying: boolean;
  CurrentSongListAndIndex: (index: number) => void;
  playSong: (song: Song, index?: number) => void;
  stopSong: () => void;
  seek: (position: number) => void;
  playPause: () => void;
  nextSong: () => void;
  previousSong: () => void;
};

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const useAudioPlayer = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within a AudioPlayerProvider');
  }
  return context;
};

type AudioPlayerProviderProps = {
  children: ReactNode;
  playlist: Song[];
};

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({ children, playlist }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentSongList, setCurrentSongList] = useState<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const CurrentSongListAndIndex = (songs: Number) => {
    setCurrentSongList(songs);
    console.log(songs); 
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const playSong = async (song: Song, index: number | null = null) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
      soundRef.current = null;
      setCurrentIndex(index);
      setCurrentSong(null);
      setCurrentPosition(0);
      setDuration(0);
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    const sound = new Sound(song.songurl, '', (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      
      setDuration(sound.getDuration());
      soundRef.current = sound;
      sound.play((success) => {
        if (success) {
          nextSong(); // Automatically play the next song when the current one finishes
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        setCurrentSong(null);
        setCurrentPosition(0);
        setDuration(0);
        setIsPlaying(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      });

      intervalRef.current = setInterval(() => {
        if (soundRef.current && soundRef.current.isLoaded()) {
          soundRef.current.getCurrentTime((seconds) => {
            setCurrentPosition(seconds);
          });
        }
      }, 1000);

      setCurrentSong(song);
      setCurrentIndex(index);
      setIsPlaying(true);
    });
  };

  const stopSong = async () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
      soundRef.current = null;
      setCurrentSong(null);
      setCurrentPosition(0);
      setDuration(0);
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const seek = (position: number) => {
    if (soundRef.current) {
      soundRef.current.setCurrentTime(position);
      setCurrentPosition(position);
    }
  };

  const playPause = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play((success) => {
          if (success) {
            console.log('successfully finished playing');
            nextSong(); // Automatically play the next song when the current one finishes
          } else {
            console.log('playback failed due to audio decoding errors');
          }
          setCurrentSong(null);
          setCurrentPosition(0);
          setDuration(0);
          setIsPlaying(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    console.log('next');
    console.log(currentIndex);
    if (currentIndex !== null && currentSongList.length > 1) {
      const nextIndex = (currentIndex + 1) % currentSongList.length;
      const nextSong =currentSongList[currentIndex];
      playSong(nextSong, nextIndex);
    }

    else{
      console.log('No next song');
    }

  };

  const previousSong = () => {
    console.log('previous');
    console.log(currentIndex);
    if (currentIndex !== null && currentSongList.length > 1) {
      const prevIndex = (currentIndex - 1 + currentSongList.length) % currentSongList.length;
      const prevSong =currentSongList[prevIndex];
      playSong(prevSong, prevIndex);
    }
    else{
      console.log('No previous song');
    }
    
  };
  
  const showCurrentSongImage = () => {
    if (currentSong) {
      return <Image source={{ uri: currentSong.songimageUrl }} style={{ width: 100, height: 100 }} />;
    }
    return null;
  };

  return (
    <AudioPlayerContext.Provider value={{CurrentSongListAndIndex, currentSong, currentPosition, duration, isPlaying, playSong, stopSong, seek, playPause, nextSong, previousSong, showCurrentSongImage }}>
      
      {children}
    </AudioPlayerContext.Provider>
  );
};
