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
            <a class="dropdown-item center_icon" href="#">
              <span class="material-symbols-outlined fs-6">settings</span>Perfil
            </a>
          </li>
          <li>
            <a class="dropdown-item center_icon" href="#">
              <span class="material-symbols-outlined fs-6">notifications</span>Novedades
            </a>
          </li>
          <li>
            <a class="dropdown-item center_icon" href="#">
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
          <a class="px-3 nav-link nav_items burbank" href="#">TALE</a>
          <a class="px-3 nav-link nav_items burbank" href="https://titiapp.ec/" target="_blank">TitíApp©</a>
          <a class="px-3 nav-link nav_items burbank" href="">Ayuda</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nombreDocente = ref('Usuario')

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
.navbar-toggler.nav_items,
.navbar-toggler-icon.nav_items {
  border-color: var(--light);
  background-color: var(--light);
}
</style>
