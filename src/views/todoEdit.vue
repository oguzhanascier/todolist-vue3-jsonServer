<template>
<div>
    <h2>EDİT</h2>
    <form >
        <label>Title</label>
        <input type="text" v-model="title" required>
    
        <label>Content</label>
        <input type="text" v-model="content" required>
    
        <button @click.prevent="todoEdit">Add</button>
      </form>
</div>
  </template>
  

<script>
export default {
    data(){
        return{
            title:'',
            content:''
        }
    },

}
</script>

<style>

</style>