<script setup>
import CardList from './components/CardList.vue';
import CategoryView from './components/CategoryView.vue';
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
    <div>
      <h1>NovuRecommend - The New Way to Shop</h1>
      <a>See what's available</a>
    </div>
  </header>

  <main>
    <div>
      <h3 class="section-title" style='text-align:center'>Most Recommended</h3>
      <section class="section-list">
        <div class="section-card">
          <h1>Only the Best Product Based on Relevance to Category</h1>
          <a style="cursor: pointer">view more</a>
        </div>
        <CardList />
      </section>
    </div>

    <div>
      <h3 class="section-title" style='text-align:center'>Recommend By Category</h3>
      <section class="section-list">
        <div class="category-list"> 
          <CategoryView name="Television"/>
          <CategoryView name="Gadgets"/>
          <CategoryView name="Refrigerator"/>
          <CategoryView name="Groceries"/>
        </div>
        <div class="section-card"> 
          <h1>Only the Best Product Based on Relevance to Category</h1>
          <a style="cursor: pointer">view more</a>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
 header div {
  padding: 0 20px;
 }


 .section-list {
  display:flex;
  align-items: center;
 }

 .section-card {
  width: 520px;
  padding: 20px;
 }

 .section-card h1 {
  font-size: 42px;
 }

 .section-card a {
  color: #e300bd;
  font-weight: bolder;
 }

 .category-list {
  flex-grow: 1;
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 32px;
 }

 .campaign-card h4 {
  font-size: 32px;
 }

 @media screen and (max-width: 600px) {
  .section-list {
    flex-wrap: wrap;
  }
 }
</style>
