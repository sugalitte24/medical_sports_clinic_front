import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn/SignIn";
import AdminUser from "../pages/Admin/User/User";
import AdminPatients from "../pages/Admin/Patients/Patients";
import AdminMenuWeb from "../pages/Admin/MenuWeb/MenuWeb";

import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Error404 from "../pages/Error404";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/patients",
    layout: LayoutAdmin,
    component: AdminPatients,
  },
  {
    path: "admin/login",
    layout: LayoutBasic,
    component: AdminSingIn,
  },
  {
    path: "admin/users",
    layout: LayoutAdmin,
    component: AdminUser,
  },
  {
    path: "admin/menuWeb",
    layout: LayoutAdmin,
    component: AdminMenuWeb,
  },
  {
    path: "*",
    layout: LayoutAdmin,
    component: Error404,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
  {
    path: "*",
    layout: LayoutAdmin,
    component: Error404,
  },
];

const RoutesMap = [...routesAdmin, ...routesClient];

export default RoutesMap;
