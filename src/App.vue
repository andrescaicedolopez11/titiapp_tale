<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBarEjercicios />
    <Header />
     <InicioSesion />
    <main class="flex-fill">
      <router-view />
    </main>
   
    <Footer />
  </div>
</template>

<script setup>
import NavBarEjercicios from './components/NavBarEjercicios.vue'
import Header from './components/Header.vue'
import InicioSesion from './components/inicioSesion.vue'
import Footer from './components/Footer.vue'
</script>
