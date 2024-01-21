import React, {useState} from "react";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";
const Layout = () => {
   return (
      <div className="relative overflow-x-hidden overflow-y-hidden">
         <Nav />
         <Outlet />
      </div>
   );
};

export default Layout;
