import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inicio.css";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export const Inicio = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    return (
        <>
            <div className="container-inicio">
                <div className="botones-inicio">
                    <button>Login</button>
                    <button>Register</button>
                </div>
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-5">
                    <form className="form-login bg-light">
                        <div className="text-center mb-4">
                        <FaRegUserCircle />
                            
                            
            
                        </div>

                        <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""
                                onChange={(event) => setInputEmail(event.target.value)}
                                value={inputEmail} />
                            <label htmlFor="inputEmail"></label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""
                                onChange={(event) => setInputEmail(event.target.value)}
                                value={inputPassword} />
                            <label htmlFor="inputPassword"></label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" className=".text-dark" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary w-100 btn-block" type="submit">Sign in</button>
                      
                    </form>
                </div>



            </div>

        </>
    )
};
