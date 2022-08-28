import Vue from "vue";
import VueRouter from "vue-router";
import HomeIndex from '@/views/index'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
