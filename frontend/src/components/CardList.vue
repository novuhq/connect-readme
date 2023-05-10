<script setup>
import Item from './Item.vue';

const props = defineProps({data: Array})

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const summarydata = shuffle(props.data).slice(0, 4)
</script>

<template>
	<section class="card-list">
		<template v-for="item in summarydata">
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