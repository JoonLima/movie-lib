import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Populares from "@/views/Populares.vue";
import Melhores from "@/views/Melhores.vue";
import Detalhes from "@/views/Detalhes.vue";
import Pesquisa from "@/views/Pesquisa.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/populares",
    name: "populares",
    component: Populares,
  },
  {
    path: "/melhores",
    name: "melhores",
    component: Melhores,
  },
  {
    path: "/detalhes/:id",
    name: "detalhes",
    component: Detalhes,
    props: true,
  },
  {
    path: "/pesquisa",
    name: "pesquisa",
    component: Pesquisa,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
