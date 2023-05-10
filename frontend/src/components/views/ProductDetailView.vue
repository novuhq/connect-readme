<script setup> 
	import {watch} from 'vue';
	import {useRouter, useRoute} from 'vue-router';

	const route = useRoute()
	
	watch(
		() => route.params.id, (newId) => {
			// fetch data from API
			console.log("New ID passed: "+ newId)
		}
	)

</script>

<template>
	<div>
		<h3>{{ $route.params }}</h3>
	</div>
</template>