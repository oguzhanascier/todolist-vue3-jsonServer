<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <router-link :to="{name:'home'}" tag="a" class="nav-link">HOME</router-link>
            <router-link :to="{name:'form'}" tag="a" class="nav-link">NEW TODO</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
    background: #663399;
    border-bottom: 1px solid rgba(255, 255, 255, 0.252);
    
}
.nav-link {
    color: white !important;
}



</style>