<template>
  <div>
   <NavBar />
<div class="container mt-5 my-2">
  <h4 class="text-center mb-4 burbank seccion_titulo">Novedades</h4>
  <!-- Noticia 1 -->
  <div class="d-flex flex-wrap mb-4 shadow p-4">
    <div class="col-md-3 mb-3 mb-md-0 text-center">
      <img src="@/assets/noticia_1.webp" class="img-fluid rounded shadow" alt="Noticia 1">
    </div>
    <div class="col-md-8 ps-md-4">
      <h4 class="burbank seccion_titulo txt_size_titulo">TitíApp impulsa la transformación educativa en Ecuador</h4>
      <h6 class="header6">
        02 de junio de 2025</h6>
      <br>
      <p class="text-justify txt_size">
        La plataforma digital TitíApp©, desarrollada por la Universidad Indoamérica, se ha convertido en una herramienta clave para mejorar el proceso de aprendizaje en lectoescritura en estudiantes de educación básica. Gracias a su enfoque lúdico e interactivo, integra recursos audiovisuales, actividades dinámicas y un entorno gráfico inspirado en la geografía y cultura del Ecuador. Esta aplicación permite detectar dificultades lectoras en etapas tempranas, facilitando intervenciones pedagógicas más efectivas. Además, su diseño centrado en el usuario favorece la comprensión y el compromiso del niño con el proceso de evaluación, transformando una actividad tradicionalmente invasiva en una experiencia significativa.
      </p>
    </div>
  </div>
  <!-- Noticia 2 -->
  <div class="d-flex flex-wrap mb-4 shadow p-4">
    <div class="col-md-3 mb-3 mb-md-0 text-center">
      <img src="@/assets/noticia_2.webp" class="img-fluid rounded shadow" alt="Noticia 1">
    </div>
    <div class="col-md-8 ps-md-1">
      <h4 class="burbank seccion_titulo txt_size_titulo">TitíApp ya beneficia a decenas de instituciones y cientos de niños en Ecuador</h4>
      <h6 class="header6">25 de mayo de 2025</h6>
      <br>
      <p class="text-justify txt_size">
        El impacto de TitíApp© se refleja en su implementación efectiva en más de 83 instituciones educativas a lo largo del país, beneficiando a centenares de estudiantes entre los 6 y 12 años. En un estudio realizado en Tungurahua con 46 niños, se evidenció una mejora significativa en la lectura tras el uso de la aplicación, validada mediante la prueba de Wilcoxon. La reducción de errores y tiempos de ejecución confirma su eficacia en contextos reales. Adicionalmente, se han establecido convenios institucionales con distritos educativos en Pimampiro y otras zonas, lo cual ha permitido replicar exitosamente la herramienta en comunidades rurales y urbanas. 
      </p>
    </div>
  </div>
  <!-- Noticia 3 -->
  <div class="d-flex flex-wrap mb-4 shadow p-4">
    <div class="col-md-3 mb-3 mb-md-0 text-center">
      <img src="@/assets/noticia_3.webp" class="img-fluid rounded shadow" alt="Noticia 1">
    </div>
    <div class="col-md-8 ps-md-1">
      <h4 class="burbank seccion_titulo txt_size_titulo">Avanza el proyecto de adaptación de TitíApp al contexto colombiano</h4>
      <h6 class="header6">11 de abril de 2025</h6>
      <br>
      <p class="text-justify txt_size">
        La Universidad Indoamérica ha iniciado un proyecto de cooperación internacional para adaptar TitíApp© al contexto educativo colombiano. Esta iniciativa busca replicar el éxito alcanzado en Ecuador mediante una contextualización cultural que incluya ajustes visuales, lingüísticos y pedagógicos. La fase inicial contempla la validación de contenidos en comunidades educativas rurales, donde se enfrentan desafíos similares en lectoescritura. El equipo interdisciplinario trabaja en conjunto con instituciones locales para asegurar que la herramienta conserve su efectividad al tiempo que se adapta a las características culturales y lingüísticas del nuevo entorno. 
      </p>
    </div>
  </div>
   <p class="margin_bottom">&NonBreakingSpace;</p>
</div>
<Footer />
</div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.bg_color{
  background-color: red;
}
.txt_size_titulo{
  font-size: 1.5rem;
  color: var(--primary);
}
.txt_size{
  font-size: 0.8rem;
}
</style>