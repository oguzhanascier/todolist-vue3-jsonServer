<template>
    <nav class="filter-nav">
        <button @click="filterUpd('all')"  :class="{active:activeTab==='all'}">All</button>
        <button @click="filterUpd('will')" :class="{active:activeTab==='will'}">Will Do It</button>
        <button @click="filterUpd('done')" :class="{active:activeTab==='done'}">Done</button>

    </nav>

</template>

<script>
export default {
    props:['activeTab'],
    methods: {
        filterUpd(status) {
            this.$emit('filterStatus', status)

        }
    }

}
</script>

<style scoped>

button{
    display: inline-flex;
    justify-content: center;
    width: 100px;
    margin: 15px;
    transition: all .3s ease-in-out;
    position: relative;
}

.active  {
 width: 100px;
 position: relative;
 transition: all .3s ease-in-out;


}

.active::before{
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 0;

    background: rgba(255, 255, 255, 0.192);
    box-shadow: 0px 1px 1px white;

}


</style>