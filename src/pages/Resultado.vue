<template>
  <div>
   <NavBar />
   
  <div class="container py-5" ref="resultadoPDF">
    
    <div class="text-end mb-2">
      <strong>Fecha:</strong> {{ fechaActual }}
    </div>
    <div class="mb-2">
      <strong>Estudiante:</strong> {{ nombreEstudiante }}<br />
      <strong>Docente:</strong> {{ nombreDocente }}
    </div>

    <div class="text-center my-4">
      <div class="bg-dark text-white rounded-circle d-inline-block px-4 py-3 fs-1">
        {{ store.aciertos }}
      </div>
      <div class="mt-3">
        <span
          v-if="store.aciertos >= 8"
          class="text-success fw-bold"
        >
          No requiere intervención con TitíApp©
        </span>
        <span
          v-else-if="store.aciertos >= 6"
          class="text-warning fw-bold"
        >
          Requiere seguimiento
        </span>
        <span
          v-else
          class="text-danger fw-bold"
        >
          Requiere intervención con TitíApp©
        </span>
        <div class="mt-2 text-secondary">
          Tiempo de ejecución:
          <span>{{ tiempoFormateado }}</span>

        </div>
      </div>
    </div>

    <div class="alert alert-info">
      <h5 class="fw-bold">Aviso importante sobre la prueba diagnóstica basada en el Test TALE</h5>
      <p>
        Esta herramienta no constituye un diagnóstico clínico, sino una prueba de cribado lectoescritor diseñada para identificar tempranamente posibles dificultades en los procesos de lectura y escritura. El resultado de la prueba puede ubicarse en uno de tres niveles:
      </p>
      <ul>
        <li><strong>No requiere intervención</strong>,</li>
        <li><strong>Requiere seguimiento</strong>,</li>
        <li><strong>Requiere intervención con TitíApp©</strong>.</li>
      </ul>
      <p>
        Si el resultado obtenido corresponde a la categoría <strong>"Requiere intervención con TitíApp©"</strong>, se recomienda iniciar el proceso de acompañamiento psicopedagógico utilizando la herramienta interactiva TitíApp©, en coordinación con el docente o el equipo de apoyo psicopedagógico del estudiante. En el caso del resultado <strong>"Requiere seguimiento"</strong>, se sugiere realizar una observación pedagógica sistemática durante las semanas siguientes y aplicar nuevamente la prueba escolar. Solo si el resultado es <strong>"No requiere intervención"</strong>, se concluye una etapa del desarrollo académico habitual.
      </p>
      <p>
        Esta prueba está dirigida especialmente a estudiantes de 6 a 12 años y está pensada como una evaluación inicial, no repetitiva. No debe aplicarse de forma continua como post-test para medir avances, sino que su objetivo es identificar situaciones de riesgo en una primera etapa.
      </p>
      <p>
        Asimismo, los resultados de esta prueba están diseñados para estudiantes que aún no han recibido intervenciones terapéuticas formales. En casos especiales donde el estudiante haya estado expuesto previamente a tratamientos, soportes terapéuticos o estrategias específicas de recuperación, los resultados podrían no reflejar con precisión la situación actual.
      </p>
      <p>
        Del mismo modo, los resultados pueden no ser sensibles en estudiantes con diagnósticos asociados como dislexia, disortografía o trastornos específicos del aprendizaje.
      </p>
      <p>
        En caso de presentarse signos adicionales de dificultad en el aprendizaje, se recomienda consultar con el equipo docente, tutor escolar o psicopedagógico.
      </p>
      <p class="fw-bold">
        Esta prueba es parte del sistema de diagnóstico inicial que acompaña el uso de TitíApp© como herramienta de recuperación psicopedagógica.
      </p>
    </div>

    <div class="text-center mt-4">
      <button class="btn btn-primary" @click="descargarPDF">Descargar informe en PDF</button>
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
  if (!store.tiempoInicio || !store.tiempoFin || total <= 0) return 'No disponible'
  const minutos = Math.floor(total)
  const segundos = Math.round((total - minutos) * 60)
  return `${minutos} min ${segundos} s`
})

const descargarPDF = () => {
  const element = resultadoPDF.value
  const opt = {
    margin: 0.5,
    filename: `Informe_${nombreEstudiante.value.replace(/\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }
  html2pdf().from(element).set(opt).save()
}
</script>


<style scoped>
.bg-dark.rounded-circle {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
}
</style>
