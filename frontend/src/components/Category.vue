<script setup>
const props = defineProps(['name'])
</script>

<template>
	<a class="item-card">
		<span></span>
		<h3>{{props.name}}</h3>
	</a>
</template>

<style scoped>
.item-card {
	max-width: 300px;
    text-align: center;
}

.item-card span {
	width: 180px;
	height: 185px;
	display: block;
	max-width: 250px;
	margin-bottom: 10px;
    border-radius: 100%;
	background-color: gainsboro;
}

@media screen and (max-width: 620px) {
	.item-card span {
		width: 130px;
		height: 130px;
	}
}
</style>