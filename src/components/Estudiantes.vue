<template>
  <div class="container my-5">
    <Buscador @buscar="filtrarEstudiantes" /><!--Aquí se insertó el componente buscador-->
    
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2">
      <div
        class="col"
        v-for="estudiante in estudiantesFiltrados"
        :key="estudiante.id"
      >
        <div class="card h-100">
          <img
            :src="estudiante.avatar"
            alt="Imagen de perfil de usuario"
            class="user_image rounded-circle border-3 border_color mx-auto d-block mt-3"
          />
          <div class="card-body text-center">
            <h3 class="card-title name">{{ estudiante.nombres }}</h3>
            <p class="card-text">{{ calcularEdad(estudiante.fecha_nacimiento) }} años</p>
            <p class="card-text name_school">{{ estudiante.institucion }}</p>
            <div class="d-flex justify-content-center gap-3 mt-3">
              <button type="button" class="btn btn_set">
                <span class="material-symbols-outlined">troubleshoot</span>
              </button>
              <button type="button" class="btn btn_set">
                <span class="material-symbols-outlined">lab_profile</span>
              </button>
              <button type="button" class="btn btn_set">
                <span class="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Buscador from '@/components/Buscador.vue'

const estudiantes = ref([])
const estudiantesFiltrados = ref([])

const cargarEstudiantes = async () => {
  const docenteId = localStorage.getItem('docente_id')
  if (!docenteId) return

  try {
    const res = await axios.get('https://mock.apidog.com/m1/983115-968659-default/estudiantes')
    const data = res.data
      .filter(e => e.docente_id == docenteId)
      .map(e => {
        const nombreArchivo = e.avatar.split('/').pop()
        return {
          ...e,
          avatar: `https://titiapp.ec/tale/${nombreArchivo}`
        }
      })

    estudiantes.value = data
    estudiantesFiltrados.value = data
  } catch (error) {
    console.error('Error al cargar estudiantes:', error)
  }
}

const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date()
  const nacimiento = new Date(fechaNacimiento)
  let edad = hoy.getFullYear() - nacimiento.getFullYear()
  const mes = hoy.getMonth() - nacimiento.getMonth()
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--
  }
  return edad
}

const filtrarEstudiantes = (termino) => {
  const terminoNormalizado = termino.toLowerCase()
  estudiantesFiltrados.value = estudiantes.value.filter(est =>
    est.nombres.toLowerCase().includes(terminoNormalizado)
  )
}

onMounted(cargarEstudiantes)
</script>

<style scoped>
.btn_set {
  background-color: var(--textcolor);
  color: var(--light);
}
.btn_set:hover {
  background-color: var(--complementary);
  color: var(--light);
}
.name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--complementary);
}
.name_school {
  font-size: 0.8rem;
  color: var(--textcolor);
}
.user_image {
  width: 100px;
  height: 100px;
}
.border_color {
  border: solid 30px var(--complementary);
}
</style>
