import { createContext } from 'react';

export const INIT_STATE = {
  isLoading: false,
  movies: [],
  nominationList: [],
};

const MoviesStore = createContext(INIT_STATE);

export default MoviesStore;
