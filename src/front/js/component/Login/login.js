import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/welcome.css";
import "../../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Login = () => {

    const { actions } = useContext(Context);

    const navigate = useNavigate()

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword);
    };

    const validations = () => {
        if (inputEmail !== "" || inputPassword !== "") {
            return true;
        } else {
            if (inputEmail === "" && inputPassword === "") {
                alert("Both fields are missing")
                return false;
            } else if (inputEmail === "" && inputPassword !== "") {
                alert("Email field is missing")
                return false;
            } else if (inputEmail !== "" && inputPassword === "") {
                alert("Password field is missing")
                return false;
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene que el formulario recargue la página
        console.log("submit");
        try {

            if (validations() && await actions.loginUser(inputEmail, inputPassword)) {
                console.log(inputEmail)
                //await actions.getUserByEmail(inputEmail)
                navigate("/main/characters")
                
            }

        }

        catch (error) {
            console.error("Error durante el inicio de sesión del usuario:", error);
        }

    }

    return (
        <>

            <div className="tab-pane fade show" id="login" role="tabpanel" aria-labelledby="login-tab">
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                    <form className="form-login bg-transparent">
                        <div className="text-center">
                            <img className="icono-login" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
                        </div>

                        <div className="form-label-group">
                            <label className="letra-negrita" htmlFor="inputEmail">Email</label>
                            <input type="email" id="inputEmailLogin" className="form-control sombreado" placeholder="Email address" required="" autoFocus=""
                                onChange={(event) => setInputEmail(event.target.value)}
                                value={inputEmail} />

                        </div>

                        <div className="form-label-group mt-4">
                            <label className="letra-negrita" htmlFor="inputPassword">Password</label>
                            <div className="d-flex">

                                <input type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => {
                                        setInputPassword(e.target.value);

                                    }}
                                    value={inputPassword}
                                    placeholder="Enter your password" id="inputPasswordLogin" className="form-control sombreado" required=""
                                />
                                <button className="bg-transparent border-0 w-25 fs-4" onClick={(e) => togglePasswordVisibility(e)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="d-flex justify-content-end">
                                <span className="">
                                    <a className="fs-6 text-dark fw-bold" href="">Forgot password?</a>
                                </span>
                            </div>

                        </div>

                        <button className="btn btn-lg btn-primary w-100 btn-block boton-submit mt-3" type="submit" onClick={(e) => handleSubmit(e)}>Login</button>

                    </form>
                </div>
            </div>

        </>
    )
};
