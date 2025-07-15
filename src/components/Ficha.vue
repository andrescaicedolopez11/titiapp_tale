<template>
  <div class="container  p-4 ">
    <div class="text-center">
        <h4 class="text-center mb-4 burbank seccion_titulo">Ficha de evaluación del estudiante</h4>
        <img :src="estudiante.avatar" alt="Imagen de perfil de usuario" class="user_image rounded-circle border-3 border_color mx-auto d-block mt-3" />
        <p class="pt-4"><strong>Fecha:</strong> {{ fecha }}</p>
        <p><strong>Estudiante:</strong> {{ estudiante.nombres }}</p>
        <p><strong>Unidad educativa:</strong> {{ estudiante.institucion }}</p>
        <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p>
        <p><strong>Ciudad:</strong> {{ estudiante.ciudad }}</p>
        <p><strong>Fecha de nacimiento:</strong> {{ estudiante.fecha_nacimiento }}</p>
        <div class="border rounded p-3 mt-4 w-100 mx-auto" :class="colorEvaluacion">
          <p class="mb-1"><strong>Calificación:</strong> {{ estudiante.evaluacion }} aciertos</p>
          <p class="mb-0 burbank">{{ mensajeEvaluacion }}</p>
       </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
const estudiante = ref({})
onMounted(() => {
  const data = localStorage.getItem('estudianteSeleccionado')
  if (data) {
    estudiante.value = JSON.parse(data)
  }
})
const fecha = new Date().toLocaleDateString('es-EC', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
})
const mensajeEvaluacion = computed(() => {
  const aciertos = estudiante.value.evaluacion || 0
  if (aciertos >= 8) return 'No requiere intervención con TitíApp©'
  if (aciertos >= 6) return 'Requiere seguimiento'
  return 'Requiere intervención con TitíApp©'
})
const colorEvaluacion = computed(() => {
  const aciertos = estudiante.value.evaluacion || 0
  if (aciertos >= 8) return 'bg-confirm text-light'
  if (aciertos >= 6) return 'bg-alert text-light'
  return 'bg-error text-light'
})
</script>

<style scoped>
.border {
  border-radius: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
.user_image {
  width: 100px;
  height: 100px;
}
.border_color {
  border: solid 30px var(--complementary);
}
</style>
