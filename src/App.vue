<template>
  <navbar></navbar>
  <router-view></router-view>
</template>
<script>
import navbar from './components/navbar.vue';
export default{
components:{navbar}
}
</script>
<style>
#app{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  color: #f2f2f2;
  max-width: 850px;
  margin: 0 auto;
}
body{
  background: #663399 !important;
}



</style>
