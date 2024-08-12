import React, { useContext, useEffect } from "react";
import "../../styles/welcome.css";
import { Login } from "../component/Login/login"
import { Register } from "../component/Register/register"
import { Footer } from "../component/Footer/footer";
import { useNavigate } from "react-router-dom";


export const Welcome = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        
        const token = localStorage.getItem("jwt-token")
        if(token && token != "" && token != undefined){
            
            navigate("/main/characters")
        }

    }, [])

    return (
        <>
            <div className="container-inicio">

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-login activo sombreado letra-negrita" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">LOG IN</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-register sombreado letra-negrita" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">REGISTER</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        <Login />
                    </div>

                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <Register />
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
};
