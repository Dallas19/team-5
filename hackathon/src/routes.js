/*!

=========================================================
* Paper Impacts React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Impacts from "views/Impacts.jsx";
import Internal from "views/Internal.jsx";

var routes = [
  {
    path: "/Impacts",
    name: "Impact Councils",
    icon: "nc-icon nc-bank",
    component: Impacts,
    layout: "/admin"
  },
  {
    path: "/interal",
    name: "Internal",
    icon: "nc-icon nc-diamond",
    component: Internal,
    layout: "/admin"
  }
];
export default routes;
