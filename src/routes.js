import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Default from "@/layouts/Default.vue";
import HomePage from "./pages/Home.vue";
const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "",
        component: HomePage,
        name: "home-page",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
