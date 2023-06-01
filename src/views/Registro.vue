<template>
  <div class="register-container">
    <div class="box-register">
      <span class="title-register">Criar conta</span>
      <div class="inputs">
        <v-text-field label="Nome" type="text"> </v-text-field>
        <v-text-field label="Email" type="email"> </v-text-field>
        <v-text-field label="Senha" type="password"> </v-text-field>
        <v-text-field label="Confirmar Senha" type="password"> </v-text-field>
      </div>
      <v-checkbox label="Aceito os termos e condições"></v-checkbox>

      <v-btn class="btn-register" color="#E7FF2C" size="large" type="submit">
        Criar
      </v-btn>
      <router-link to="/login" class="have-acc"
        >Já tem uma conta? Entrar</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.register-container {
  height: 100vh;
  display: flex;
  padding-top: 5rem;
}

.box-register {
  margin: 0 auto;
  border: 1px solid var(--cor-secundaria);
  border-radius: 15px;
  background-color: var(--cor-primaria);
  color: #fff;
  height: 38rem;
  width: 25rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 35px;
}

.box-register .title-register {
  font-size: 2rem;
  padding: 0.5rem;
  color: var(--cor-secundaria);
}

.btn-register {
  margin-bottom: 15px;
  color: var(--cor-primaria);
}

.have-acc {
  color: #fff;
  transition: 0.4s;
}

.have-acc:hover {
  color: #ccc;
}

.input-register {
  border: 1px solid var(--cor-secundaria);
  border-radius: 15px;
}
</style>