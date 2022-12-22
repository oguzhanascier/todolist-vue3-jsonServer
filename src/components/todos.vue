<template>
  <div class="todos">
    <div class="title">
        <h3  @click="detail" >{{todos.title}}</h3>
        <section class="icons">
            <i class="bi bi-pen"></i>
            <i class="bi bi-trash" @click="deleteTodo"></i>
            <i class="bi bi-check2-all"></i>
    
        </section>
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
          uri:'http://localhost:3000/ToDos/'+this.todos.id
        }
    },

    methods:{
        detail(){
            this.showDetail=!this.showDetail
        },
        deleteTodo(){
            fetch(this.uri, {method:'DELETE'})
            .then(()=> this.$emit('delete', this.todos.id))
            .catch((err) => console.log(err))
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
    padding: 15px 20px 15px 20px;
    
}


.todos:hover{
    background: #322044;
}


h3{
    font-size: 18px;
    color: rgba(217, 192, 192, 0.592);
}

.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bi{
    margin-left: 10px ;
    font-size: 17px;

}

.bi:hover{
    color: #666;
}
.details{
    position: relative;
    padding: 20px;
}
.details::before{
    position: absolute;
    top: 0;
    left:0;
    content: '';
    width: 100%;
    height: 1px;
    background: #663399;

}


</style>