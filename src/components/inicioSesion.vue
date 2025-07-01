<template>
  <div class="container mt-5 d-flex justify-content-center align-items-center min-vh-50">
    <div class="card shadow padding_caja bg_container" style="max-width: 600px; width: 100%;">
      <h4 class="text-center mb-4 burbank seccion_titulo">Inicio de sesión</h4>

      <form @submit.prevent="validarUsuario">
        <div class="mb-3">
          <label class="form-label">Ingresa tu usuario</label>
          <input v-model="usuario" type="text" class="form-control" id="usuario" placeholder="Ej. carlos12345">
        </div>

        <div class="mb-3">
          <label class="form-label">Ingresa tu constraseña</label>
          <input v-model="contrasena" type="password" class="form-control" id="contrasena" placeholder="********">
        </div>

        <div class="mt-4 d-flex justify-content-center">
          <button type="submit" class="btn btn_primario px-4 burbank text_btn">Ingresar</button>
        </div>

        <div class="text-center mt-4 mb-3">
          <a href="#" class="small">Recuperar mi <span class="vinculo_btn">contraseña</span></a>
        </div>

        <div class="mt-4 pb-4 d-flex justify-content-center">
          <button type="button" class="btn btn_gmail">
            <img src="@/assets/gmail_icon.svg" alt="Logo TitíApp" class="align-middle me-2 img-fluid mb-1" style="max-height: 24px;">
            <span class="burbank text_btn">Iniciar con Gmail</span>
          </button>
        </div>

        <div class="text-center">
          <span class="small">¿No tienes cuenta? <a href="#"><span class="vinculo_btn">Registrarme</span></a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const usuario = ref('')
const contrasena = ref('')
const router = useRouter()

const validarUsuario = async () => {
  try {
    const response = await axios.get('https://mock.apidog.com/m1/982903-968444-default/docentes')
    const docentes = response.data

    const docenteValido = docentes.find(docente =>
      docente.usuario === usuario.value && docente.contrasena === contrasena.value
    )

    if (docenteValido) {
      localStorage.setItem('docente_id', docenteValido.id)
      localStorage.setItem('nombreDocente', docenteValido.nombres) // 👈 se guarda el nombre
      router.push('/Sesion')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  } catch (error) {
    console.error('Error al validar usuario:', error)
    alert('Error de conexión con la API')
  }
}
</script>

<style scoped>
.btn_gmail {
  background-color: var(--primary);
  color: var(--light);
  width: 80%;
}
.btn_gmail:hover {
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
  padding: 3rem 8rem;
}
.vinculo_btn {
  color: var(--primary);
  text-decoration: underline;
}
</style>
