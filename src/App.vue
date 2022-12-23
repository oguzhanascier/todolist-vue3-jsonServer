<template>
  <div>
    <navbar></navbar>
    <navbar-filter @filterStatus="activeTab = $event" :aciveTab="activeTab"></navbar-filter>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from './components/navbar.vue';
import navbarFilter from './components/navbarFilter.vue';
export default {
  components: { navbar, navbarFilter },
  data() {
    return {

      activeTab:'all'
    }
  }
}
</script>
<style>
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  color: #f2f2f2;
  max-width: 850px;
  margin: 0 auto;
}

body {
  background: #663399 !important;
}
</style>
