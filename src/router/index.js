import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import EditProfile from "@/pages/EditProfile";
import About from "@/pages/About";
import Page404 from "@/pages/404";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: Profile,
      props: true,
      children: [
        {
          path: "edit",
          component: EditProfile,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "404",
      component: Page404,
    },
  ],
});
