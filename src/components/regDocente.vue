<template>
  <div class="container d-flex justify-content-center align-items-center my-5">
    <div class="card shadow p-4 padding_caja bg_container" style="max-width: 600px; width: 100%;">
      
      <h4 class="text-center mb-4 burbank seccion_titulo">Registro Docente</h4>

      <form @submit.prevent="registrarDocente">
        <div class="mb-3">
          <label class="form-label">Nombres y apellido</label>
          <input v-model="nombre" type="text" class="form-control" placeholder="Ej. Carlos Pérez Gómez">
        </div>

        <div class="mb-3">
          <label class="form-label">Cédula de identidad</label>
          <input v-model="cedula" type="text" class="form-control" placeholder="Ej. 1745678904">
        </div>

        <div class="mb-3">
          <label class="form-label">Correo electrónico</label>
          <input v-model="correo" type="email" class="form-control" placeholder="Ej. carlos@correo.com">
        </div>

        <div class="mb-3">
          <label class="form-label">Nombre de Unidad Educativa</label>
          <input v-model="unidad" type="text" class="form-control" placeholder="Ej. U.E. Nuevo Amanecer">
        </div>

        <div class="mb-3">
          <label class="form-label">Selecciona una provincia</label>
          <select v-model="provincia" class="form-select">
            <option selected disabled>Seleccione una provincia</option>
            <option v-for="prov in provincias" :key="prov">{{ prov }}</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Ciudad</label>
          <input v-model="ciudad" type="text" class="form-control" placeholder="Ej. Quito">
        </div>

        <div class="mt-5 mb-4 text-center">
          <h6 class="txt_primary">Datos para inicio de sesión:</h6>
        </div>

        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input v-model="usuario" type="text" class="form-control" placeholder="Ej. carlos12345">
        </div>

        <div class="mb-4">
          <label class="form-label">Contraseña</label>
          <input v-model="contrasena" type="password" class="form-control" placeholder="********">
        </div>

        <div class="mb-4">
          <label class="form-label">Verificar Contraseña</label>
          <input v-model="contrasenaper" type="password" class="form-control" placeholder="********">
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn burbank text_btn btn_borde m-2" @click="volverInicio">Volver</button>
          <button type="submit" class="btn burbank text_btn btn_relleno m-2">Registrarme</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nombre = ref('')
const cedula = ref('')
const correo = ref('')
const unidad = ref('')
const provincia = ref('')
const ciudad = ref('')
const usuario = ref('')
const contrasena = ref('')
const contrasenaper = ref('')

// Provincias desde el script
const provincias = [
  'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro', 'Esmeraldas',
  'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí', 'Morona Santiago',
  'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo',
  'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
]

const volverInicio = () => {
  router.push('/')
}

const registrarDocente = () => {
  if (
    !nombre.value || !cedula.value || !correo.value || !unidad.value ||
    !provincia.value || !ciudad.value || !usuario.value || !contrasena.value || !contrasenaper.value
  ) {
    alert('Por favor, completa todos los campos del registro.')
    return
  }

  if (contrasena.value !== contrasenaper.value) {
    alert('Las contraseñas no coinciden.')
    return
  }

  alert('Registro exitoso. Sus datos han sido guardados.')

  // Limpiar campos
  nombre.value = ''
  cedula.value = ''
  correo.value = ''
  unidad.value = ''
  provincia.value = ''
  ciudad.value = ''
  usuario.value = ''
  contrasena.value = ''
  contrasenaper.value = ''
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
