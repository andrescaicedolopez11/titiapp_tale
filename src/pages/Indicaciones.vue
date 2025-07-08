<template>
  <div>
    <!-- Navegación específica para ejercicios -->
    <NavBarIndicaciones />
    <Instrucciones />
    <Footer />
  </div>
</template>

<script setup>
import NavBarIndicaciones from '@/components/NavBarIndicaciones.vue'
import Instrucciones from '@/components/Instrucciones.vue'
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
