<script setup> 
    const props = defineProps({
        name: String
    })
</script>

<template>
    <div>
        <h3>{{ $route.params }}</h3>
    </div>
</template>