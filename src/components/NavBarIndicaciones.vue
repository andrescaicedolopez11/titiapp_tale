<template>
 <nav class="navbar navbar-expand-lg nav_bg">
  <div class="container-fluid">
    <img src="@/assets/logotitiapp.svg" alt="Logo TitíApp" class="img-fluid pt-2 mb-1 icon-size" >
    <h3 class="header3 pt-3 ms-3">TitíApp© - Diagnóstico</h3>   
      <button class="navbar-toggler nav_items" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon nav_items "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto btn_size_8">
          <router-link to="/Sesion">
            <span class="px-3 nav-link nav_items burbank">Estudiantes</span>
          </router-link>
         </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.icon-size{
  width: 2.2rem;
}
.btn_user{
  color: var(--secondary);
}
.nav_bg{
  background-color: var(--textcolor);
  border-bottom: solid 0.1em var(--complementary);
}
.nav_items{
  color: var(--light);
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
    gap: 8px; 
  }
.navbar-toggler.nav_items, .navbar-toggler-icon.nav_items{
   border-color: var(--light);
   background-color: var(--light); 
}
</style>
