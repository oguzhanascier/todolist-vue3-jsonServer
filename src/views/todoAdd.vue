<template>
  <form @submit.prevent="todoAdd">
    <label>Title:</label>
    <input type="text" v-model="title" required>

    <label>Content</label>
    <input type="text" v-model="content" required>
  </form>
</template>

<script>
export default {

    data(){
        return{
            title:'',
            content:''
        }
    },
    todoAdd(){
        console.log(this.title, this.content);
    }
}
</script>

<style>

</style>