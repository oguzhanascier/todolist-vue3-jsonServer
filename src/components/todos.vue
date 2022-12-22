<template>
  <div class="todos">
    <div class="title">
        <h3>{{todos.title}}</h3>
    </div>
    <div class="details">
        <p class="content">
            {{ todos.content }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
    props:['todos']

}
</script>

<style>

</style>