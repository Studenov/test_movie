import { createReducer } from 'utilities/helperReducer';
import * as TYPES from './types';

const initState = {
  title: '',
  movie: {},
  loader: false,
  error: false
};

const searchMovie = (state, { title }) => ({ ...state, title, loader: true });
const successSearchMovie = (state, { movie }) => ({ ...state, movie, loader: false });
const errorSearchMovie = state => ({ ...state, error: true, loader: false });
const clearMovie = () => initState;

const handlers = {
  [TYPES.SEARCH_MOVIE]: searchMovie,
  [TYPES.SUCCESS_SEARCH_MOVIE]: successSearchMovie,
  [TYPES.ERROR_SEARCH_MOVIE]: errorSearchMovie,
  [TYPES.CLEAR_MOVIE]: clearMovie
};

export const searchReducer = createReducer(initState, handlers);
