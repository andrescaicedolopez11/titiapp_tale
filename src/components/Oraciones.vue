<template>
  <div class="container py-5 text-center">
    <h4 class="fw-bold text-orange mb-2 burbank seccion_titulo">Instrucción</h4>
    <!-- Ícono de audio -->
    <div class="mb-4">
      <span class="material-symbols-outlined fs-2 seccion_titulo" style="cursor: pointer;" @click="reproducirAudio">
        volume_up
      </span>
    </div>
    <p class="fs-5 py-2 pb-5">
      Selecciona la idea principal de la oración.
    </p>
    <div v-if="ejercicioActual < ejercicios.length" class="mt-4 ">
      <p class="fs-5 border pt-2 py-2 instruccion">{{ ejercicios[ejercicioActual].oracion }}</p>
      <div class="d-flex flex-column align-items-center gap-3 mt-5 ">
        <!-- Botón para Finalizar Diagnóstico -->
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
import audioOracion from '@/assets/audio/audio_oracion.mp3'

const router = useRouter()
const store = useEvaluacionStore()
const audio = new Audio(audioOracion)
const reproducirAudio = () => {
  audio.play()
}
const ejercicios = [
  {
    oracion: 'Esa hilera de puntitos negros y movedizos son hormigas. Están muy atareadas. Tienen que aprovechar el verano y recoger provisiones para los días tan oscuros del invierno. En verano recogen toda la comida que pueden y la meten en su nido.',
    opciones: [
      { texto: 'Las hormigas están muy atareadas recogiendo provisiones durante el verano para el invierno.', esCorrecta: true },
      { texto: 'Las hormigas forman una hilera de puntitos negros y movedizos.', esCorrecta: false }
    ]
  },
  {
    oracion: 'El viejo tren está ahora en un museo. Una sala espaciosa, limpia, cuidada. Ya no sale a trabajar, ya ha terminado el período de fiestas y conmemoraciones. Ahora está ahí quietecito esperando que llegue el atardecer, porque en esos momentos vienen sus amigos a visitarle.',
    opciones: [
      { texto: 'El viejo tren está en un museo, ya no trabaja y recibe visitas por la tarde.', esCorrecta: true },
      { texto: 'La sala donde está el tren es espaciosa, limpia y cuidada.', esCorrecta: false }
    ]
  },
  {
    oracion: 'Voy de paseo con mis padres y mis hermanos. Andamos por la calle, por el paseo y por la plaza. Algunas veces subimos al autobús y vamos más lejos. Vamos al parque. Lo miro todo y pregunto a mis padres lo que no sé.',
    opciones: [
      { texto: 'Salgo de paseo con mi familia, observo todo y hago preguntas a mis padres.', esCorrecta: true },
      { texto: 'A veces tomamos el autobús para ir más lejos, como al parque.', esCorrecta: false }
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
