<template>
  <div class="container py-5">
    <h3 class="text-center burbank seccion_titulo">Indicaciones generales</h3>
    <p class="text-center header2 py-5">
      Lee detenidamente las indicaciones antes de iniciar el Test. <br />
      Recuerda que no es una prueba de velocidad
    </p>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center">
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/tiempo_icon.svg" alt="Ícono de reloj" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">El test no tiene duración.<br />Realiza tu mejor esfuerzo.</p>
    </div>
  </div>
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/proceso_icon.svg" alt="Ícono de proceso" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">Debes realizarlo de inicio a fin. No se puede cancelar.</p>
    </div>
  </div>
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/individual_icon.svg" alt="Ícono de persona" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">Es un test individual.<br />Confía en tus capacidades.</p>
    </div>
  </div>
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/supervision_icon.svg" alt="Ícono de supervisión" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">Debes tener la supervisión de tu profesor.</p>
    </div>
  </div>
</div>
    <!-- Botón Iniciar -->
    <div class="text-center mt-5 my-1">
       <button type="submit" class="btn btn_primario btn_width" @click="irAEjercicios">Iniciar</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useEvaluacionStore } from '@/stores/evaluacionStore'

const router = useRouter()
const evaluacion = useEvaluacionStore()
const irAEjercicios = () => {
  evaluacion.iniciarEvaluacion()
  router.push('/EjercicioLetras')
}
</script>

<style scoped>
.altura {
  min-height: 260px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.txt_instrucciones{
    font-size: 0.9rem !important;
}
.card {
  border-radius: 1rem;
  background-color: #f8f9fa;
}
.btn_width{
  width: 20% !important;
}
</style>
