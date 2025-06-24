<!-- aquí van la estructura del componente -->
<template>
 <nav class="navbar navbar-expand-lg nav_bg">
  <div class="container-fluid">

    <img src="@/assets/logotitiapp.svg" alt="Logo TitíApp" class="img-fluid pt-3 mb-3" style="max-height: 60px;">
    <h3 class="header3 pt-3 ms-3">TitíApp© - Diagnóstico</h3>   
  
      
    
        <div class="navbar-nav ms-auto btn_size_8">
              <h3 class="header4 pt-3 me-4">Ejercicio 1 de 10</h3>   

        </div>
      
    </div>
  </nav>
</template>
<!-- aquí va la programación js del componente -->
<script setup>
</script>
<!-- aquí van los estilos del componente -->
<style scoped>
.btn_user{
  color: var(--secondary);
}
.nav_bg{
  background-color: var(--textcolor);
  border-bottom: solid 0.1em var(--complementary);
}
.nav_items{
  color: var(--light);
  padding:10px;
}
.nav_items:hover{
  color: var(--complementary); 
}
.usuario:hover{
  color: var(--complementary);  
}
.center_icon {
    display: flex;
    justify-content:left;
    align-items: center;
    gap: 8px; /* espacio entre icono y texto */
  }
.navbar-toggler.nav_items, .navbar-toggler-icon.nav_items{
   border-color: var(--light);
   background-color: var(--light); 
}
</style>
