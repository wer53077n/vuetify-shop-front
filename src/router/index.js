import {
  createRouter,
  createWebHashHistory,
  START_LOCATION,
} from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  const user = useUserStore();

  if (from === START_LOCATION) {
    await user.profile();
  }

  if (user.isLogin && ["/register", "/login"].includes(to.path)) {
    next("/");
  } else if (to.meta.login && !user.isLogin) {
    next("/login");
  } else if (to.meta.admin && !user.isAdmin) {
    next("/");
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  document.title = to.meta.title;
});

export default router;
