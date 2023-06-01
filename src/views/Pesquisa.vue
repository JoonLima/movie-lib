<template>
  <div class="container">
    <h3>Pesquisa: {{ pesquisa }}</h3>
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
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    pesquisa: "obterTextoPesquisa",
    filmes: "obterFilmesPesquisa",
  }),
  components: { CardFilme },
  methods: {
    obterFilmes() {
      this.$store.commit("obterAPartirDaPesquisa");
    },
  },
  watch: {
    pesquisa() {
      this.obterFilmes();
    },
  },
  mounted() {
    this.obterFilmes();
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