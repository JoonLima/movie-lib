<template>
  <nav class="nav-container">
    <div class="links">
      <router-link class="logo" to="/">MovieLib</router-link>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/populares">Filmes Populares</router-link>
      <router-link class="link" to="/melhores">Melhores filmes</router-link>
    </div>
    <div class="search">
      <v-text-field
        density="compact"
        variant="solo"
        label="Buscar filmes"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        v-model="pesquisa"
        v-on:keyup.enter="enviarPesquisa"
      ></v-text-field>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pesquisa: "",
    };
  },

  methods: {
    enviarPesquisa() {
      this.$store.state.conteudoPesquisa = this.pesquisa;
      if (this.$route.name !== "/pesquisa")
        this.$router.push({ path: "/pesquisa" });
      this.pesquisa = "";
    },
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  background-color: var(--cor-menu);
  height: 5rem;
}

.links {
  display: flex;
  align-items: center;
}

.links .logo {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 20px;
  color: var(--cor-secundaria);
}

.links .link {
  text-decoration: none;
  color: #fff;
  transition: 0.4s;
  margin: 1.7rem;
}

.link:hover {
  color: #b6b4b4;
}

.search {
  display: flex;
  align-items: center;
  margin: 1.7rem;
  min-width: 200px;
}
</style>