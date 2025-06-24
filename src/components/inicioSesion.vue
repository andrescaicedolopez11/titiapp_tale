<!-- aquí van la estructura del componente -->
<template>
<div class="container mt-5 d-flex justify-content-center  align-items-center min-vh-50">
  <div class="card shadow padding_caja bg_container" style="max-width: 600px; width: 100%;">
    
    <!-- Título -->
    <h4 class="text-center mb-4 burbank seccion_titulo">Inicio de sesión</h4>

    <!-- Formulario -->
    <form>
      <!-- Usuario -->
      <div class="mb-3">
        <input type="text" class="form-control" id="usuario" placeholder="Ingresa tu usuario">
      </div>

      <!-- Contraseña -->
      <div class="mb-3">
        <input type="password" class="form-control" id="contrasena" placeholder="********">
      </div>

      <!-- Botón Ingresar -->
      <div class=" mt-4 d-flex justify-content-center">
  <button class="btn btn_ingresar px-4 burbank text_btn">Ingresar</button>
</div>

      <!-- Texto: recuperar contraseña -->
      <div class="text-center mt-4 mb-3">
        <a href="#" class="small">Recuperar mi <span class="vinculo_btn">contraseña</span> </a>
      </div>

      <!-- Botón: iniciar con Gmail -->
      <div class="mt-4 pb-4 d-flex justify-content-center">
        <button type="button" class="btn btn_gmail">
                   <img src="@/assets/gmail_icon.svg" alt="Logo TitíApp" class=" align-middle me-2 img-fluid mb-1" style="max-height: 24px;">

          <span class="burbank text_btn">Iniciar con Gmail</span>
        </button>
      </div>

      <!-- Texto: no tengo cuenta -->
      <div class="text-center">
        <span class="small">¿No tienes cuenta? <a href="#"><span class="vinculo_btn">Registrarme</span></a></span>
      </div>
    </form>

  </div>
</div>



</template>
<!-- aquí va la programación js del componente -->
<script setup>
</script>

<!-- aquí van los estilos del componente -->
<style scoped>


.btn_ingresar{
    background-color: var(--complementary);
    color:var(--light);
    width: 50%; 
}
.btn_ingresar:hover{
    background-color: var(--support);
    color:var(--light);
}
.btn_gmail{
    background-color: var(--primary);
    color:var(--light);
    width: 80%; 
}
.btn_gmail:hover{
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
    padding: 3rem 8rem;
}
.vinculo_btn{
    color: var(--primary);
    text-decoration: underline;
}



</style>
