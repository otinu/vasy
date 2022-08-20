import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestCarousel from '../views/TestCarousel.vue'
import TestLoading from '../views/TestLoading.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: TestCarousel
  },
  {
    path: '/loading',
    name: 'loading',
    component: TestLoading
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
