import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import defaultLayout from "../layout/defaultLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/m/main'
  },
  {
    path: '/m/',
    component: defaultLayout,
    children: [
      {
        path: '',
        redirect: '/main'
      },
      {
        path: 'main',
        component: () => import('@/views/main/index.vue'),
      },
      {
        path: 'main/graphs',
        component: () => import("@/views/main/graphs/index.vue")
      },
      {
        path: 'profile',
        component: () => import('@/views/profile/index.vue')
      },
      {
        path: 'plan',
        component: () => import('@/views/plan/index.vue')
      },
      {
        path: 'library',
        component: () => import('@/views/library/index.vue')
      },
      {
        path: 'library/article/:id',
        component: () => import('@/views/library/article/index.vue')
      },
      {
        path: 'chat',
        component: () => import('@/views/chat/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
