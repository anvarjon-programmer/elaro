import MainCatalog from '@/pages/catalog/MainCatalog.vue'
import Home from '@/pages/Home.vue'
import Promotions from '@/pages/promotions/Promotions.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:Home,
      path:'/',
      component:Home
    },
    {
      name:MainCatalog,
      path:'/mainCatalog',
      component:MainCatalog,
    },
    {
      name:'Promotions',
      path:'/promotions',
      component: Promotions
    }
  ]
})

export default router
