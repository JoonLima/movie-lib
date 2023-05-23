import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Registro from '@/views/Registro.vue'
import Filmes from '@/views/Filmes.vue'
import Series from '@/views/Series.vue'
import Favoritos from '@/views/Favoritos.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/filmes',
    name: 'filmes',
    component: Filmes
  },
  {
    path: '/series',
    name: 'series',
    component: Series
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: Favoritos
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
