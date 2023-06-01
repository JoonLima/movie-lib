import { createStore } from "vuex";
import filmesService from "@/services/filmes-service";

export default createStore({
  state: {
    filmesPesquisa: [],
    conteudoPesquisa: "",
  },
  getters: {
    obterTextoPesquisa(state) {
      return state.conteudoPesquisa;
    },
    obterFilmesPesquisa(state) {
      return state.filmesPesquisa;
    },
  },
  mutations: {
    obterAPartirDaPesquisa(state) {
      filmesService
        .obterPesquisa(state.conteudoPesquisa)
        .then((res) => {
          state.filmesPesquisa = res.data.results;
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
  },
});
