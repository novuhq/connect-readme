import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router';

import './assets/main.css';
import App from './App.vue'
import HomeView from './components/views/HomeView.vue'


const routes = [
    {path: '/', component: HomeView}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
