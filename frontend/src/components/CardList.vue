<script setup>
import Item from './Item.vue';
</script>

<template>
	<section class="card-list">
		<Item name="Hello Dough" amount=98 />
		<Item name="Luda Base" amount=98 />
		<Item name="Hello Dough" amount=98 />
		<Item name="Luda Base" amount=98 />
	</section>
</template>

<style scoped>
.card-list {
  padding: 4px 18px;
  display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
  gap: 22px;
}
</style>