<!-- aquí van la estructura del componente -->
<template>

<div class="container my-5 bg_buscador py-3">
  <div class="row justify-content-center align-items-center g-2">

    <!-- Título: 2 columnas -->
    <div class="col-12 col-md-2 text-center">
      <h3 class="burbank seccion_titulo">Estudiantes</h3>
    </div>

    <!-- Buscador: 8 columnas -->
    <div class="col-12 col-md-8">
      <form class="d-flex gap-2" role="search">
        <input class="form-control" type="search" placeholder="Buscar estudiante (ejm. Carlos Reyes)" aria-label="Search" />
        <button class="btn btn-outline-success center_icon search_btn" type="submit">
          <span class="material-symbols-outlined">search</span>
        </button>
      </form>
    </div>

    <!-- Botón Añadir: 1 columna -->
    <div class="col-12 col-md-1 text-center">
      <button type="button" class="btn btn_add center_icon">
        <span class="material-symbols-outlined">person_add</span>
        <span class="burbank text_btn"> Agregar</span>
      </button>
    </div>

  </div>
</div>



</template>
<!-- aquí va la programación js del componente -->
<script setup>
</script>

<!-- aquí van los estilos del componente -->
<style scoped>

.bg_buscador{
    background-color:rgb(254, 215, 160, 0.25);
  

}
.btn_add{
    background-color: var(--complementary);
    color:var(--light);
}

.btn_add:hover{
    background-color: var(--support);
    color:var(--light);
}
.center_icon {
    display: flex;
    justify-content:left;
    align-items: center;
    gap: 8px; 
  }
  .search_btn{
    background-color: var(--light);
    color:var(--primary);
    border-color: var(--primary);
}

 .search_btn:hover{
    color:var(--light);
    border-color: var(--primary);
    background-color: var(--primary);
}
</style>
