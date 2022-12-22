<template>
  <form >
    <label>Title</label>
    <input type="text" v-model="title" required>

    <label>Content</label>
    <input type="text" v-model="content" required>

    <button @click.prevent="todoAdd">Add</button>
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
 methods:{
    todoAdd(){
        let todo= {
             id:Math.floor(Math.random()*99999999),
            "title":this.title,
            "content":this.content,
            "done":false

        }
        console.log(todo);
        fetch('http://localhost:3000/ToDos',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(todo)

        }).then(()=>{
            this.$router.push('/')
        })
    }
 }
}
</script>

<style>

form{
    display: flex;
    flex-direction: column;
    background: rgb(202, 138, 255);
    padding: 20px;
    border-radius: 20px;
    gap: 30px;
    margin-top: 20px;
}

label{
    display: block;
    color: rgb(116, 110, 110);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
}

input{
    border: 2px solid #663399;
    padding: 10px;
    border-radius: 5px;
    outline: none ;
}

button{
   
    border-radius: 15px !important;
    width: 100px;
    border: none;
    background: #663399;
    color: white;
    padding: 10px;
}
</style>