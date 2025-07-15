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
      Selecciona la letra <strong class="fs-3 border pt-0 ps-3 pe-3 text-dark instruccion">{{ letraObjetivo }}</strong>
    </p>
    <!-- Malla de letras -->
    <div class="grid-container mt-4">
      <div v-for="(letra, index) in letrasAleatorias" :key="index" class="ejercicio-box" @click="evaluar(letra)">
        {{ letra }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEvaluacionStore } from '@/stores/evaluacionStore'
import audioLetras from '@/assets/audio/audio_letras.mp3'


const router = useRouter()
const store = useEvaluacionStore()
const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
const cantidad = 15
const letrasAleatorias = ref([])
const letraObjetivo = ref('')
const ejerciciosRealizados = ref(0)
const maxEjercicios = 3
const audio = new Audio(audioLetras)
const reproducirAudio = () => {
  audio.play()
}
const generarLetrasAleatorias = () => {
  const copia = [...alfabeto]
  const resultado = []
  for (let i = 0; i < cantidad; i++) {
    const index = Math.floor(Math.random() * copia.length)
    resultado.push(copia.splice(index, 1)[0])
  }
  letrasAleatorias.value = resultado
  letraObjetivo.value = resultado[Math.floor(Math.random() * resultado.length)]
}
const evaluar = (seleccion) => {
  if (seleccion === letraObjetivo.value) {
    store.registrarAcierto()
  } else {
    store.registrarError()
  }
  ejerciciosRealizados.value++
  if (ejerciciosRealizados.value < maxEjercicios) {
    generarLetrasAleatorias()
  } else {
  router.push('/EjercicioSilabas')
  }
}
onMounted(() => {
  generarLetrasAleatorias()
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1.4rem;
  justify-content: center;
}
</style>
