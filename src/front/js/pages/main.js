import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar/navbar"
import { Footer } from "../component/Footer/footer";
import { Outlet } from "react-router-dom";
import "../../styles/main.css"
import { useNavigate } from "react-router-dom";


export const Main = () => {

    const { actions } = useContext(Context);
    const navigate = useNavigate()

    const token = localStorage.getItem("jwt-token")

    useEffect(() => {
       
        const verification = async () => {
            const verify = await actions.verifyToken()
            if (!verify) {
                localStorage.removeItem("jwt-token")
                navigate("/welcome")
                alert("You have to log in")
            }
        }
        verification()
        
    }, [token])

    return (
        <>
            <Navbar /> 
                <Outlet />
            <Footer />
        </>
    )
}