<script setup>
import CardList from '../CardList.vue';
import Category from '../Category.vue';
import { onBeforeMount } from 'vue';
import data from '../../data.json';
</script>

<template>
  <header>
    <div>
      <h1>NovuRecommend - The New Way to Shop</h1>
      <a>See what's available</a>
    </div>
  </header>

  <div id="testimonial-summary">
    <h5><span>948+</span> users has testified to be satisfied with recommended products.</h5>
  </div>

  <main>
    <div style="margin-top: 50px">
      <h3 class="section-title" style='text-align:center'>Recently Recommended</h3>
      <section class="section-list">
        <div class="section-card">
          <h1>Interesting Products Based On Recommendation</h1>
          <a style="cursor: pointer">view more</a>
        </div>
        <CardList :data=data />
      </section>
    </div>

    <div style="margin-top: 180px">
      <h3 class="section-title" style='text-align:center'>Recommend By Category</h3>
      <section class="section-list">
        <div class="category-list"> 
          <Category name="Television"/>
          <Category name="Gadgets"/>
          <Category name="Refrigerator"/>
          <Category name="Groceries"/>
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

 #testimonial-summary {
  background-color: #fb3;
  color: black;
  text-align: center;
  padding: 4px 8px;
 }

 #testimonial-summary span {
  font-weight:bolder;
  color: #ff006a;
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
  font-size: 32px;
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

 @media screen and (max-width: 830px) {
  .section-list {
    flex-wrap: wrap;
  }
 }

 @media screen and (max-width: 820px) {
  header > div > h1 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;
  }
 }
</style>
