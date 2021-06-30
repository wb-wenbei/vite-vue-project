import { createRouter, createWebHistory } from "vue-router";

const Layout = () =>
  import(/* webpackChunkName: "Layout" */ "../views/layout/index.vue");

const routes = [
  {
    path: "/",
    redirect: () => {
      return { path: "/home" };
    },
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "Error" */ "../views/error/404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
