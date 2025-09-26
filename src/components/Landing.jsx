import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home, CustomerRateKG, CustomerRateCBM, SuggestedRate, NavList } from "./index";


export const Landing = () =>{
    return(
        <React.Fragment>
        <BrowserRouter>
        <NavList/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/customerratekg" element={<CustomerRateKG/>} />
            <Route path="/customerratecbm" element={<CustomerRateCBM/>} />
            <Route path="/suggestedrate" element={<SuggestedRate/>} />
        </Routes>
        </BrowserRouter>
        </React.Fragment>
    )
}