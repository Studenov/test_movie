import * as TYPES from './types';

export const searchMovie = title => ({
  type: TYPES.SEARCH_MOVIE,
  payload: { title }
});
export const successSearchMovie = movie => ({
  type: TYPES.SUCCESS_SEARCH_MOVIE,
  payload: { movie }
});
export const errorSearchMovie = () => ({
  type: TYPES.ERROR_SEARCH_MOVIE
});
export const clearMovie = () => ({
  type: TYPES.CLEAR_MOVIE
});