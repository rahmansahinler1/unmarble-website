import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/Privacy.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/Terms.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // If navigating with hash (e.g., /#example)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 0,
      }
    }
    // If browser back/forward button was used
    if (savedPosition) {
      return savedPosition
    }
    // Default: scroll to top
    return { top: 0 }
  },
})

export default router
