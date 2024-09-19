import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import FeaturesPage from '@/components/FeaturesPage.vue'
import PricingPage from '@/components/PricingPage.vue'
import ContactPage from '@/components/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/features', name: 'Features', component: FeaturesPage },
  { path: '/pricing', name: 'Pricing', component: PricingPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
