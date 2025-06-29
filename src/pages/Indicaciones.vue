<template>
  <div>
    <!-- Navegación específica para ejercicios -->
    <NavBarIndicaciones />

   

    <div class="container py-5">
      <!-- Título -->
      <h3 class="text-center mb-3 seccion_titulo burbank my-2">Indicaciones generales</h3>

      <!-- Texto introductorio -->
      <p class="text-center header2 mb-5 ">
        Lee detenidamente las indicaciones antes de iniciar el Test. <br />
        Recuerda que no es una prueba de velocidad
      </p>

      <!-- Fila de Cards -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center mt-4">
        <!-- Card 1 -->
        <div class="col">
          
          <div class="card h-100 shadow-sm p-3">
           <img src="@/assets/tiempo_icon.svg" alt="Imagen de perfil de usuario" class="icono d-block mx-auto my-4" />

            <p class="mb-0">El test no tiene duración.<br />Realiza tu mejor esfuerzo</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col">
          <div class="card h-100 shadow-sm p-3">
             <img src="@/assets/proceso_icon.svg" alt="Imagen de perfil de usuario" class="icono d-block mx-auto my-4" />
            <p class="mb-0">Debes realizarlo de inicio a fin.<br />No se puede cancelar el proceso</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col">
          <div class="card h-100 shadow-sm p-3">
             <img src="@/assets/individual_icon.svg" alt="Imagen de perfil de usuario" class="icono d-block mx-auto my-4" />
            <p class="mb-0">Es un test individual.<br />Confía en tus capacidades</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col">
          <div class="card h-100 shadow-sm p-3">
             <img src="@/assets/supervision_icon.svg" alt="Imagen de perfil de usuario" class="icono d-block mx-auto my-4" />
            <p class="mb-0">Debes tener la supervisión<br />de tu profesor</p>
          </div>
        </div>
      </div>

      <!-- Botón iniciar -->
      <div class="text-center mt-5">
        <button class="btn btn_primario px-4 mt-4  btn_width">Iniciar</button>
      </div>
    </div>

    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<script setup>
import NavBarIndicaciones from '@/components/NavBarIndicaciones.vue'
import Footer from '@/components/Footer.vue'
</script>


<style scoped>
.card {
  border: 0px;
  border-radius:  0rem;
  background-color:rgb(254, 215, 160, 0.25);
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
}
.icono{
  width: 5rem;

}
.btn_width{
  width: 20% !important;

}
</style>
