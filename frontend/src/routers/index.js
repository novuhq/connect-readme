import {createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../components/views/HomeView.vue';
import ProductDetailView from '../components/views/ProductDetailView.vue';


const routes = [
    {path: '/', component: HomeView, name: 'home'}, 
    {path: '/p/:id(\\d+)/', component: ProductDetailView, name: 'productdetail'},
    { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('../components/NotFound.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router