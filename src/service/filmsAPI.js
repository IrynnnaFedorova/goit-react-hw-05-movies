const API_KEY = '1b4a2d8735c72505cbd51d29587360e4';

export const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const responce = await fetch(url, config);

  return responce.ok ? responce.json() : Promise.reject(new Error('Not found'));
}

// Фетч по трендовым фильмам
export function fetchTrendingFilms() {
  const TREND_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  return fetchWithErrorHandling(TREND_URL);
}

// Фетч по ключевому поиску
export function fetchSearchMovies(query) {
  const QUERY_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return fetchWithErrorHandling(QUERY_URL);
}

// Фетч по айди для одного фильма
export function fetchFilmById(movieId) {
  const ID_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return fetchWithErrorHandling(ID_URL);
}

// Фетч по айди для поиска актеров по фильму
export function fetchCredits(movieId) {
  const CREDITS_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  return fetchWithErrorHandling(CREDITS_URL);
}

// Фетч по айди для поиска отзывово по фильму
export function fetchReviews(movieId) {
  const REVIEWS_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  return fetchWithErrorHandling(REVIEWS_URL);
}
