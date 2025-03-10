// @ts-ignore
import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home }, // Redirected page after login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
