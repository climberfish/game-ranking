import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RankingView from '@/views/RankingView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'RankingView',
    component: RankingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
