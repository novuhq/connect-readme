<template>
    <div>
        <h2> Oops !!!  <br /> No such page found. Use recommended safe route </h2>
        <router-link to="/">--> safe route</router-link>
    </div>
</template>

<style scoped>
div {
    text-align: center;
    line-height: 48px;
    height: 90vh;
    display:flex;
    place-items:center;
    flex-direction: column;
    justify-content: center;
}

a {
    text-decoration: none;
    color: #ff006a;
    font-weight: bolder;
}
</style>