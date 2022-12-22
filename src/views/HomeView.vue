<template>
  <div class="home">
    <h1>To Do App</h1>
    <div v-if="toDos.length > 0">
      <div v-for="todo in toDos" :key="todo.id">
        <p>{{ todo.title }}</p>
      </div>
    </div>
    <div v-else>
      <h3>You didn't add anything to do... Refresh the page if you think there is an error</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toDos: []

    }
  },
  mounted() {
    fetch('http://localhost:3000/ToDos')
      .then((res) => res.json()).then((data) => this.toDos = data)
      .catch((err) => console.log(err))

  }
}
</script>
