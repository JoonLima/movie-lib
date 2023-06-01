<template>
  <nav class="nav-container">
    <div class="links">
      <router-link class="logo" to="/">MovieLib</router-link>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/populares">Filmes Populares</router-link>
      <router-link class="link" to="/melhores">Melhores filmes</router-link>
      <!-- <router-link class="link" to="/favoritos">Meus Favoritos </router-link> -->
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
    <!-- <div class="login">
      <router-link class="btn login-btn" to="/login">Login</router-link>
      <router-link class="btn register-btn" to="/registro"
        >Registro</router-link
      >
    </div> -->
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
      if (this.$route.name !== "pesquisa")
        this.$router.push({ path: "pesquisa" });
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

.login {
  display: flex;
  align-items: center;
}

.login .btn {
  text-decoration: none;
  color: #fff;
  padding: 7px;
  margin: 1.2rem;
  transition: 0.4s;
}
.link:hover,
.login .login-btn:hover {
  color: #b6b4b4;
}

.register-btn {
  border-radius: 10px;
  border: 1px solid var(--cor-secundaria);
  transition: 0.4s;
}

.register-btn:hover {
  background-color: var(--cor-secundaria);
  color: var(--cor-primaria);
}

.search {
  display: flex;
  align-items: center;
  margin: 1.7rem;
  min-width: 200px;
}
</style>