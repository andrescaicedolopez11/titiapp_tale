import { createRouter, createWebHistory } from 'vue-router'

// Importar todas las páginas necesarias
import Home from '@/pages/Home.vue'
import Sesion from '@/pages/Sesion.vue' 
import RegistroDocente  from '@/pages/RegistroDocente.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/Sesion', component: Sesion }, 
  { path: '/RegistroDocente', component: RegistroDocente },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
