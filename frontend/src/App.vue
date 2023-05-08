<script setup>
import CardList from './components/CardList.vue';
</script>

<template>
  <nav>
    <h3>
      <a id="brand">novuShop</a>
    </h3>

    <div>
      <a>browse</a>
      <a class="cta">Login</a>
    </div>
  </nav>

  <header>
    <div class="wrapper">
      <h1>Easy Shopping with Novu Recommend</h1>
      <a>Browse Now</a>
    </div>
  </header>

  <main>
    <div>
      <h3 class="section-title" style='text-align:center'>Hot Sales</h3>
      <CardList />
    </div>

    <div>
      <h3 class="section-title" style='text-align:center'>Mouth Watering Campaign</h3>
      <section>
        
      </section>
    </div>
  </main>
</template>

<style scoped>
 header div {
  padding: 0 20px;
 }
</style>
