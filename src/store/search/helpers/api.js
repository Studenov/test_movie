import axios from 'axios';

export const searchMovie = (title) => {
  if (title.startsWith('tt')) return axios.get(`http://www.omdbapi.com/?apikey=1977b733&i=${title}`).then(res => res); 
  return axios.get(`http://www.omdbapi.com/?apikey=1977b733&t=${title}`).then(res => res);
}