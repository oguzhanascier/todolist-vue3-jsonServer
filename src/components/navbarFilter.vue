<template>
    <nav class="filter-nav">
        <button @click="filterUpd('all')" :class="{active:activeStatus==='all'}">All</button>
        <button @click="filterUpd('will')" :class="{active:activeStatus==='will'}">Will Do It</button>
        <button @click="filterUpd('done')" :class="{active:activeStatus==='done'}">Done</button>

    </nav>

</template>

<script>
export default {
    props:['activeTav'],
    methods: {
        filterUpd(status) {
            this.$emit('filterStatus', status)

        }
    }

}
</script>

<style scoped>

button{
    border: 1px solid white;
    margin: 5px;
}

.filter-nav button.active{
    border-bottom: 1px solid white;
}
</style>