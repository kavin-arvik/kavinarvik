import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login_history from "@/views/Login history.vue";
import Add_user from "@/views/Add user.vue";
import Stock_view from "@/views/Stock view.vue";
import Bill_entry from "@/views/Bill entry.vue";
import Stock_entry from "@/views/Stock entry.vue";
import Sales_report from "@/views/Sales report.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/Dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/Login_history",
    name: "login history",
    component: Login_history,
  },
  {
    path: "/Add_user",
    name: "Add user",
    component: Add_user,
  },
  {
    path: "/Stock_view",
    name: "stock view",
    component: Stock_view,
  },
  {
    path: "/Bill_entry",
    name: "bill entry",
    component: Bill_entry,
  },
  {
    path: "/Stock_entry",
    name: "stock entry",
    component: Stock_entry,
  },
  {
    path: "/Sales_report",
    name: "sales report",
    component: Sales_report,
  },
  
  
];

const router = new VueRouter({
  routes,
});

export default router;
