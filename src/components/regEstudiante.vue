<template>
<div class="container d-flex justify-content-center align-items-center my-5">
  <div class="card shadow p-4 padding_caja bg_container" style="max-width: 600px; width: 100%;">
  <form @submit.prevent="handleSubmit">
    <!-- Título -->
    <h4 class="text-center mb-4 burbank seccion_titulo">Registro del Estudiante</h4>

    <!-- Nombres -->
    <div class="mb-3">
     <label class="form-label">Nombres y apellidos</label>
      <input v-model="form.nombres" type="text" class="form-control" placeholder="Ej. Juanita Pérez" />
    </div>

    <!-- Fecha de nacimiento -->
    <div class="mb-3">
      <label class="form-label">Fecha de nacimiento</label>
      <input v-model="form.fechaNacimiento" type="date" class="form-control" />
    </div>

    <!-- Unidad Educativa -->
    <div class="mb-3">
      <label class="form-label">Unidad Educativa</label>
      <input v-model="form.unidadEducativa" type="text" class="form-control" placeholder="U.E. Nuevo Amanecer" />
    </div>

    <!-- Provincia -->
    <div class="mb-3">
      <label class="form-label">Provincia</label>
      <select v-model="form.provincia" class="form-select">
        <option disabled selected>Seleccione una provincia</option>
        <option v-for="prov in provincias" :key="prov" :value="prov">{{ prov }}</option>
      </select>
    </div>

    <!-- Ciudad -->
    <div class="mb-3">
      <label class="form-label">Ciudad</label>
      <input v-model="form.ciudad" type="text" class="form-control" placeholder="Ej. Quito" />
    </div>

    <!-- Género -->
    <div class="mb-3">
      <label class="form-label">Género</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="Masculino" v-model="form.genero" id="genero-m">
        <label class="form-check-label" for="genero-m">Masculino</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="Femenino" v-model="form.genero" id="genero-f">
        <label class="form-check-label" for="genero-f">Femenino</label>
      </div>
    </div>

    <!-- Lengua nativa español -->
    <div class="mb-3">
      <label class="form-label">¿Su lengua nativa es español?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="Sí" v-model="form.lenguaNativa" id="nativa-si">
        <label class="form-check-label" for="nativa-si">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="No" v-model="form.lenguaNativa" id="nativa-no">
        <label class="form-check-label" for="nativa-no">No</label>
      </div>
    </div>

    <!-- Bilingüe -->
    <div class="mb-3">
      <label class="form-label">¿Es bilingüe?</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="Sí" v-model="form.bilingue" id="bilingue-si">
        <label class="form-check-label" for="bilingue-si">Sí</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="No" v-model="form.bilingue" id="bilingue-no">
        <label class="form-check-label" for="bilingue-no">No</label>
      </div>
    </div>

    <!-- Avatar -->
    <div class="mb-4">
      <label class="form-label">Seleccione un avatar</label>
      <div class="d-flex flex-wrap gap-3">
        <label
          v-for="(avatar, index) in avatars"
          :key="index"
          :class="{ 'border-primary': form.avatar === avatar }"
          style="cursor: pointer;"
        >
          <input type="radio" :value="avatar" v-model="form.avatar" class="d-none" />
          <img :src="avatar" :alt="'avatar' + index" class="user_image rounded-circle border-3 border_color mx-auto mt-1" :style="{ opacity: form.avatar === avatar ? 1 : 0.4 }" />
        </label>
      </div>
    </div>

    <!-- Botones -->
     <!-- Botones -->
      <div class="d-flex justify-content-center">
        <button type="button" class="btn burbank text_btn btn_borde m-2">Volver</button>
        <button type="submit" class="btn burbank text_btn btn_relleno m-2">Registrar</button>
      </div>
  </form>
 </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    default: 'Registro de Estudiante'
  },
  estudiante: {
    type: Object,
    default: () => ({
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
  }
})

const emit = defineEmits(['submit'])

const form = reactive({ ...props.estudiante })

const handleSubmit = () => {
  emit('submit', { ...form })
}

const provincias = [
  'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro',
  'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí',
  'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena',
  'Santo Domingo', 'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
]

const avatars = [
  new URL('@/assets/user_1.jpg', import.meta.url).href,
  new URL('@/assets/user_2.jpg', import.meta.url).href,
  new URL('@/assets/user_3.jpg', import.meta.url).href,
  new URL('@/assets/user_4.jpg', import.meta.url).href,
  new URL('@/assets/user_5.jpg', import.meta.url).href,
  new URL('@/assets/user_6.jpg', import.meta.url).href
]
</script>

<!-- aquí van los estilos del componente -->
<style scoped>


.btn_relleno{
    background-color: var(--complementary);
    color:var(--light);
    width: 40%; 
}
.btn_relleno:hover{
    background-color: var(--support);
    color:var(--light);
}

.btn_borde{
    background-color: var(--light);
    color:var(--complementary);
    border: solid 1px var(--complementary);
    width: 30%; 
}
.btn_borde:hover{
    background-color: var(--support);
    color:var(--light);
}
.center_icon {
    display: flex;
    justify-content:left;
    align-items: center;
    gap: 8px; 
  }
.padding_caja{
    padding: 3rem 6rem !important;
}
.vinculo_btn{
    color: var(--primary);
    text-decoration: underline;
}

.txt_primary{
    color: var(--primary)!important;

}
.user_image{
    width: 50px;
    height: 50px; 
}

.border_color{
   border: solid 30px var(--complementary);

}

</style>
