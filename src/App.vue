<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBarEjercicios />
    <Header />
     <RegEstudiante />
    <main class="flex-fill">
      <router-view />
    </main>
   
    <Footer />
  </div>
</template>

<script setup>
import NavBarEjercicios from './components/NavBarEjercicios.vue'
import Header from './components/Header.vue'
import RegEstudiante from './components/regEstudiante.vue'

import Footer from './components/Footer.vue'
</script>
