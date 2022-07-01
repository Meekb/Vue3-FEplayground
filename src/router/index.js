import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/services/just-in-time',
      name: 'jit',
      component: () => import('../views/ServiceJIT.vue')
    },
    {
      path: '/services/special-equipment',
      name: 'heavy haul and flatbed',
      component: () => import('../views/ServiceSpEq.vue')
    },
    {
      path: '/services/reefer',
      name: 'refrigerated services',
      component: () => import('../views/ServiceReefer.vue')
    },
    {
      path: '/services/intermodal',
      name: 'intermodal and port services',
      component: () => import('../views/ServiceContainer.vue')
    },
  ]
})

export default router
