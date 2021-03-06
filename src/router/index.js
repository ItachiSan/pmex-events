import Vue from "vue";
import VueRouter from "vue-router";

// Import the views
import Home from "@/views/Home";
import Ongoing from "@/views/Ongoing";
import Rumors from "@/views/Rumors";
import Official from "@/views/Official";
import Past from "@/views/Past";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ongoing",
    name: "Ongoing Events",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("")
    component: Ongoing
  },
  {
    path: "/rumors",
    name: "Rumors",
    component: Rumors
  },
  {
    path: "/past",
    name: "Past Events",
    component: Past
  },
  {
    path: "/official",
    name: "Official Announcements",
    component: Official
  }
];

import { publicPath } from "../../vue.config";

const router = new VueRouter({
  mode: "history",
  base: publicPath,
  routes
});

export default router;
