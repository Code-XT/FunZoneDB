const MOVIE_API = "5b9ad70a337aba4f6b70ceff76e9f775";
const GAMES_API = "3f2b785a063c41b89537064f203afdcc";
const BASE_MAL = "https://api.jikan.moe/v4";
const BASE_Games = `https://api.rawg.io/api/games`;
const BASE_MOVIES = `https://api.themoviedb.org/3`;

export const MALSearch = async (term, type) => {
  const res = await fetch(`${BASE_MAL}/${type}?q=${term}`);
  const data = await res.json();
  return data;
};

export const AnimeDetail = async (id, type) => {
  const res = await fetch(`${BASE_MAL}/${type}/${id}`);
  const data = await res.json();
  return data;
};

export const MALRecommend = async (id, type) => {
  const res = await fetch(`${BASE_MAL}/${type}/${id}/recommendations`);
  const data = await res.json();
  return data;
};

export const TopMAL = async (type) => {
  const res = await fetch(`${BASE_MAL}/top/${type}`);
  const data = await res.json();
  return data;
};

export const GamesSearch = async (term, type) => {
  const res = await fetch(
    `${BASE_Games}?key=${GAMES_API}&search=${term}&search_precise=true&search_exact=true&platforms=${type.join(
      ","
    )}`
  );
  const data = await res.json();
  return data;
};

export const GameDetail = async (id) => {
  const res = await fetch(`${BASE_Games}/${id}?key=${GAMES_API}`);
  const data = await res.json();
  return data;
};

export const MovieSearch = async (term, type) => {
  const res = await fetch(
    `${BASE_MOVIES}/search/${type}?api_key=${MOVIE_API}&query=${term}`
  );
  const data = await res.json();
  return data;
};

export const MovieDetail = async (id, type) => {
  const res = await fetch(`${BASE_MOVIES}/${type}/${id}?api_key=${MOVIE_API}`);
  const data = await res.json();
  return data;
};

export const MovTopRated = async (type) => {
  const res = await fetch(
    `${BASE_MOVIES}/${type}/top_rated?api_key=${MOVIE_API}`
  );
  const data = await res.json();
  return data;
};
