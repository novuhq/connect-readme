<script setup>
import data from '../../data.json'
import CardList from '../CardList.vue'
</script>

<template>
    <section v-if="data">
        <div><h3>Explore Store</h3></div>
        <CardList :data=data /> 
    </section>

    <span v-else style="display: flex; justify-content: center; align-items: center; height: 90vh; color: #ff088c; flex-direction: column;">
		<h2>loading...</h2>
		<small style="color: black">refresh if taking too long</small>
	</span>
</template>


<style scoped>
section div {
    text-align: center;
    padding: 28px;
}

section div h3 {
    color: #ff006a;
    font-weight: 600;
}
</style>