import { createRouter, createWebHistory } from 'vue-router'

// Importar todas las páginas necesarias
import Home from '@/pages/Home.vue'
import Sesion from '@/pages/Sesion.vue'
import RegistroDocente from '@/pages/RegistroDocente.vue'
import PerfilDocente from '@/pages/PerfilDocente.vue'
import RegistroEstudiante from '@/pages/RegistroEstudiante.vue'
import Novedades from '@/pages/Novedades.vue'
import Tale from '@/pages/Tale.vue'
import Ayuda from '@/pages/Ayuda.vue'
import FichaEstudiante from '@/pages/FichaEstudiante.vue'
import Indicaciones from '@/pages/Indicaciones.vue'
import EjercicioLetras from '@/pages/EjercicioLetras.vue'
import EjercicioSilabas from '@/pages/EjercicioSilabas.vue'
import EjercicioPalabras from '@/pages/EjercicioPalabras.vue'
import EjercicioOraciones from '@/pages/EjercicioOraciones.vue'
import Resultado from '@/pages/Resultado.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/Sesion', component: Sesion },
  { path: '/RegistroDocente', component: RegistroDocente },
  { path: '/PerfilDocente', component: PerfilDocente },
  { path: '/RegistroEstudiante', component: RegistroEstudiante },
  { path: '/Novedades', component: Novedades },
  { path: '/Tale', component: Tale },
  { path: '/Ayuda', component: Ayuda },
  {path: '/FichaEstudiante', component: FichaEstudiante },
  { path: '/Indicaciones', component: Indicaciones },
  { path: '/EjercicioLetras', component: EjercicioLetras },
  { path: '/EjercicioSilabas', component: EjercicioSilabas },
  { path: '/EjercicioPalabras', component: EjercicioPalabras },
  { path: '/EjercicioOraciones', component: EjercicioOraciones },
  { path: '/Resultado', component: Resultado },
]

const router = createRouter({
  
  history: createWebHistory(),
  routes,
})

export default router
