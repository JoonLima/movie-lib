<template>
  <nav :class="{ ativo: menuAtivo }" class="nav-container">
    <button class="btn-mobile" @click="ativarMenu">
      <i class="bx bx-menu"></i>
    </button>
    <router-link class="logo" to="/">MovieLib</router-link>
    <div class="links">
      <router-link @click.prevent="menuAtivo = false" class="link" to="/"
        >Home</router-link
      >
      <router-link
        @click.prevent="menuAtivo = false"
        class="link"
        to="/populares"
        >Filmes Populares</router-link
      >
      <router-link
        @click.prevent="menuAtivo = false"
        class="link"
        to="/melhores"
        >Melhores filmes</router-link
      >
    </div>
    <div class="search">
      <v-text-field
        density="compact"
        variant="solo"
        label="Buscar filmes"
        single-line
        hide-details
        v-model="pesquisa"
        v-on:keyup.enter="enviarPesquisa"
      ></v-text-field>
      <button class="btn-pesquisa"><i class="bx bx-search-alt-2"></i></button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pesquisa: "",
      menuAtivo: false,
    };
  },

  methods: {
    enviarPesquisa() {
      this.$store.state.conteudoPesquisa = this.pesquisa;
      if (this.$route.name !== "/pesquisa")
        this.$router.push({ path: "/pesquisa" });
      this.pesquisa = "";
    },

    ativarMenu() {
      this.menuAtivo = !this.menuAtivo;
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

.logo {
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

.btn-pesquisa {
  color: #fff;
  font-size: 25px;
  margin-top: 5px;
  padding: 5px;
}

.btn-mobile {
  color: #fff;
  font-size: 26px;
  padding: 10px;
  display: none;
}

@media (max-width: 800px) {
  .btn-mobile {
    display: block;
  }

  .links {
    display: none;
    position: absolute;
    width: 100%;
    top: 5rem;
    right: 0;
    background-color: var(--cor-menu);
    height: calc(100vh - 65px);
    z-index: 1000;
    flex-direction: column;
  }

  .links .link {
    margin: 1.2rem;
  }

  .nav-container.ativo .links {
    display: flex;
  }
}
</style>