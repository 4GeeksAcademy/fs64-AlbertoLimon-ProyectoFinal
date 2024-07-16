import React from "react";
import { Navbar } from "../component/Navbar/navbar"
import { Footer } from "../component/Footer/footer";
import { Outlet } from "react-router-dom";
import "../../styles/main.css"


export const Main = () => {

    return (
        <>
            <Navbar /> 
                <Outlet />
            <Footer />
        </>
    )
}