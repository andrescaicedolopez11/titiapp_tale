import { createRouter, createWebHistory } from 'vue-router'

// Importar todas las páginas necesarias
import Home from '@/pages/Home.vue'
import Sesion from '@/pages/Sesion.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/Sesion', component: Sesion }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
