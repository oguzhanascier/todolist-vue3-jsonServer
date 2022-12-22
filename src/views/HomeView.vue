<template>
  <div class="home">
  <h1>To Do App</h1>
  <div v-for="todo in toDos" :key="todo.id">
    {{ todo.title }}
    <p></p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
    toDos :[]

    }
  },
  mounted(){
    fetch('http://localhost:3000/ToDos')
    .then((res)=> res.json()).then((data)=>this.toDos=data)
    .catch((err)=> console.log(err))

  }
}
</script>
