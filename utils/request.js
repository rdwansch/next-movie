const API_KEY = '02b13b61b0a450734488841d8a9106cd';

export default {
  getNowPlaying: `/movie/now_playing?api_key=${API_KEY}`,

  getUpcomingMovies: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  getPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  getTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  getTrendingMovies: `trending/all/week?api_key=${API_KEY}`,

  // Category
  getActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  getDocumentaryMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  getRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  getScienceFiction: `discover/movie?api_key=${API_KEY}&with_genres=878`,
  getDramaMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};
