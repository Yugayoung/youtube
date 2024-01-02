import { createContext } from 'react';
import Youtube from '../../.history/src/api/youtube_20231230200758';

export const YoutubeApiContext = createContext();

export function YoutubeApiContext({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ Youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
