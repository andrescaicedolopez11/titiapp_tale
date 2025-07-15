<template>
  <div>
   <NavBar />
<div class="container mt-5 my-2">
  <h4 class="text-center mb-4 burbank seccion_titulo">Test TALE</h4>
  <div class="d-flex flex-wrap mb-4 p-4">
    <h2 class=" txt_size_titulo fw-bold mb-3">¿Qué es el Test TALE?</h2>
  <p class="txt_size">El <strong>Test de Análisis de Lectoescritura (TALE)</strong> es una herramienta psicopedagógica estandarizada diseñada para evaluar el nivel de desarrollo de las habilidades básicas de lectura y escritura en niños de educación general básica, principalmente entre los 6 y 12 años de edad.</p>
  <p class="txt_size">Este test permite identificar con precisión las dificultades específicas del aprendizaje relacionadas con los procesos de codificación (escritura) y decodificación (lectura), facilitando así una intervención oportuna y personalizada.</p>
    <h2 class=" txt_size_titulo mt-4 fw-bold">¿Para qué sirve?</h2>
  <p class="txt_size">El objetivo principal del TALE es detectar tempranamente trastornos del aprendizaje, como la dislexia o disortografía, así como determinar el nivel de desempeño del niño en tareas relacionadas con:</p>
  <ul class="txt_size">
    <li>Reconocimiento de letras, sílabas y palabras</li>
    <li>Comprensión lectora</li>
    <li>Producción escrita</li>
  </ul>
  <p class="txt_size">Sus resultados permiten clasificar a los estudiantes en diferentes niveles de necesidad: desde un desarrollo adecuado, hasta casos que requieren intervención intensiva. También brinda al docente o psicopedagogo información valiosa para planificar estrategias de mejora o recuperación.</p>
<h2 class=" txt_size_titulo mt-4 fw-bold">¿Cuál es su estructura?</h2>
  <p class="txt_size">El objetivo principal del TALE es detectar tempranamente trastornos del aprendizaje, como la dislexia o disortografía, así como determinar el nivel de desempeño del niño en tareas relacionadas con:</p>
  <ul class="txt_size">
    <li>Identificación de letras</li>
      <li>Identificación de sílabas</li>
    <li>Lectura de palabras y frases</li>
    <li>Comprensión de textos (según la edad del estudiante)</li>
  </ul>
  <p class="txt_size">Cada prueba analiza tipos de errores como omisiones, sustituciones, adiciones, inversiones, fragmentaciones y errores fonológicos.
    La valoración final clasifica el rendimiento del estudiante en categorías: <strong>adecuado</strong>, <strong>leve</strong>, <strong>moderado</strong> o <strong>severo</strong>.</p>
  <h3 class="mt-4 txt_size_titulo fw-bold">¿Cómo se aplica?</h3>
  <p class="txt_size">El TALE se aplica de manera individual, aunque ciertas pruebas de escritura pueden realizarse en forma grupal si el contexto lo permite.
    Su aplicación tiene una duración promedio de <strong>30 a 50 minutos</strong>, dependiendo del ritmo y edad del estudiante. El evaluador debe: </p>
  <ul class="txt_size">
    <li>Dar instrucciones claras (verbales y/o escritas)</li>
    <li>Registrar el número y tipo de errores</li>
    <li>Observar el comportamiento del estudiante (esfuerzo, autocorrección, actitud)</li>
    <li>Generar un informe con resultados cuantitativos y cualitativos</li>
  </ul>
  <p class="txt_size">Este informe sirve como base para diseñar programas de recuperación como el que propone <strong>TitíApp©</strong>,plataforma que continúa el proceso de apoyo pedagógico de forma interactiva.</p>
  <p class="margin_bottom">&NonBreakingSpace;</p>
 </div>
</div>
<Footer />
</div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.txt_size_titulo{
  font-size: 1.2rem;
   color: var(--primary);
}
.txt_size{
  font-size: 0.9rem !important;
}
</style>