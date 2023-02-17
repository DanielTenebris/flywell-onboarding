import { createRouter, createWebHistory } from 'vue-router'
import PageTestOne from "@/features/testOne/PageTestOne.vue";
import PageTestTwo from "@/features/testTwo/PageTestTwo.vue";
import LayoutDesktop from "@/layouts/desktop/LayoutDesktop.vue";
import LayoutMobile from "@/layouts/mobile/LayoutMobile.vue";

const routes = [
  {
    path: '/',
  },
  {
    path: '/desktop',
    component: PageTestOne,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/mobile',
    component: PageTestTwo,
    meta: {
      layout: LayoutMobile,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
