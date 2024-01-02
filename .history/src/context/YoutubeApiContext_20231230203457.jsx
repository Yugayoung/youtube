import { createContext } from 'react';
import Youtube from '../../.history/src/api/youtube_20231230200758';

export const YoutubeApiContext = createContext();

const youtube = new Youtube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ Youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
