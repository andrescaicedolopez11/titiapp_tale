<template>
  <div class="container d-flex justify-content-center align-items-center my-2 mb-5">
    <div class="card shadow p-4 padding_caja bg_container" style="max-width: 600px; width: 100%;">
      
      <!-- Título -->
      <h4 class="text-center mb-4 burbank seccion_titulo">Perfil del Docente</h4>

      <form @submit.prevent="guardarCambios">
        <!-- Nombres y Apellidos -->
        <div class="mb-3">
          <label class="form-label">Nombre completo</label>
          <input type="text" class="form-control" id="nombreper" v-model="docente.nombres" placeholder="Ej. Carlos Pérez Gómez">
        </div>

        <!-- Cédula -->
        <div class="mb-3">
          <label class="form-label">Cédula de identidad</label>
          <input type="text" class="form-control" id="cedulaper" v-model="docente.cedula" placeholder="ej. 1723454321">
        </div>

        <!-- Correo -->
        <div class="mb-3">
          <label class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="correoper" v-model="docente.correo">
        </div>

        <!-- Unidad educativa -->
        <div class="mb-3">
          <label class="form-label">Unidad Educativa</label>
          <input type="text" class="form-control" id="unidadper" v-model="docente.institucion">
        </div>

        <!-- Provincia -->
        <div class="mb-3">
          <label class="form-label">Provincia</label>
          <select class="form-select" id="provinciaper" v-model="docente.provincia">
            <option selected disabled>Seleccione una provincia</option>
            <option v-for="prov in provincias" :key="prov">{{ prov }}</option>
          </select>
        </div>

        <!-- Ciudad -->
        <div class="mb-3">
          <label class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="ciudadper" v-model="docente.ciudad">
        </div>

        <!-- Subtítulo -->
        <div class="mt-5 mb-4 text-center">
          <h6 class="txt_primary">Datos para inicio de sesión:</h6>
        </div>

        <!-- Usuario -->
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input type="text" class="form-control" id="usuarioper" v-model="docente.usuario">
        </div>

        <!-- Contraseña -->
        <div class="mb-4">
          <label class="form-label">Contraseña</label>
          <input type="text" class="form-control" id="contrasenaper" v-model="docente.contrasena">
        </div>

        <!-- Botones -->
        <div class="d-flex justify-content-center">
         <!-- <button type="button" class="btn burbank text_btn btn_borde m-2" @click="$emit('cerrar')">Volver</button>-->
          <button type="button" class="btn burbank text_btn btn_borde m-2" @click="eliminar">Eliminar</button>
          <button type="submit" class="btn burbank text_btn btn_relleno m-2">Guardar</button>
        </div>

      </form>
       
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const emit = defineEmits(['cerrar'])
const router = useRouter()

const provincias = [
  'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro',
  'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí',
  'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena',
  'Santo Domingo', 'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
]

const docente = ref({
  id: '',
  nombres: '',
  cedula: '',
  correo: '',
  institucion: '',
  provincia: '',
  ciudad: '',
  usuario: '',
  contrasena: ''
})

onMounted(async () => {
  try {
    const id = localStorage.getItem('docente_id')
    const res = await axios.get('https://mock.apidog.com/m1/982903-968444-default/docentes')
    const data = res.data.find(doc => doc.id == id)
    if (data) {
      docente.value = {
        id: data.id || '',
        nombres: data.nombres || '',
        cedula: data.cedula || '',
        correo: data.correo || '',
        institucion: data.institucion || '',
        provincia: data.provincia || '',
        ciudad: data.ciudad || '',
        usuario: data.usuario || '',
        contrasena: data.contrasena || ''
      }
    }
  } catch (error) {
    console.error('Error al obtener docente:', error)
  }
})

const guardarCambios = () => {
  alert('Cambios registrados')

}

const eliminar = () => {
  alert('Registro borrado')
  limpiarFormulario()
  setTimeout(() => {
    router.push('/')
  }, 1000)
}

const limpiarFormulario = () => {
  docente.value = {
    id: '',
    nombres: '',
    cedula: '',
    correo: '',
    unidad_educativa: '',
    provincia: '',
    ciudad: '',
    usuario: '',
    contrasena: ''
  }
}
</script>


<style scoped>
.btn_relleno {
  background-color: var(--complementary);
  color: var(--light);
  width: 40%;
}
.btn_relleno:hover {
  background-color: var(--support);
  color: var(--light);
}
.btn_borde {
  background-color: var(--light);
  color: var(--complementary);
  border: solid 1px var(--complementary);
  width: 30%;
}
.btn_borde:hover {
  background-color: var(--support);
  color: var(--light);
}
.center_icon {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
}
.padding_caja {
  padding: 3rem 6rem !important;
}
.vinculo_btn {
  color: var(--primary);
  text-decoration: underline;
}
.txt_primary {
  color: var(--primary) !important;
}
</style>
