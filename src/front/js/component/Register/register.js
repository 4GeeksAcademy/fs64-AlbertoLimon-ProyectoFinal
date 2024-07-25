import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/welcome.css";
import "../../../styles/register.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Register = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene que el formulario recargue la página
        console.log("submit");
        try {

            await actions.registerUser(inputFirstName, inputLastName, inputUsername, inputEmail, inputPassword)

        } catch (error) {
            console.error("Error durante el registro de usuario:", error);
        }

    }

    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <form className="form-register bg-transparent">
                    <div className="text-center">
                        <img className="icono-register" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
                    </div>

                    <div className="row d-flex flex-row">
                        <div className="col">
                            <div className="form-label-group mt-3">
                                <label className="letra-negrita" htmlFor="inputFirstName">First Name</label>
                                <input type="text" id="inputFirstName" className="form-control sombreado w-75" placeholder="Enter your first name" required="" autoFocus=""
                                    onChange={(event) => setInputFirstName(event.target.value)}
                                    value={inputFirstName} />

                            </div>

                            <div className="form-label-group mt-3">
                                <label className="letra-negrita" htmlFor="inputEmail">Email</label>
                                <input type="email" id="inputEmailRegister" className="form-control sombreado" placeholder="Enter your email" required="" autoFocus=""
                                    onChange={(event) => setInputEmail(event.target.value)}
                                    value={inputEmail} />

                            </div>

                            <div className="form-label-group mt-3">
                                <label className="letra-negrita" htmlFor="inputName">Username</label>
                                <input type="text" id="inputUsername" className="form-control sombreado w-75" placeholder="Enter your username" required="" autoFocus=""
                                    onChange={(event) => setInputUsername(event.target.value)}
                                    value={inputUsername} />

                            </div>
                        </div>

                        <div className="col">

                            <div className="form-label-group mt-3">
                                <label className="letra-negrita" htmlFor="inputLastName">Last Name</label>
                                <input type="text" id="inputLastName" className="form-control sombreado w-75" placeholder="Enter your last name" required="" autoFocus=""
                                    onChange={(event) => setInputLastName(event.target.value)}
                                    value={inputLastName} />

                            </div>


                            <div className="form-label-group  mt-3">
                                <label className="letra-negrita" htmlFor="inputPassword">Password</label>
                                <div className="d-flex">
                                    <input type={showPassword ? 'text' : 'password'}
                                        value={inputPassword}
                                        onChange={(e) => {
                                            setInputPassword(e.target.value);

                                        }}
                                        placeholder="Enter your password" id="inputPasswordRegister" className="form-control sombreado" required=""
                                    />
                                    <button className="bg-transparent border-0 w-25 fs-4" onClick={(e) => togglePasswordVisibility(e)}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>


                            </div>


                            <div className="form-label-group mt-3">
                                <label className="letra-negrita" htmlFor="inputPassword">Confirm Password</label>
                                <input type="password" id="inputConfirmPassword" className="form-control sombreado mb-3" placeholder="Confirm Password" required=""
                                    onChange={(event) => setInputConfirmPassword(event.target.value)}
                                    value={inputConfirmPassword} />

                            </div>
                        </div>

                    </div>


                    <button className="btn btn-lg btn-success w-100 btn-block boton-submit" type="submit" onClick={(e) => handleSubmit(e)}>Sign in</button>

                </form>
            </div>
        </>
    )
};
