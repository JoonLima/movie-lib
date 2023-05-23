<template>
  <div class="app">
    <nav-bar v-if="checkRoute" />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',

  components: {NavBar},

  data: () => ({
    //
  }),

  computed:{
    checkRoute(){
      if(this.$route.name == 'login'){
        return false
      }else if(this.$route.name == 'registro'){
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}

.app{
  background-color: var(--cor-primaria);
}

:root{
  --cor-primaria: #322F2F;
  --cor-menu: #272424;
  --cor-secundaria: #E7FF2C;
}


</style>
