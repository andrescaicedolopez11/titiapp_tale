<template>
  <div class="container d-flex justify-content-center align-items-center my-5">
    <div class="card shadow p-4 padding_caja bg_container" style="max-width: 600px; width: 100%;">
      <form @submit.prevent="guardarCambios">
        <h4 class="text-center mb-4 burbank seccion_titulo">Perfil del Estudiante</h4>

        <!-- Formulario Estudiante  -->
        <div class="mb-3">
          <label class="form-label">Nombres y apellidos</label>
          <input v-model="form.nombres" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Fecha de nacimiento</label>
          <input v-model="form.fechaNacimiento" type="date" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Unidad Educativa</label>
          <input v-model="form.unidadEducativa" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Provincia</label>
          <select v-model="form.provincia" class="form-select">
            <option disabled selected>Seleccione una provincia</option>
            <option v-for="prov in provincias" :key="prov">{{ prov }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Ciudad</label>
          <input v-model="form.ciudad" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Género</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="masculino" v-model="form.genero" id="genero-m" />
            <label class="form-check-label" for="genero-m">Masculino</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="femenino" v-model="form.genero" id="genero-f" />
            <label class="form-check-label" for="genero-f">Femenino</label>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">¿Su lengua nativa es español?</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="sí" v-model="form.lenguaNativa" id="nativa-si" />
            <label class="form-check-label" for="nativa-si">Sí</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="no" v-model="form.lenguaNativa" id="nativa-no" />
            <label class="form-check-label" for="nativa-no">No</label>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">¿Es bilingüe?</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="sí" v-model="form.bilingue" id="bilingue-si" />
            <label class="form-check-label" for="bilingue-si">Sí</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="no" v-model="form.bilingue" id="bilingue-no" />
            <label class="form-check-label" for="bilingue-no">No</label>
          </div>
        </div>
        <div class="mb-4">
          <label class="form-label">Seleccione un avatar</label>
          <div class="d-flex flex-wrap gap-3">
            <label v-for="(avatar, index) in avatars" :key="index" style="cursor: pointer;" :class="{ 'border border-primary': form.avatar === avatar }">
              <input type="radio" :value="avatar" v-model="form.avatar" class="d-none" />
              <img :src="`/src/assets/${avatar}`" alt="Imagen de usuario" class="user_image rounded-circle border-3 border_color mx-auto mt-1" :style="{ opacity: form.avatar === avatar ? 1 : 0.4 }"
              />
            </label>
          </div>
        </div>
        <!-- Botones de Formulario -->
        <div class="d-flex justify-content-center">
          <button type="button" class="btn burbank text_btn btn_borde m-2" @click="eliminar">Eliminar</button>
          <button type="submit" class="btn btn_primario m-2">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({ id: String })
const emit = defineEmits(['cerrar', 'eliminado'])
const provincias = [
  'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro',
  'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí',
  'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena',
  'Santo Domingo', 'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
]
const avatars = [
  'user_1.jpg', 'user_2.jpg', 'user_3.jpg',
  'user_4.jpg', 'user_5.jpg'
]
const form = reactive({
  nombres: '',
  fechaNacimiento: '',
  unidadEducativa: '',
  provincia: '',
  ciudad: '',
  genero: '',
  lenguaNativa: '',
  bilingue: '',
  avatar: ''
})
const cargarEstudiante = async () => {
  try {
    const res = await axios.get('https://mock.apidog.com/m1/983115-968659-default/estudiantes')
    const estudiante = res.data.find(e => e.id == props.id)
    if (estudiante) {
      form.nombres = estudiante.nombres
      form.fechaNacimiento = estudiante.fecha_nacimiento
      form.unidadEducativa = estudiante.institucion
      form.provincia = estudiante.provincia
      form.ciudad = estudiante.ciudad
      form.genero = estudiante.genero
      form.lenguaNativa = estudiante.lengua_nativa
      form.bilingue = estudiante.bilingue
      form.avatar = estudiante.avatar?.split('/').pop() || ''
    }
  } catch (error) {
    console.error('Error al cargar estudiante:', error)
  }
}
onMounted(cargarEstudiante)
const guardarCambios = () => {
  alert('Cambios registrados')
}
const eliminar = () => {
  alert('Registro eliminado')
  emit('eliminado', props.id)
  emit('cerrar')
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
.user_image {
  width: 50px;
  height: 50px;
}
.border_color {
  border: solid 30px var(--complementary);
}
</style>
