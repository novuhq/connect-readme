<script setup>
import { watch, ref, onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
import data from '../../data.json'

const route = useRoute()
let product = ref(0);

const get_data = (id) => data.find(item => item.id === parseInt(id))

watch(() => route.params.id, (newId) => { product = get_data(parseInt(newId)) })
onBeforeMount(() => {product = get_data(route.params.id)})


</script>

<template>
	<section>
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