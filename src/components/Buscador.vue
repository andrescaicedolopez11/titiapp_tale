<template>
  <div>
    <div class="container my-5 bg_buscador py-3" v-if="!oculto">
      <div class="row justify-content-center align-items-center g-2">
          <div class="col-12 col-md-2 text-center">
          <h3 class="burbank seccion_titulo">Estudiantes</h3>
        </div>
        <div class="col-12 col-md-8">
           <!-- Sección buscador -->
          <form class="d-flex gap-2" @submit.prevent>
            <input
              class="form-control"
              type="search"
              placeholder="Buscar estudiante (ejm. Carlos Reyes)"
              aria-label="Search"
              v-model="busqueda"
              @input="emitirBusqueda"
            />
          </form>
        </div>
        <!-- Botón Añadir -->
        <div class="col-12 col-md-1 text-center">
          <button type="button" class="btn btn_add center_icon" @click="irARegistro">
            <span class="material-symbols-outlined">person_add</span>
            <span class="burbank text_btn"> Agregar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const busqueda = ref('')
const emit = defineEmits(['buscar'])
const router = useRouter()
const emitirBusqueda = () => {
  emit('buscar', busqueda.value.trim().toLowerCase())
}
const irARegistro = () => {
  router.push('/RegistroEstudiante')
}
</script>

<style scoped>
.bg_buscador {
  background-color: rgb(254, 215, 160, 0.25);
}
.btn_add {
  background-color: var(--complementary);
  color: var(--light);
}
.btn_add:hover {
  background-color: var(--support);
  color: var(--light);
}
.center_icon {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
}
.search_btn {
  background-color: var(--light);
  color: var(--primary);
  border-color: var(--primary);
}
.search_btn:hover {
  color: var(--light);
  border-color: var(--primary);
  background-color: var(--primary);
}
</style>
