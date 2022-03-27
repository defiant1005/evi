import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '../views/Login.vue'
import MainLayouts from "@/layouts/MainLayouts";
import Balda from "@/components/Balda";
import Evelina from "@/components/Evelina";
import SuperGame from "@/components/SuperGame";

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: {
      title: 'Эвелинка',
    }
  },
  {
    path: '/evelina',
    name: 'evelina',
    component: Evelina,
    meta: {
      layout: MainLayouts,
      title: 'Эвелинка',
    }
  },
  {
    path: '/balda',
    name: 'balda',
    component: Balda,
    props: true,
    meta: {
      layout: MainLayouts,
      title: 'Эвелинка',
    }
  },
  {
    path: '/super-game',
    name: 'super-game',
    component: SuperGame,
    meta: {
      layout: MainLayouts,
      title: 'Эвелинка',
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
