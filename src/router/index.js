import { createRouter, createWebHistory } from "vue-router";

// Import the views
import HomeView from "@/views/HomeView.vue";
import OngoingEvents from "@/views/OngoingEvents.vue";
import RumoredEvents from "@/views/RumoredEvents.vue";
import OfficialEvents from "@/views/OfficialEvents.vue";
import PastEvents from "@/views/PastEvents.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/ongoing",
    name: "Ongoing Events",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("")
    component: OngoingEvents,
  },
  {
    path: "/rumors",
    name: "Rumors",
    component: RumoredEvents,
  },
  {
    path: "/past",
    name: "Past Events",
    component: PastEvents,
  },
  {
    path: "/official",
    name: "Official Announcements",
    component: OfficialEvents,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
