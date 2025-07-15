<template>
  <nav class="navbar navbar-expand-lg nav_bg">
    <div class="container-fluid">
      <div class="btn-group usuario">
        <!--Botón perfil de usuario -->
        <button type="button" class="btn btn_user usuario dropdown-toggle center_icon" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="material-symbols-outlined">account_circle</span>
          <span class="burbank usuario">{{ nombreDocente }}</span>
        </button>
        <ul class="dropdown-menu">
          <li>
             <router-link to="/PerfilDocente">
            <span class="dropdown-item center_icon">
              <span class="material-symbols-outlined fs-6">settings</span>Perfil
            </span>
            </router-link>
          </li>
          <li>
            <router-link to="/Novedades">
            <span class="dropdown-item center_icon">
              <span class=" material-symbols-outlined fs-6">notifications</span>Novedades
            </span>
            </router-link>
          </li>
          <li>
            <a class="dropdown-item center_icon" href="#" @click.prevent="mostrarNotificaciones = true">
              <span class="material-symbols-outlined fs-6">mail</span>Notificaciones
            </a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item center_icon" href="#" @click.prevent="cerrarSesion">
              <span class="material-symbols-outlined fs-6">cancel</span>Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
      <!-- Botón Hamburguesa -->
      <button class="navbar-toggler nav_items" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon nav_items"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto btn_size_8">
          <router-link to="/Sesion">
            <span class="px-3 nav-link nav_items burbank">Estudiantes</span>
          </router-link>
          <router-link to="/Tale">
            <span class="px-3 nav-link nav_items burbank">TALE</span>
          </router-link>
          <a class="px-3 nav-link nav_items burbank" href="https://titiapp.ec/" target="_blank">TitíApp©</a>
          <a class="px-3 nav-link nav_items burbank" href="#" @click.prevent="mostrarAyuda = true">Ayuda</a>
        </div>
      </div>
    </div>
    <!-- Ventana Modal de Notificaciones -->
     <div v-if="mostrarNotificaciones" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content p-0">
          <div class="text-end">
            <button class="btn btn-sm btn-light m-2" @click="mostrarNotificaciones = false">
              <span class="material-symbols-outlined">cancel</span>
            </button>
          </div>
          <Notificaciones />
        </div>
      </div>
    </div>
    <!-- Ventana Modal de Ayuda -->
  <div v-if="mostrarAyuda" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content p-0">
      <div class="text-end">
        <button type="button" class="btn btn-sm btn-light m-2" @click="mostrarAyuda = false">
          <span class="material-symbols-outlined">cancel</span>
            </button>
          </div>
          <Ayuda />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Notificaciones from '@/pages/Notificaciones.vue'
import Ayuda from '@/pages/Ayuda.vue'

const router = useRouter()
const nombreDocente = ref('Usuario')
const mostrarNotificaciones = ref(false)
const mostrarAyuda = ref(false)
onMounted(() => {
  const nombre = localStorage.getItem('nombreDocente')
  if (nombre) {
    nombreDocente.value = nombre
  }
})
const cerrarSesion = () => {
  localStorage.clear()
  router.push('/')
}
</script>

<style scoped>
.btn_user {
  color: var(--secondary);
}
.nav_bg {
  background-color: var(--textcolor);
  border-bottom: solid 0.1em var(--complementary);
}
.nav_items {
  color: var(--light);
  padding: 10px;
}
.nav_items:hover {
  color: var(--complementary);
}
.usuario:hover {
  color: var(--complementary);
}
.center_icon {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
}
</style>
