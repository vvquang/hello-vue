import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: Profile
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
