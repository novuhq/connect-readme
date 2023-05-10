<script setup>
import Item from './Item.vue';

const props = defineProps({data: Array})
</script>

<template>
	<section class="card-list">
		<template v-for="item in props.data">
			<Item :name=item.name :amount=item.price :id=item.id />
		</template>
	</section>
</template>

<style scoped>
.card-list {
  justify-content: space-evenly;
  padding: 4px 18px;
  flex-wrap: wrap;
  display: flex;
  gap: 58px;
}

@media screen and (max-width: 620px) {
	.card-list {
		justify-content: space-between;
		gap: 22px;
	}
}
</style>