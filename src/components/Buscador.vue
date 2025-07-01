<template>
  <div>
    <!-- Sección buscador -->
    <div class="container my-5 bg_buscador py-3" v-if="!oculto">
      <div class="row justify-content-center align-items-center g-2">
        <!-- Título -->
        <div class="col-12 col-md-2 text-center">
          <h3 class="burbank seccion_titulo">Estudiantes</h3>
        </div>

        <!-- Buscador -->
        <div class="col-12 col-md-8">
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
          <button type="button" class="btn btn_add center_icon" @click="mostrarModal = true">
            <span class="material-symbols-outlined">person_add</span>
            <span class="burbank text_btn"> Agregar</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="mostrarModal" class="modal fade show d-block modal-bg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-auto-width " role="document" >
        <div class="modal-content p-0">
          <div class=" text-end">
            <div class="d-flex">
              <a class="dropdown-item center_icon" href="#" @click.prevent="cerrarModal">
               <span class="material-symbols-outlined fs-4 ms-auto p-3">cancel</span>
               </a> 
            </div>
             
              
           
          </div>
          <regEstudiante />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import regEstudiante from '@/components/regEstudiante.vue'

const props = defineProps({
  oculto: {
    type: Boolean,
    default: false
  }
})

const busqueda = ref('')
const emit = defineEmits(['buscar'])

const emitirBusqueda = () => {
  emit('buscar', busqueda.value.trim().toLowerCase())
}

const mostrarModal = ref(false)
const cerrarModal = () => {
  mostrarModal.value = false
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
