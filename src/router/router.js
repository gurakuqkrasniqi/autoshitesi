import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../components/pages/TheHome.vue";
import AdminPanel from "../components/Admin/AdminPanel.vue";
import SignIn from "../components/Admin/SignIn.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "TheHome",
    component: TheHome,
  },
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel,
    meta: {
      requiresAuth: true,
    },
    beforeEnter: (to, from, next) => {
      if (getAuth().currentUser) {
        next();
      }
      next("/signIn");
    },
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  // process.env.BASE_URL
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
