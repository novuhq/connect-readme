<script setup>
import { watch, onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
import data from '../../data.json'


const get_data = (id) => data.find(item => item.id == id)
const route = useRoute()
let product;

onBeforeMount(() => {
	watch(
		() => route.params.id, 
		() => { product = get_data(parseInt(route.params.id)) },
		{immediate: true}
	)
})

</script>

<template>
	<section v-if="product">
		<span>
		</span>

		<div>
			<span style="display: block; margin-bottom: 18px;">
				<h1>{{product.name}}</h1>
				<h4>{{product.price }}</h4>
			</span>
			<small>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam temporibus veniam sunt obcaecati? Consectetur
				quia veniam dolorum eaque repellendus voluptate, voluptatem veritatis consequuntur culpa dolorem architecto nulla,
				cupiditate dicta quae!
			</small>
		</div>
	</section>
	<span v-else style="display: flex; justify-content: center; align-items: center; height: 90vh; color: #ff088c; flex-direction: column;">
		<h2>loading...</h2>
		<small style="color: black">refresh if taking too long</small>
	</span>
</template>


<style scoped>
	section {
		display: flex;
		gap: 8px 32px;
		padding: 12px;
	}

	section>span {
		display: block;
		width: 480px;
		height: 400px;
		min-width: 480px;
		background-color: gainsboro;
	}

	section>div {
		max-width: 500px;
		place-self: center;
	}

	@media screen and (max-width: 920px) {
		section > span {
			width: 390px;
			min-width: 390px;
		}
	}

	@media screen and (max-width: 680px) {
		section {
			flex-wrap: wrap;
		}

		section > span {
			width: 100%;
			min-width: 100%;
			height: 390px;
		}

		section > div {
			width: 100%;
		}
	}
</style>