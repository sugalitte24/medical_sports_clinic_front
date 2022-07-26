import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import AdminSingIn from "../pages/Admin/SignIn/SignIn";
import AdminUser from "../pages/Admin/User/User";
import AdminPatients from "../pages/Admin/Patients/Patients";

import Home from "../pages/Home";

import Error404 from "../pages/Error404";

const routesAdmin = [
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
    path: "*",
    layout: LayoutAdmin,
    component: Error404,
  },
];

const RoutesMap = [...routesAdmin, ...routesClient];

export default RoutesMap;
