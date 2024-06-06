import React, { createContext, useState, useRef, useContext, ReactNode } from 'react';
import Sound from 'react-native-sound';

type Song = {
  songurl: string;
  // Add any other properties of a song here
};

type AudioPlayerContextType = {
  currentSong: Song | null;
  playSong: (song: Song) => void;
  stopSong: () => void;
  plusSong: () => void;
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
};

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const soundRef = useRef<Sound | null>(null);

  const playSong = async (song: Song) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current = null;
      setCurrentSong(song);
    }
    const sound = new Sound(song.songurl, '', (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      soundRef.current = sound;
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        setCurrentSong(null);
      });
      setCurrentSong(song);
    });
  };

  const stopSong = async () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current = null;
      setCurrentSong(null);
    }
  };

  const plusSong = async (song: Song) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current = null;
    }
    const sound = new Sound(song.songurl, '', (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      soundRef.current = sound;
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  return (
    <AudioPlayerContext.Provider value={{ currentSong, playSong, stopSong, plusSong }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};



