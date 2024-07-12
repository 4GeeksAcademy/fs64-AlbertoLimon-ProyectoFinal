import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inicio.css";
import { FaUser } from "react-icons/fa";
import { Login } from "../component/login"
import { Register } from "../component/register"
import { Footer } from "../component/footer";


export const Inicio = () => {


    return (
        <>
            <div className="container-inicio">

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active sombreado letra-negrita" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">LOG IN</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link sombreado letra-negrita" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">REGISTER</button>
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
