<template>
  <div class="container my-1 p-5 py-1">
    <h4 class="text-center mb-5 burbank seccion_titulo">Ayuda</h4>
  <h5 class="fw-bold pb-4 primary-color">Acciones para Docentes</h5>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
      <span class="material-symbols-outlined fs-6 icon-size support-color">settings</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Gestiona tu perfil y la información, actulízala o elimina los datos del registro en caso de ser necesario.</p>
    </div>
  </div>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
       <span class=" material-symbols-outlined fs-6 icon-size support-color">notifications</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Revisa las últimas novedades en cuanto se refiere a todos el contexto del proyecto TitíApp© y su aplicación en el aula.</p>
    </div>
  </div>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
      <span class="material-symbols-outlined fs-6 icon-size support-color">mail</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Revisa notificaciones y tips que presenta la herramienta respecto a mejoras o implementaciones para una mejor evaluación.</p>
    </div>
  </div>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
      <span class="material-symbols-outlined fs-6 icon-size support-color">cancel</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">En caso de requerir, cierra tu sesión para dar paso a otro docente en su proceso de evaluación con Test TALE.</p>
    </div>
  </div>

  <h5 class="fw-bold py-5 pb-4 primary-color">Acciones para Estudiantes</h5>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
       <span class="material-symbols-outlined icon-size support-color">person_add</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Agrega un estudiante a la lista personalizada donde se registran los usuarios que se encuentran a tu cargo para la evaluación.</p>
    </div>
  </div>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
      <span class="material-symbols-outlined icon-size support-color">troubleshoot</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Inicia con el proceso de evaluación del estudiante siguendo el proceso establecido por el Test de diagnóstico TALE.</p>
    </div>
  </div>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
      <span class="material-symbols-outlined icon-size support-color">lab_profile</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Consulta el informe de resultados y observa las recomendaciones previo a la aplicación de TitíApp©.</p>
    </div>
  </div>
  <div class="border rounded p-3 mb-3 d-flex align-items-center">
    <div class="me-3">
      <span class="material-symbols-outlined icon-size support-color">settings</span>
    </div>
    <div>
      <p class="mb-0 text-mensaje">Accede al perfil del estudiante, personaliza, actualiza o elimina la información del registro de ser necesario.</p>
    </div>
  </div>
</div>

</template>

<script setup>
</script>

<style scoped>

.text-mensaje {
  font-size: 0.9rem;
  color: var(--text-color);
  padding: 0rem 2rem !important;
}
.icon-size{
  font-size:2rem !important;
  padding: 0rem 0rem 0rem 2rem !important;
  color: var(--support);
}

.modal-content {
  overflow: hidden !important;
}

</style>
