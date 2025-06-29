<template>
  <div class="container py-5 text-center">
    <!-- Título de instrucción -->
    <h4 class="fw-bold text-orange mb-2 burbank seccion_titulo">Instrucción</h4>

    <!-- Ícono de audio -->
    <div class="mb-4">
      <span class="material-symbols-outlined fs-2 seccion_titulo" style="cursor: pointer;">
        volume_up
      </span>
    </div>

    <!-- Texto de instrucción -->
    <p class="fs-5">
      Selecciona la letra <strong class="fs-4 text-dark">{{ letraObjetivo }}</strong>
    </p>

    <!-- Cuadrícula de letras -->
    <div class="grid-container mt-4">
      <div
        v-for="(letra, index) in letrasAleatorias"
        :key="index"
        class="letra-box"
      >
        {{ letra }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Genera letras de la A a la Z
const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')

// Número de letras que se mostrarán en la cuadrícula
const cantidad = 16

const letrasAleatorias = ref([])
const letraObjetivo = ref('')

// Función para obtener letras aleatorias sin repetirse
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

onMounted(() => {
  generarLetrasAleatorias()
})
</script>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 70px);
  grid-gap: 20px;
  justify-content: center;
}

.letra-box {
  width: 70px;
  height: 70px;
  border: 1px solid var(--textcolor);
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  background-color: white;
  transition: background-color 0.2s ease;
  font-family: OpenDyslexic, sans-serif;
}

.letra-box:hover {
     background-color:rgb(254, 215, 160, 0.25)!important;
}


</style>
