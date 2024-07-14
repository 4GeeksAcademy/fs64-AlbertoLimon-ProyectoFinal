import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/inicio.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export const Login = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    return (
        <>

            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                    <form className="form-login bg-transparent">
                        <div className="text-center">
                            <img className="icono-usuario" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
                        </div>

                        <div className="form-label-group">
                            <label className="letra-negrita" htmlFor="inputEmail">Email</label>
                            <input type="email" id="inputEmailLogin" className="form-control sombreado" placeholder="Email address" required="" autoFocus=""
                                onChange={(event) => setInputEmail(event.target.value)}
                                value={inputEmail} />

                        </div>

                        <div className="form-label-group mt-4">
                            <label className="letra-negrita" htmlFor="inputPassword">Password</label>
                            <input type="password" id="inputPasswordLogin" className="form-control sombreado" placeholder="Enter your Password" required=""
                                onChange={(event) => setInputPassword(event.target.value)}
                                value={inputPassword} />

                            <div className="d-flex justify-content-end">
                                <span className="">
                                    <a className="fs-6 text-dark fw-bold" href="">Forgot password?</a>
                                </span>
                            </div>

                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" className="text-dark" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary w-100 btn-block boton-submit" type="submit" onClick={() => navigate("/main")}>Login</button>

                    </form>
                </div>
            </div>

        </>
    )
};
