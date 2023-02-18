import { createRouter, createWebHistory } from 'vue-router'
import LayoutDesktop from "@/layouts/desktop/LayoutDesktop.vue";
import LayoutMobile from "@/layouts/mobile/LayoutMobile.vue";
import PageMobileHome from "@/features/mobile/home/PageMobileHome.vue";
import PageDesktopDashboard from "@/features/desktop/home/PageDesktopDashboard.vue";
import PageMobileRoadmap from "@/features/mobile/roadmap/PageMobileRoadmap.vue";
import PageMobileLibrary from "@/features/mobile/library/PageMobileLibrary.vue";
import PageMobileLesson from "@/features/mobile/lesson/PageMobileLesson.vue";

const routes = [
  {
    path: '/',
  },
  {
    path: '/dashboard',
    component: PageDesktopDashboard,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/',
    component: PageMobileHome,
    meta: {
      layout: LayoutMobile,
    },
  },
  {
    path: '/roadmap',
    component: PageMobileRoadmap,
    meta: {
      layout: LayoutMobile,
    },
  },
  {
    path: '/library',
    component: PageMobileLibrary,
    meta: {
      layout: LayoutMobile,
    },
  },
  {
    path: '/lesson/:id',
    component: PageMobileLesson,
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