import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/players",
      name: "players",
      component: () => import("./components/PlayersList")
    },
    {
      path: "/players/:id",
      name: "players-details",
      component: () => import("./components/Player")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddPlayer")
    }
  ]
});