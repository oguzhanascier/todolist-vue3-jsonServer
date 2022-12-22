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

.todos{
    margin: 12px;
    background: #7432b6;
    padding: 10px;
    border-radius: 20px;
    transition: all .3s ease-in-out;
    box-shadow: 1mm 1mm 8mm rgba(0, 0, 0, 0.42) inset;
    
}


.todos:hover{
    background: #322044;
}


</style>