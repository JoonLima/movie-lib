<template>
  <v-card class="mx-auto my-12 card" min-width="300" max-width="300">
    <v-img
      cover
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ oFilme.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Gênero</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn class="btn-detalhes" width="100%" size="large" variant="text"
        >Detalhes</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["oFilme"],
};
</script>

<style scoped>
.btn-detalhes {
  color: var(--cor-primaria);
  background-color: var(--cor-secundaria);
}

.card {
  background-color: var(--cor-primaria);
  color: #fff;
  border: 1px solid var(--cor-secundaria);
}
</style>