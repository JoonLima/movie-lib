<template>
  <div
    :style="{
      'background-image': `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detalhes.backdrop_path})`,
    }"
    class="imagem-fundo"
  >
    <div class="container">
      <img
        :src="`https://image.tmdb.org/t/p/w500${detalhes.poster_path}`"
        alt="imagem"
      />
      <div class="conteudo-detalhe">
        <h3>{{ detalhes.title }}</h3>
        <div class="generos">
          <p>Gêneros:</p>
          <p v-for="genero in detalhes.genres" :key="genero">
            {{ genero.name }}
          </p>
        </div>
        <div class="over">
          <h4 class="tagline">{{ detalhes.tagline }}</h4>
          <h5>Sinopse:</h5>
          <p>{{ detalhes.overview }}</p>
        </div>
        <div class="produtoras">
          <span>Produtoras: </span>
          <div
            v-for="prod in detalhes.production_companies"
            :key="prod"
            class="produtora"
          >
            <img
              v-if="prod.logo_path"
              :src="`https://image.tmdb.org/t/p/w500${prod.logo_path}`"
              alt="logo"
            />
            <span>{{ prod.name }}</span>
          </div>
        </div>
        <hr />
        <div class="onde-assistir">
          <span>Onde assistir:</span>
          <div
            v-for="local in ondeAssistir"
            :key="local.provider_id"
            class="local"
          >
            <img
              v-if="local.logo_path"
              :src="`https://image.tmdb.org/t/p/w500${local.logo_path}`"
              alt="logo"
            />
            <span>{{ local.provider_name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filmesService from "@/services/filmes-service";

export default {
  props: ["id"],
  data() {
    return {
      detalhes: [],
      ondeAssistir: [],
    };
  },
  methods: {
    obterDetalhes() {
      filmesService
        .obterDetalhes(this.id)
        .then((res) => {
          this.detalhes = res.data;
        })
        .catch((err) => console.log(err));
    },

    obterOndeAssistir() {
      filmesService
        .obterOndeAssistir(this.id)
        .then((res) => {
          this.ondeAssistir = res.data.results.BR.flatrate;
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    obterImagem(idImagem) {
      return `https://image.tmdb.org/t/p/w500${idImagem}`;
    },
  },

  mounted() {
    this.obterDetalhes(), this.obterOndeAssistir();
  },
};
</script>


<style scoped>
.imagem-fundo {
  background-size: cover;
  background-repeat: no-repeat;
}
.container {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}

.container img {
  height: auto;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.tagline {
  color: #ddd;
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 40px;
  margin-top: 20px;
}

.conteudo-detalhe {
  color: #fff;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #111111e8;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.conteudo-detalhe h3 {
  margin-top: 15px;
}

.generos {
  display: flex;
  gap: 0.5rem;
  color: #ddd;
}

.over {
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
}

.produtoras {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.produtora {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.6rem;
  border-radius: 20px;
  min-height: 40px;
  background-color: #fff;
  color: #111;
  font-weight: 500;
  font-size: 0.9rem;
}

.produtora img {
  height: 20px;
}

.onde-assistir {
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 15px;
  flex-wrap: wrap;
}

.local {
  font-size: 0.9rem;
}

.local span {
  margin-right: 4px;
  font-weight: 500;
}

.local img {
  height: 35px;
  margin-right: 5px;
}
</style>