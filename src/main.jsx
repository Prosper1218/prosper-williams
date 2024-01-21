import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from './assets/Pages/HOME/Home'

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);