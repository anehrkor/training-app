import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/addTraining",
    name: "Add Training",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddTraining.vue")
  },
  {
    path: "/showTrainings",
    name: "Show Trainings",
    component: () => import("../views/ShowTrainings.vue")
  },
  {
    path: "/showRawData",
    name: "Show Raw Training Data",
    component: () => import("../views/ShowRawData.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
