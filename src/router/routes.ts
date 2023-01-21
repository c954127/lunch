import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/JoyLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/JoyLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Home.vue") }],
  },
  {
    path: "/meal",
    component: () => import("layouts/JoyLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Meal.vue") }],
  },
  {
    path: "/explore",
    component: () => import("layouts/JoyLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Explore.vue") }],
  },
  {
    path: "/wallet",
    component: () => import("layouts/JoyLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Wallet.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
