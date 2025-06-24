<!-- aquí van la estructura del componente -->
<template>
<div class="container d-flex justify-content-center align-items-center my-5">
  <div class="card shadow p-4 padding_caja bg_container" style="max-width: 600px; width: 100%;">
    
    <!-- Título -->
    <h4 class="text-center mb-4 burbank seccion_titulo">Registro Docente</h4>

    <form>
      <!-- Nombres y Apellidos -->
      <div class="mb-3">
        
        <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre completo">
      </div>

      <!-- Cédula -->
      <div class="mb-3">
        <input type="text" class="form-control" id="cedula" placeholder="Ingrese su número de cédula">
      </div>

      <!-- Correo -->
      <div class="mb-3">
        <input type="email" class="form-control" id="correo" placeholder="ejemplo@correo.com">
      </div>

      <!-- Unidad educativa -->
      <div class="mb-3">
        <input type="text" class="form-control" id="unidad" placeholder="Unidad Educativa">
      </div>

      <!-- Provincia -->
      <div class="mb-3">
        <select class="form-select" id="provincia">
          <option selected disabled>Seleccione una provincia</option>
          <option>Azuay</option>
          <option>Bolívar</option>
          <option>Cañar</option>
          <option>Carchi</option>
          <option>Chimborazo</option>
          <option>Cotopaxi</option>
          <option>El Oro</option>
          <option>Esmeraldas</option>
          <option>Galápagos</option>
          <option>Guayas</option>
          <option>Imbabura</option>
          <option>Loja</option>
          <option>Los Ríos</option>
          <option>Manabí</option>
          <option>Morona Santiago</option>
          <option>Napo</option>
          <option>Orellana</option>
          <option>Pastaza</option>
          <option>Pichincha</option>
          <option>Santa Elena</option>
          <option>Santo Domingo</option>
          <option>Sucumbíos</option>
          <option>Tungurahua</option>
          <option>Zamora Chinchipe</option>
        </select>
      </div>

      <!-- Ciudad -->
      <div class="mb-3">
        <input type="text" class="form-control" id="ciudad" placeholder="Ciudad">
      </div>

      <!-- Subtítulo -->
      <div class="mt-5 mb-4 text-center">
        <h6 class="txt_primary ">Datos para inicio de sesión:</h6>
      </div>

      <!-- Usuario -->
      <div class="mb-3">
        <input type="text" class="form-control" id="usuario" placeholder="Nombre de usuario">
      </div>

      <!-- Contraseña -->
      <div class="mb-4">
        <input type="password" class="form-control" id="contrasena" placeholder="********">
      </div>

      <!-- Botones -->
      <div class="d-flex justify-content-center">
        <button type="button" class="btn burbank text_btn btn_borde m-2">Volver</button>
        <button type="submit" class="btn burbank text_btn btn_relleno m-2">Registrarme</button>
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


</style>
