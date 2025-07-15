<template>
  <div class="container py-5 text-center">
    <h4 class="text-orange mb-2 burbank seccion_titulo">Instrucción</h4>
    <!-- Ícono de audio -->
    <div class="mb-4">
      <span class="material-symbols-outlined fs-2 seccion_titulo" style="cursor: pointer;" @click="reproducirAudio">
        volume_up
      </span>
    </div>
    <p class="fs-5 py-2 pb-5">
      Selecciona la palabra <strong class="fs-3 border pt-0 ps-3 pe-3 text-dark instruccion">{{ palabraObjetivo }}</strong>
    </p>
    <!-- Malla de palabras -->
    <div class="grid-container mt-4">
      <div v-for="(palabra, index) in palabrasAleatorias" :key="index" class="ejercicio-box padding" @click="evaluar(palabra)" >
        {{ palabra }}
      </div>
    </div>
    <p class="fs-5 mt-4">&nbsp;</p> 
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEvaluacionStore } from '@/stores/evaluacionStore'
import audioPalabras from '@/assets/audio/audio_palabras.mp3'

const router = useRouter()
const store = useEvaluacionStore()
const palabras = [
  'mesa', 'luna', 'casa', 'perro', 'gato',
  'sol', 'flor', 'libro', 'silla', 'camino',
  'comino','queso','paso','cuna','dedo',
  'juego', 'niño', 'dado', 'zapato', 'leche'
]
const cantidad = 15
const palabrasAleatorias = ref([])
const palabraObjetivo = ref('')
const ejerciciosRealizados = ref(0)
const maxEjercicios = 3
const audio = new Audio(audioPalabras)
const reproducirAudio = () => {
  audio.play()
}
const generarPalabrasAleatorias = () => {
  const copia = [...palabras]
  const resultado = []

  for (let i = 0; i < cantidad; i++) {
    const index = Math.floor(Math.random() * copia.length)
    resultado.push(copia.splice(index, 1)[0])
  }
  palabrasAleatorias.value = resultado
  palabraObjetivo.value = resultado[Math.floor(Math.random() * resultado.length)]
}
const evaluar = (seleccion) => {
  if (seleccion === palabraObjetivo.value) {
    store.registrarAcierto()
  } else {
    store.registrarError()
  }
  ejerciciosRealizados.value++
  if (ejerciciosRealizados.value < maxEjercicios) {
    generarPalabrasAleatorias()
  } else {
    router.push('/EjercicioOraciones')
  }
}
onMounted(() => {
  generarPalabrasAleatorias()
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1.8rem;
  justify-content: center;
}
.padding{
    padding: 3.5rem;
}
</style>
