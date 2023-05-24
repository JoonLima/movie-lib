<template>
  <div class="container">
    <h3>Filmes</h3>
    <div class="cards">
      <card-filme v-for="filme in filmes" :key="filme.id" :oFilme="filme" />
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
    };
  },
  methods: {
    obterTodosOsFilmes() {
      filmesService
        .obterTodos()
        .then((res) => {
          this.filmes = res.data.results;
          console.log(res.data.results);
        })
        .catch();
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

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>