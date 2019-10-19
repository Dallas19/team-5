/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Internal from "views/internal.jsx";
import Strategy from "views/Strategy.jsx";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/internal",
    name: "Internal",
    icon: "nc-icon nc-diamond",
    component: Internal,
    layout: "/admin"
  },
  {
    path: "/strategy",
    name: "Strategy",
    icon: "nc-icon nc-diamond",
    component: Strategy,
    layout: "/admin"
  }
];
export default routes;
