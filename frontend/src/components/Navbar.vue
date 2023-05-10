<template>
  <nav>
    <h3>
      <router-link to="/" id="brand">novuShop</router-link>
    </h3>

    <div>
      <router-link :to="{name: 'explore'}">browse</router-link>
      <a class="cta">Login</a>
    </div>
  </nav>
</template>