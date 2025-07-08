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
      Selecciona la idea principal de la oración.
    </p>
    <!-- Oración y opciones -->
    <div v-if="ejercicioActual < ejercicios.length" class="mt-4 ">
      <p class="fs-5 border pt-2 py-2 instruccion">{{ ejercicios[ejercicioActual].oracion }}</p>

      <div class="d-flex flex-column align-items-center gap-3 mt-5 ">
        <button
          v-for="(opcion, index) in ejercicios[ejercicioActual].opciones" :key="index" class="ejercicio-box padding " @click="evaluar(opcion)">
          {{ opcion.texto }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useEvaluacionStore } from '@/stores/evaluacionStore'

const router = useRouter()
const store = useEvaluacionStore()


import audioOracion from '@/assets/audio/audio_oracion.mp3'

const audio = new Audio(audioOracion)
const reproducirAudio = () => {
  audio.play()
}

const ejercicios = [
  {
    oracion: 'Mario salió de paseo con sus padres y hermanos. Caminaron por la calle y por la plaza. Subieron a un autobús  para ir mucho más lejos. Por la ventana, Mario mira el paisaje y pregunta a sus papás lo que no sabe.',
    opciones: [
      { texto: 'Mario salió de paaseo ocn sus padres y hermanos.', esCorrecta: true },
      { texto: 'El parque estaba muy lejos de su casa.', esCorrecta: false }
    ]
  },
  {
    oracion: 'La maestra explicó detalladamente la tarea antes de que terminara la clase y pidió que se entregue mañana.',
    opciones: [
      { texto: 'La maestra explicó la tarea y dio la fecha de entrega.', esCorrecta: true },
      { texto: 'Los estudiantes salieron rápido de clase.', esCorrecta: false }
    ]
  },
  {
    oracion: 'El perro buscó su pelota debajo de la mesa y luego la llevó al jardín para jugar solo.',
    opciones: [
      { texto: 'El perro encontró su pelota y jugó con ella.', esCorrecta: true },
      { texto: 'La mesa estaba en el comedor.', esCorrecta: false }
    ]
  }
]

const ejercicioActual = ref(0)

const evaluar = (opcion) => {
if (opcion.esCorrecta) {
    store.registrarAcierto()
  } else {
    store.registrarError()
  }

  ejercicioActual.value++
}

watch(ejercicioActual, (nuevoValor) => {
  if (nuevoValor >= ejercicios.length) {
    router.push('/Resultado')
  }
})
</script>

<style scoped>

.padding{
    
    width:auto;
    font-size: 1rem;
    padding: 1rem 4rem;
    font-family: OpenDyslexic, sans-serif;
    border-radius: 0.2rem;
}
</style>
