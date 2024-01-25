import React, {useState} from "react";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";
import End from "./End";
const Layout = () => {
   return (
      <div className="relative overflow-x-hidden">
         <Nav />
         <Outlet />
         {/* <End/> */}
      </div>
   );
};

export default Layout;
