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
            content:'',
            uri:'http://localhost:3000/ToDos/'+this.id
        }
    },
    methods:{
        todoEdit(){
            fetch(this.uri,{
                method: 'PATCH',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({title:this.title, content:this.content})
            }).then(()=> this.$router.push('/'))
            .catch((err) => console.log(err))
        }
    },
    mounted(){
        fetch(this.uri).then((res)=> res.json()).then(data=>{
            this.title=data.title
            this.content=data.content
        } )
    }

}
</script>

<style>

</style>