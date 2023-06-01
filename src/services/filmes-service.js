import { movieApi } from "./tmdb-api";

function obterTodos() {
  return new Promise((resolve, reject) => {
    return movieApi
      .get("movie/popular?language=pt-BR")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function obterTodosTopRated() {
  return new Promise((resolve, reject) => {
    return movieApi
      .get("movie/top_rated?language=pt-BR")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function obterDetalhes(id) {
  return new Promise((resolve, reject) => {
    return movieApi
      .get(`movie/${id}?language=pt-BR`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function obterOndeAssistir(id) {
  return new Promise((resolve, reject) => {
    return movieApi
      .get(`movie/${id}/watch/providers?language=pt-BR`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function obterPesquisa(query) {
  return new Promise((resolve, reject) => {
    return movieApi
      .get(`search/movie?query=${query}&language=pt-BR`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default {
  obterTodos,
  obterTodosTopRated,
  obterDetalhes,
  obterOndeAssistir,
  obterPesquisa,
};
