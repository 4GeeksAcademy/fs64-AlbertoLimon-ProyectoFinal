import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar/navbar"
import { Footer } from "../component/Footer/footer";
import { Outlet } from "react-router-dom";
import "../../styles/main.css"


export const Main = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <Navbar /> 
                <Outlet />
            <Footer />
        </>
    )
}