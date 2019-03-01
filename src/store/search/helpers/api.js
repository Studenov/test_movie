import axios from 'axios';

export const searchMovie = title => axios.get(`http://www.omdbapi.com/?apikey=1977b733&t=${title}`).then(res => res);