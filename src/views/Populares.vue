<template>
  <div class="container">
    <h3>Filmes mais populares</h3>
    <div class="container-filme">
      <card-filme
        v-for="filme in filmes"
        :key="filme.id"
        :oFilme="filme"
        :imagem="`https://image.tmdb.org/t/p/w500${filme.poster_path}`"
      />
    </div>
  </div>
</template>

<script>
import CardFilme from "@/components/CardFilme.vue";
import filmesService from "@/services/filmes-service";

export default {
  components: { CardFilme },
  data() {
    return {
      filmes: [],
      img: "",
    };
  },
  methods: {
    obterTodosOsFilmes() {
      filmesService
        .obterTodos()
        .then((res) => {
          this.filmes = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    obterImagem(idImagem) {
      return `https://image.tmdb.org/t/p/w500${idImagem}`;
    },
  },
  mounted() {
    this.obterTodosOsFilmes();
  },
};
</script>


<style scoped>
.container h3 {
  text-align: center;
  color: #fff;
  padding-top: 3rem;
}

.container-filme {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>