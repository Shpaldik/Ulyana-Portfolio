import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

import Home from './components/Home.vue'
import Project from './components/Project.vue';
import SmmCase from "./components/SmmCase.vue"; 
import BrandCase from "./components/BrandCase.vue";


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home }, 
  { path: '/project', component: Project }, 
  { path: "/case/smm/:id", component: SmmCase },
  { path: "/case/brand/:id", component: BrandCase },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router)

app.mount('#app')
