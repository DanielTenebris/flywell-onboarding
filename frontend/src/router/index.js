import { createRouter, createWebHistory } from 'vue-router'
import LayoutDesktop from "@/layouts/desktop/LayoutDesktop.vue";
import LayoutMobile from "@/layouts/mobile/LayoutMobile.vue";
import PageMobileHome from "@/features/mobile/home/PageMobileHome.vue";
import PageDesktopDashboard from "@/features/desktop/home/PageDesktopDashboard.vue";
import PageMobileRoadmap from "@/features/mobile/roadmap/PageMobileRoadmap.vue";
import PageMobileLibrary from "@/features/mobile/library/PageMobileLibrary.vue";
import PageMobileLesson from "@/features/mobile/lesson/PageMobileLesson.vue";
import PageMobileQuiz from "@/features/mobile/quiz/PageMobileQuiz.vue";
import PageDesktopEmployees from "@/features/desktop/employees/PageDesktopEmployees";
import PageAuth from "@/features/auth/PageAuth.vue";
import PageDesktopRoadmaps from "@/features/desktop/roadmaps/PageDesktopRoadmaps.vue";
import PageDesktopLessons from "@/features/desktop/lessons/PageDesktopLessons.vue";
import PageDesktopMaterials from "@/features/desktop/materials/PageDesktopMaterials.vue";
import PageDesktopNewRoadmap from "@/features/desktop/roadmaps/new/PageDesktopNewRoadmap.vue";

const routes = [
  {
    path: '/',
    component: PageAuth,
    meta: {
      layout: PageAuth,
    }
  },
  {
    path: '/dashboard',
    component: PageDesktopDashboard,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/employees',
    component: PageDesktopEmployees,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/employees/new',
    component: PageDesktopEmployees,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/roadmaps',
    component: PageDesktopRoadmaps,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/roadmaps/new',
    component: PageDesktopNewRoadmap,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/lessons',
    component: PageDesktopLessons,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/lessons/new',
    component: PageDesktopNewRoadmap,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/materials',
    component: PageDesktopMaterials,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/materials/new',
    component: PageDesktopNewRoadmap,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/tests',
    component: PageDesktopRoadmaps,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/tests/new',
    component: PageDesktopNewRoadmap,
    meta: {
      layout: LayoutDesktop,
    },
  },

  {
    path: '/notifications',
    component: PageDesktopRoadmaps,
    meta: {
      layout: LayoutDesktop,
    },
  },
  {
    path: '/notifications/new',
    component: PageDesktopNewRoadmap,
    meta: {
      layout: LayoutDesktop,
    },
  },
/////////////////////////////////////////////
  {
    path: '/home',
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
  {
    path: '/quiz/:id',
    component: PageMobileQuiz,
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
