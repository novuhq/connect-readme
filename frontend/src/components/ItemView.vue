<script setup>
const props = defineProps(['name', 'amount'])
</script>

<template>
	<a class="item-card">
		<span></span>
		<h3>{{props.name}}</h3>
		<small>$ {{ props.amount }}</small>
		<h6>buy</h6>
	</a>
</template>


<style scoped>
.item-card {
	max-width: 300px;
}

.item-card span {
	width: 180px;
	height: 210px;
	display: block;
	max-width: 250px;
	margin-bottom: 10px;
	background-color: gainsboro;
}

@media screen and (max-width: 620px) {
	.item-card span {
		width: 130px;
		height: 150px;
	}
}
</style>