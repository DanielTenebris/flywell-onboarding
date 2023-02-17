import { createRouter, createWebHistory } from 'vue-router'
import PageTestOne from "@/features/testOne/PageTestOne.vue";
import PageTestTwo from "@/features/testTwo/PageTestTwo.vue";

const routes = [
  {
    path: '/',
    redirect: '/test1',
  },
  {
    path: '/test1',
    component: PageTestOne,
  },
  {
    path: '/test2',
    component: PageTestTwo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
