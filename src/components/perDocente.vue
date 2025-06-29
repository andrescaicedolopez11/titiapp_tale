<!-- aquí van la estructura del componente -->
<template>
<div class="container d-flex justify-content-center align-items-center my-5">
  <div class="card shadow p-4 padding_caja bg_container" style="max-width: 600px; width: 100%;">
    
    <!-- Título -->
    <h4 class="text-center mb-4 burbank seccion_titulo">Perfil del Docente</h4>

    <form>
      <!-- Nombres y Apellidos -->
      <div class="mb-3">
        <label class="form-label">Nombre completo</label>
        <input type="text" class="form-control" id="nombreper" placeholder="Ej. Carlos Pérez Gómez">
      </div>

      <!-- Cédula -->
      <div class="mb-3">
        <label class="form-label">Cédula de identidad</label>
        <input type="text" class="form-control" id="cedulaper" placeholder="ej. 1723454321">
      </div>

      <!-- Correo -->
      <div class="mb-3">
        <label class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="correoper" placeholder="Ej. carlos@correo.com">
      </div>

      <!-- Unidad educativa -->
      <div class="mb-3">
         <label class="form-label">Unidad Educativa</label>
        <input type="text" class="form-control" id="unidadper" placeholder="Ej. U.E. Nuevo Amanecer">
      </div>

      <!-- Provincia -->
      <div class="mb-3">
        <label class="form-label">Provincia</label>

        <select class="form-select" id="provinciaper">
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
        <label class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="ciudadper" placeholder="Ej. Quito">
      </div>

      <!-- Subtítulo -->
      <div class="mt-5 mb-4 text-center">
        <h6 class="txt_primary ">Datos para inicio de sesión:</h6>
      </div>

      <!-- Usuario -->
      <div class="mb-3">
        <label class="form-label">Usuario</label>
        <input type="text" class="form-control" id="usuarioper" placeholder="Ej. carlos12345">
      </div>

      <!-- Contraseña -->
      <div class="mb-4">
        <label class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="contrasenaper" placeholder="********">
      </div>
     

      <!-- Botones -->
      <div class="d-flex justify-content-center">
        <button type="button" class="btn burbank text_btn btn_borde m-2">Volver</button>
        <button type="button" class="btn burbank text_btn btn_borde m-2">Eliminar</button>
        <button type="submit" class="btn burbank text_btn btn_relleno m-2">Guardar</button>
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
