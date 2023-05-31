import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Registro from "@/views/Registro.vue";
import Populares from "@/views/Populares.vue";
import Melhores from "@/views/Melhores.vue";
import Favoritos from "@/views/Favoritos.vue";
import Detalhes from "@/views/Detalhes.vue";

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
    path: "/favoritos",
    name: "favoritos",
    component: Favoritos,
  },
  {
    path: "/detalhes/:id",
    name: "detalhes",
    component: Detalhes,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
