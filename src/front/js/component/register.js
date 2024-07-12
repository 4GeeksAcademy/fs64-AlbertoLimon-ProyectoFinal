import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inicio.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export const Register = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const [inputName, setInputName] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <form className="form-register bg-transparent">
                    <div className="text-center">
                        <img className="icono-usuario" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
                    </div>

                    <div className="form-label-group">
                        <label className="letra-negrita" htmlFor="inputName">Full Name</label>
                        <input type="text" id="inputName" className="form-control sombreado" placeholder="Enter your name" required="" autoFocus=""
                            onChange={(event) => setInputName(event.target.value)}
                            value={inputName} />

                    </div>

                    <div className="form-label-group mt-3">
                        <label className="letra-negrita" htmlFor="inputName">Username</label>
                        <input type="text" id="inputUsername" className="form-control sombreado" placeholder="Enter your username" required="" autoFocus=""
                            onChange={(event) => setInputUsername(event.target.value)}
                            value={inputUsername} />

                    </div>

                    <div className="form-label-group mt-3">
                        <label className="letra-negrita" htmlFor="inputEmail">Email</label>
                        <input type="email" id="inputEmailRegister" className="form-control sombreado" placeholder="Enter your address" required="" autoFocus=""
                            onChange={(event) => setInputEmail(event.target.value)}
                            value={inputEmail} />

                    </div>


                    <div className="form-label-group  mt-3">
                        <label className="letra-negrita" htmlFor="inputPassword">Password</label>
                        <input type="password" id="inputPasswordRegister" className="form-control sombreado" placeholder="Password" required=""
                            onChange={(event) => setInputPassword(event.target.value)}
                            value={inputPassword} />

                    </div>


                    <div className="form-label-group mt-3">
                        <label className="letra-negrita" htmlFor="inputPassword">Confirm Password</label>
                        <input type="password" id="inputConfirmPassword" className="form-control sombreado mb-3" placeholder="Confirm Password" required=""
                            onChange={(event) => setInputPassword(event.target.value)}
                            value={inputPassword} />

                    </div>

                    <button className="btn btn-lg btn-success w-100 btn-block boton-submit" type="submit" onClick={() => navigate("/")}>Sign in</button>

                </form>
            </div>
        </>
    )
};
