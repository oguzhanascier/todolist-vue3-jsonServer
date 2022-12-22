<template>
  <div class="todos" @click="detail">
    <div class="title">
        <h3>{{todos.title}}</h3>
    </div>
    <div class="details" v-if="showDetail">
        <p class="content">
            {{ todos.content }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
    props:['todos'],
    data(){
        return{
          showDetail: false,  
        }
    },

    methods:{
        detail(){
            this.showDetail=!this.showDetail
        }
    }

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
    cursor: pointer;
    
}


.todos:hover{
    background: #322044;
}


h3{
    font-size: 18px;
    color: rgba(217, 192, 192, 0.592);
}


</style>