import { createRouter, createWebHistory } from 'vue-router'
import main from '@/views/main.vue'
import our_service from "@/views/our-service.vue"
import singUp from "@/views/auth/sing-up.vue"
import singIn from "@/views/auth/sing-in.vue"
import profile from "@/views/profile/main-profile.vue"
import profile_record from "@/views/profile/profile-record.vue"
import profile_pet from "@/views/profile/profile-pet.vue"
import error from "@/views/error/error.vue"
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: main
  },
  {
    path: '/our-service',
    name: 'our-service',
    component: our_service
  },
  {
    path: '/sing-up',
    name: 'sing-up',
    component: singUp
  },
  {
    path: '/sing-in',
    name: 'sing-in',
    component: singIn
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: error
  },
  {
    path: '/profile',
    name: 'main-profile',
    component: profile
  },
  {
    path: '/profile-record',
    name: 'profile-record',
    component: profile_record
  },
  {
    path: '/profile-pet',
    name: 'profile-pet',
    component: profile_pet
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
