import { movieApi } from "./tmdb-api";

function obterTodos() {
  return new Promise((resolve, reject) => {
    return movieApi
      .get("movie/popular")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function obterImagens(id) {
  return new Promise((resolve, reject) => {
    return movieApi
      .get(`movie/${id}/images`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default {
  obterTodos,
  obterImagens,
};
