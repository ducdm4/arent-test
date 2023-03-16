import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import ColumPage from "@/views/ColumPage";
import MyRecord from "@/views/MyRecord";
import Login from "@/views/Login";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  let user = localStorage.getItem("userLoggedIn");
  if (to.path !== "/login" && to.path !== "/column" && user) {
    next();
  } else {
    next({ name: "login" });
  }
};
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: ifAuthenticated,
    meta: {
      title: "My Page - TOP",
    },
  },
  {
    path: "/column",
    name: "column",
    component: ColumPage,
    meta: {
      title: "コラム一覧",
    },
  },
  {
    path: "/record",
    name: "myRecord",
    component: MyRecord,
    beforeEnter: ifAuthenticated,
    meta: {
      title: "自分の記録",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "ログイン",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach((to) => {
  let currentPath = to.name;
  store.commit("updateCurrentPath", currentPath);
  store.commit("updateCurrentPageTitle", to.meta.title);
});
export default router;
