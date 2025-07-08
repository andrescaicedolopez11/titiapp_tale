<template>
  <div class="container d-flex justify-content-center align-items-center my-2 mb-5">
    <div class="card padding_caja bg_container shadow" style="max-width: 600px; width: 100%;">
      <form @submit.prevent="handleSubmit">
        <h4 class="text-center mb-4 burbank seccion_titulo">Registro del Estudiante</h4>

        <!-- Campos del formulario -->
        <div class="mb-3" v-for="(label, key) in labels" :key="key">
          <label class="form-label">{{ label }}</label>
          <input v-model="form[key]" :type="key === 'fechaNacimiento' ? 'date' : 'text'" class="form-control" :placeholder="label" />
        </div>

        <!-- Provincia -->
        <div class="mb-3">
          <label class="form-label">Provincia</label>
          <select v-model="form.provincia" class="form-select">
            <option disabled value="">Seleccione una provincia</option>
            <option v-for="prov in provincias" :key="prov" :value="prov">{{ prov }}</option>
          </select>
        </div>

        <!-- Género, lengua nativa, bilingüe (radio) -->
        <div v-for="(grupo, key) in radios" :key="key" class="mb-3">
          <label class="form-label">{{ grupo.label }}</label>
          <div class="form-check" v-for="opcion in grupo.opciones" :key="opcion">
            <input class="form-check-input" type="radio" :id="`${key}-${opcion}`" :value="opcion" v-model="form[key]">
            <label class="form-check-label" :for="`${key}-${opcion}`">{{ opcion }}</label>
          </div>
        </div>

        <!-- Avatar -->
        <div class="mb-4">
          <label class="form-label">Seleccione un avatar</label>
          <div class="d-flex flex-wrap gap-3">
            <label v-for="(avatar, index) in avatars" :key="index" style="cursor: pointer;"
                   :class="{ 'border-primary': form.avatar === avatar }">
              <input type="radio" :value="avatar" v-model="form.avatar" class="d-none" />
              <img :src="avatar" class="user_image rounded-circle border-3 border_color mx-auto mt-1"
                   :style="{ opacity: form.avatar === avatar ? 1 : 0.4 }" />
            </label>
          </div>
        </div>

        <!-- Botón Registrar -->
        <div class="d-flex justify-content-center">
        <button type="button" class="btn burbank text_btn btn_borde m-2" @click="volverInicio">Volver</button>
        <button type="submit" class="btn btn_primario m-2">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'



const router = useRouter()

const volverInicio = () => {
  router.push('/Sesion')
}
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

const labels = {
  nombres: 'Nombres y apellidos',
  fechaNacimiento: 'Fecha de nacimiento',
  unidadEducativa: 'Unidad Educativa',
  ciudad: 'Ciudad'
}

const radios = {
  genero: { label: 'Género', opciones: ['Masculino', 'Femenino'] },
  lenguaNativa: { label: '¿Su lengua nativa es español?', opciones: ['Sí', 'No'] },
  bilingue: { label: '¿Es bilingüe?', opciones: ['Sí', 'No'] }
}

const provincias = [
  'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro',
  'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí',
  'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena',
  'Santo Domingo', 'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
]

const avatars = [
  'https://titiapp.ec/tale/user_1.jpg',
  'https://titiapp.ec/tale/user_2.jpg',
  'https://titiapp.ec/tale/user_3.jpg',
  'https://titiapp.ec/tale/user_4.jpg',
  'https://titiapp.ec/tale/user_5.jpg',
  'https://titiapp.ec/tale/user_6.jpg'
]

const handleSubmit = () => {
  for (const key in form) {
    if (!form[key]) {
      window.alert('Por favor completa todos los campos.')
      return
    }
  }

  const nuevo = {
    id: Date.now(),
    nombres: form.nombres,
    fecha_nacimiento: form.fechaNacimiento,
    institucion: form.unidadEducativa,
    provincia: form.provincia,
    ciudad: form.ciudad,
    genero: form.genero,
    lengua_nativa: form.lenguaNativa,
    bilingue: form.bilingue,
    avatar: form.avatar,
    docente_id: localStorage.getItem('docente_id')
  }

  // Guardar temporalmente en localStorage
  const almacenados = JSON.parse(localStorage.getItem('estudiantes_temporales') || '[]')
  almacenados.push(nuevo)
  localStorage.setItem('estudiantes_temporales', JSON.stringify(almacenados))

  window.alert('Estudiante registrado exitosamente.')
  router.push('/Sesion')
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
