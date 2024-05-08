import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./assets/Pages/HOME/Home";
import NavBarProvider from "./Util/NavBarProvider";
import About from "./assets/Pages/ABOUT/About";
import Contact from "./assets/Pages/CONTACTME/Contact";
import Services from "./assets/Pages/WHATIOFFER/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NavBarProvider>
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Services" element={<Services />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </NavBarProvider>
   </React.StrictMode>
);
