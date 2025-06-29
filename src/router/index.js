import { createRouter, createWebHistory } from 'vue-router'

// Importar todas las páginas
import Home from '@/pages/Home.vue'


const routes = [
  { path: '/', component: Home },
  //{ path: '/registro-docente', component: RegistroDocente },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
