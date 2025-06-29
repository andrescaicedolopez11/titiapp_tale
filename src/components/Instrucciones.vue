<template>
  <div class="container py-5">
    <!-- Título -->
    <h3 class="text-center burbank seccion_titulo">Indicaciones generales</h3>

    <!-- Texto introductorio -->
    <p class="text-center header2 py-5">
      Lee detenidamente las indicaciones antes de iniciar el Test. <br />
      Recuerda que no es una prueba de velocidad
    </p>

    <!-- Fila de Cards -->
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center">
  <!-- Card 1 -->
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/tiempo_icon.svg" alt="Test sin duración" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">El test no tiene duración.<br />Realiza tu mejor esfuerzo.</p>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/proceso_icon.svg" alt="Test sin duración" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">Debes realizarlo de inicio a fin. No se puede cancelar.</p>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/individual_icon.svg" alt="Test sin duración" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">Es un test individual.<br />Confía en tus capacidades.</p>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="col">
    <div class="bg_container shadow-sm p-5 altura">
      <img src="@/assets/supervision_icon.svg" alt="Test sin duración" class="mx-auto mb-3" style="height: 80px;" />
      <p class="mb-0 txt_instrucciones">Debes tener la supervisión de tu profesor.</p>
    </div>
  </div>
</div>

    <!-- Botón iniciar -->
    <div class="text-center mt-5">
              <button type="submit" class="btn burbank text_btn btn_relleno m-2">Iniciar</button>

    </div>
  </div>
</template>

<script setup>
// Este componente no requiere lógica aún, pero puedes usar emits para el botón si lo deseas
</script>

<style scoped>
.altura {
  min-height: 260px; /* ajusta según necesites */
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
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
}

.btn_relleno{
    background-color: var(--complementary);
    color:var(--light);
    width: 20%; 
}
.btn_relleno:hover{
    background-color: var(--support);
    color:var(--light);
}
</style>
