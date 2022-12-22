<template>
  <div class="home">
    <h1>To Do App</h1>
    <div v-if="toDos.length > 0">
      <div v-for="todo in toDos" :key="todo.id">
        <todos :todos="todo" @delete="deleteHandle" @done="doneHandle" />
      </div>
    </div>
    <div v-else>
      <h3>You didn't add anything to do... Refresh the page if you think there is an error</h3>
    </div>
  </div>
</template>

<script>
import todos from '../components/todos.vue'
export default {
  components: { todos },
  name: 'HomeView',
  data() {
    return {
      toDos: []

    }
  },
  methods: {
    deleteHandle(id) {
      this.toDos = this.toDos.filter(todo => {
        return todo.id !== id
      })
    },
    doneHandle(id){
      let isDone= this.toDos.find(todos =>{
        return todos.id==id
      })
      isDone.done=!isDone.done
      
    }
  },
  mounted() {
    fetch('http://localhost:3000/ToDos')
      .then((res) => res.json()).then((data) => this.toDos = data)
      .catch((err) => console.log(err))

  }
}
</script>
