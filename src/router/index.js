import Vue from "vue";
import VueRouter from "vue-router";
import Allshow from "../components/Allshow.vue";
import Search from "../components/Search.vue";
import ShowDetails from "../components/ShowDetails";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Allshow",
    component: Allshow
  },
  {
    path: "/search/:query",
    name: "Search",
    component: Search
  },
  {
    path: "/shows/:id",
    name: "ShowDetails",
    props: true,
    component: ShowDetails
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
