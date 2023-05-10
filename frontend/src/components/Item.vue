<script setup>
	const props = defineProps(['name', 'amount', 'id'])
</script>

<template>
	<span class="item-card">
		<span></span>
		<h3><router-link :to="{name: 'productdetail', params:{id: props.id}}" >{{props.name}}</router-link></h3>
		<small>$ {{ props.amount }}</small>
	</span>
</template>


<style scoped>
a {
	text-decoration: none;
	color: #113024;
}

.item-card {
	max-width: 140px;
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