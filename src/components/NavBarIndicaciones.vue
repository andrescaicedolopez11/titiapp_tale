<!-- aquí van la estructura del componente -->
<template>
 <nav class="navbar navbar-expand-lg nav_bg">
  <div class="container-fluid">

    <img src="@/assets/logotitiapp.svg" alt="Logo TitíApp" class="img-fluid pt-3 mb-3" style="max-height: 60px;">
    <h3 class="header3 pt-3 ms-3">TitíApp© - Diagnóstico</h3>   
  
      <button class="navbar-toggler nav_items" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon nav_items "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto btn_size_8">
          <a class="px-3 nav-link nav_items burbank" href="#">TALE</a>
          <a class="px-3 nav-link nav_items burbank" href="https://titiapp.ec/" target="_blank">TitíApp©</a>
          <a class="px-3 nav-link nav_items burbank" href="#">Ayuda</a>
        </div>
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
