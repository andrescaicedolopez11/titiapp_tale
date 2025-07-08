<template>
  <div class="container py-5 text-center">
    <h4 class="fw-bold text-orange mb-2 burbank seccion_titulo">Instrucción</h4>

    <!-- Ícono de audio -->
    <div class="mb-4">
      <span class="material-symbols-outlined fs-2 seccion_titulo" style="cursor: pointer;" @click="reproducirAudio">
        volume_up
      </span>
    </div>

    <!-- Texto de instrucción -->
    <p class="fs-5 py-2 pb-5">
      Selecciona la sílaba <strong class="fs-3 border pt-0 ps-3 pe-3 text-dark instruccion">{{ silabaObjetivo }}</strong>
    </p>

    <!-- Cuadrícula de sílabas -->
    <div class="grid-container mt-4">
      <div v-for="(silaba, index) in silabasAleatorias" :key="index" class="ejercicio-box" @click="evaluar(silaba)" >
        {{ silaba }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEvaluacionStore } from '@/stores/evaluacionStore'

const router = useRouter()
const store = useEvaluacionStore()

const silabas = [
  'ma', 'ne', 'mi', 'no', 'mu',
  'la', 'te', 'li', 'to', 'lu',
  'pa', 'qe', 'pi', 'qo', 'pu',
  'ba', 'de', 'bi', 'po', 'pu',
  'ua', 've', 'ui', 'vo', 'uu'
]

const cantidad = 15
const silabasAleatorias = ref([])
const silabaObjetivo = ref('')
const ejerciciosRealizados = ref(0)
const maxEjercicios = 3

import audioSilabas from '@/assets/audio/audio_silabas.mp3'

const audio = new Audio(audioSilabas)

const reproducirAudio = () => {
  audio.play()
}

const generarSilabasAleatorias = () => {
  const copia = [...silabas]
  const resultado = []

  for (let i = 0; i < cantidad; i++) {
    const index = Math.floor(Math.random() * copia.length)
    resultado.push(copia.splice(index, 1)[0])
  }

  silabasAleatorias.value = resultado
  silabaObjetivo.value = resultado[Math.floor(Math.random() * resultado.length)]
}

const evaluar = (seleccion) => {
  if (seleccion === silabaObjetivo.value) {
    store.registrarAcierto()
  } else {
    store.registrarError()
  }

  ejerciciosRealizados.value++

  if (ejerciciosRealizados.value < maxEjercicios) {
    generarSilabasAleatorias()
  } else {
    router.push('/EjercicioPalabras')
  }
}

onMounted(() => {
  generarSilabasAleatorias()
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1.5rem;
  justify-content: center;
}

</style>
