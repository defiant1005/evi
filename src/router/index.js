import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Main from "@/views/Main";

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'Эвелинка',
    }
  },
  {
    path: '/evelina',
    name: 'main',
    component: Main,
    meta: {
      // layout: 'std-layout',
      title: 'Эвелинка',
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
