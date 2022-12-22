<template>
<div>
    <h2>EDIT</h2>
    <small>ID: {{id}}</small>
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
    props:['id'],
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