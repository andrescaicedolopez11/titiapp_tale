<template>
  <nav class="navbar navbar-expand-lg nav_bg">
    <div class="container-fluid">
      <div class="btn-group usuario">
        <button
          type="button"
          class="btn btn_user usuario dropdown-toggle center_icon"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="material-symbols-outlined">account_circle</span>
          <span class="burbank usuario">{{ nombreDocente }}</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item center_icon" href="#" @click.prevent="mostrarPerfil = true">
              <span class="material-symbols-outlined fs-6">settings</span>Perfil
            </a>
          </li>
          <li>
            <a class="dropdown-item center_icon" href="#" @click.prevent="mostrarNovedades = true">
              <span class="material-symbols-outlined fs-6">notifications</span>Novedades
            </a>
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

      <button
        class="navbar-toggler nav_items"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon nav_items"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto btn_size_8">
          <a class="px-3 nav-link nav_items burbank" href="#" @click.prevent="mostrarTale = true">TALE</a>
          <a class="px-3 nav-link nav_items burbank" href="https://titiapp.ec/" target="_blank">TitíApp©</a>
          <a class="px-3 nav-link nav_items burbank" href="#" @click.prevent="mostrarAyuda = true">Ayuda</a>
        </div>
      </div>
    </div>

    <!-- Modales -->
    <div v-if="mostrarPerfil" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-auto-width" role="document">
        <div class="modal-content p-0">
          <div class="text-end">
            <div class="d-flex">
              <a class="dropdown-item center_icon" href="#" @click.prevent="mostrarPerfil = false">
                <span class="material-symbols-outlined fs-4 ms-auto p-3">cancel</span>
              </a>
            </div>
          </div>
          <perDocente :nombre="nombreDocente" />
        </div>
      </div>
    </div>

    <div v-if="mostrarNovedades" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content p-0">
          <div class="text-end">
            <button class="btn btn-sm btn-light m-2" @click="mostrarNovedades = false">
              <span class="material-symbols-outlined">cancel</span>
            </button>
          </div>
          <Novedades />
        </div>
      </div>
    </div>

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

    <div v-if="mostrarTale" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content p-0">
          <div class="text-end">
            <button class="btn btn-sm btn-light m-2" @click="mostrarTale = false">
              <span class="material-symbols-outlined">cancel</span>
            </button>
          </div>
          <Tale />
        </div>
      </div>
    </div>

    <div v-if="mostrarAyuda" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content p-0">
          <div class="text-end">
            <button class="btn btn-sm btn-light m-2" @click="mostrarAyuda = false">
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
import perDocente from '@/components/perDocente.vue'
import Novedades from '@/pages/Novedades.vue'
import Notificaciones from '@/pages/Notificaciones.vue'
import Tale from '@/pages/Tale.vue'
import Ayuda from '@/pages/Ayuda.vue'

const router = useRouter()
const nombreDocente = ref('Usuario')
const mostrarPerfil = ref(false)
const mostrarNovedades = ref(false)
const mostrarNotificaciones = ref(false)
const mostrarTale = ref(false)
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
