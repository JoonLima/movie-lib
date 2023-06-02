<template>
  <div class="card-box">
    <img :src="imagem" alt="imagem" />
    <span class="titulo">
      {{ oFilme.title }}
    </span>
    <span class="nota">
      <v-icon class="star-icon" icon="mdi-star" />
      {{ oFilme.vote_average.toFixed(1) }} ({{ oFilme.vote_count }})
    </span>
    <button class="btn-detalhes" @click="irParaDetalhes">Detalhes</button>
  </div>
</template>

<script>
export default {
  props: ["oFilme", "imagem"],
  methods: {
    irParaDetalhes() {
      this.$router.push({ path: `detalhes/${this.oFilme.id}` });
    },
  },
};
</script>

<style scoped>
.card-box {
  width: 30%;
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--cor-menu);
  padding: 1rem;
}

.titulo {
  font-size: 1.3rem;
}

.card-box img {
  max-width: 100%;
}

.card-box img,
.card-box span {
  margin-bottom: 1rem;
}

.nota {
  display: flex;
  gap: 5px;
}

.star-icon {
  color: var(--cor-secundaria);
  font-size: 1.4rem;
}

.btn-detalhes {
  background-color: var(--cor-secundaria);
  border: 2px solid var(--cor-secundaria);
  border-radius: 4px;
  color: var(--cor-menu);
  padding: 1rem 0.5rem;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  transition: 0.4s;
}

.btn-detalhes:hover {
  background-color: transparent;
  color: var(--cor-secundaria);
}

.card-box .titulo {
  color: #fff;
}
</style>