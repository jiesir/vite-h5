import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { createProgressGuard } from './guard';
import { scrollWaiter } from './scrollWaiter';
import basicRoutes from 'router-inject';

// 主框架根路由
const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: App.home,
  meta: {
    title: 'Root',
  },
  children: [],
};

basicRoutes.unshift(RootRoute)

// app router
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: async (to, from, savedPosition) => {
    await scrollWaiter.wait();
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.matched.every((record, i) => from.matched[i] !== record)) {
        return { left: 0, top: 0 };
      }
      return false;
    }
  },
});

// reset router
export function resetRouter() {
  const resetWhiteNameList = [
    'Root'
  ];
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !resetWhiteNameList.includes(name)) {
      router.removeRoute(name);
    }
  });
}

// config router
export function setupRouter(app) {
  app.use(router);
  createProgressGuard(router);
}

export default router;
