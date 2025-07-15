<template>
  <div>
   <NavBar />
     <div class="container py-5" ref="resultadoPDF">
        <h3 class="text-center burbank seccion_titulo">Informe de Resultados</h3>
   <div class="mb-2">
      <strong>Fecha:</strong> {{ fechaActual }}<br />
      <strong>Estudiante:</strong> {{ nombreEstudiante }}<br />
      <strong>Docente:</strong> {{ nombreDocente }}
    </div>
    <div class="text-center my-4">
      <div class=" burbank box d-inline-block padding fs-1 rounded">
        {{ store.aciertos }}
      </div>
      <div class="mt-3">
        <p v-if="store.aciertos >= 8" class="confirm-color burbank fw-bold" >
          No requiere intervención con TitíApp© </p> 
        <p v-else-if="store.aciertos >= 6" class="alert-color burbank fw-bold">
          Requiere seguimiento
        </p>
        <p v-else class="error-color burbank fw-bold">
          Requiere intervención con TitíApp©
        </p>
        <div class="mt-2 textcolor-color">
          Tiempo de ejecución:
          <span>{{ tiempoFormateado }}</span>
        </div>
      </div>
    </div>
    <div class="p-5 card shadow padding_caja bg_container lh-base">
      <h5 class="fw-bold ">Aviso importante sobre la prueba diagnóstica basada en el Test TALE</h5>
      <p>Esta herramienta no constituye un diagnóstico clínico, sino una prueba de cribado lectoescritor diseñada para identificar tempranamente posibles dificultades en los procesos de lectura y escritura. El resultado de la prueba puede ubicarse en uno de tres niveles:</p>
      <ul>
        <li class="confirm-color"><strong>No requiere intervención</strong>,</li>
        <li class="alert-color"><strong>Requiere seguimiento</strong>,</li>
        <li class="error-color"><strong>Requiere intervención con TitíApp©</strong>.</li>
      </ul>
      <p>Si el resultado obtenido corresponde a la categoría <strong>"Requiere intervención con TitíApp©"</strong>, se recomienda iniciar el proceso de acompañamiento psicopedagógico utilizando la herramienta interactiva TitíApp©, en coordinación con el docente o el equipo de apoyo psicopedagógico del estudiante. En el caso del resultado <strong>"Requiere seguimiento"</strong>, se sugiere realizar una observación pedagógica sistemática durante las semanas siguientes y aplicar nuevamente la prueba escolar. Solo si el resultado es <strong>"No requiere intervención"</strong>, se concluye una etapa del desarrollo académico habitual.</p>
      <p>Esta prueba está dirigida especialmente a estudiantes de 6 a 12 años y está pensada como una evaluación inicial, no repetitiva. No debe aplicarse de forma continua como post-test para medir avances, sino que su objetivo es identificar situaciones de riesgo en una primera etapa.</p>
      <p>Asimismo, los resultados de esta prueba están diseñados para estudiantes que aún no han recibido intervenciones terapéuticas formales. En casos especiales donde el estudiante haya estado expuesto previamente a tratamientos, soportes terapéuticos o estrategias específicas de recuperación, los resultados podrían no reflejar con precisión la situación actual.</p>
      <p>Del mismo modo, los resultados pueden no ser sensibles en estudiantes con diagnósticos asociados como dislexia, disortografía o trastornos específicos del aprendizaje.</p>
      <p>En caso de presentarse signos adicionales de dificultad en el aprendizaje, se recomienda consultar con el equipo docente, tutor escolar o psicopedagógico.</p>
      <p class="fw-bold">Esta prueba es parte del sistema de diagnóstico inicial que acompaña el uso de TitíApp© como herramienta de recuperación psicopedagógica.</p>
    </div>
    <div class="text-center mt-4">
      <button class="btn btn_primario px-4 burbank text_btn" @click="descargarPDF">Descargar Informe</button>
    </div>
    <p class="margin_bottom">&NonBreakingSpace;</p>
  </div>
   <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useEvaluacionStore } from '@/stores/evaluacionStore'
import { ref, computed, onMounted } from 'vue'
import html2pdf from 'html2pdf.js'

const store = useEvaluacionStore()
const resultadoPDF = ref(null)
const nombreEstudiante = ref('Nombres y apellidos')
const nombreDocente = ref('Nombres y apellidos')
onMounted(() => {
  if (store.tiempoInicio && !store.tiempoFin) {
    store.finalizarEvaluacion()
  }
  const estudianteGuardado = localStorage.getItem('nombreEstudiante')
  const docenteGuardado = localStorage.getItem('nombreDocente')
  if (estudianteGuardado) nombreEstudiante.value = estudianteGuardado
  if (docenteGuardado) nombreDocente.value = docenteGuardado
})
const fechaActual = new Date().toLocaleDateString('es-EC', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
})
const tiempoFormateado = computed(() => {
  const total = store.tiempoTotal
  const minutos = Math.floor(total)
  const segundos = Math.round((total - minutos) * 60)
  return `${minutos} min ${segundos} s`
})
const descargarPDF = () => {
  const element = resultadoPDF.value
  const opt = {
    margin: 0.5,
    filename: `Informe_Resultados.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }
  html2pdf().from(element).set(opt).save()
}
</script>


<style scoped>
.box{
  background-color: var(--textcolor)!important;
  color:var(--light)!important;
}
.padding{
  padding:2rem
}
</style>
