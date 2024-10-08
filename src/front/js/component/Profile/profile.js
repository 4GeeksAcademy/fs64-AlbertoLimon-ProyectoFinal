import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/profile.css"
import { useNavigate } from "react-router-dom";
import { Countries } from "./countries";
import { Navbar } from "../Navbar/navbar";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Profile = () => {

    const { store, actions } = useContext(Context);

    const token = localStorage.getItem("jwt-token")

    const navigate = useNavigate()

    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputCountry, setInputCountry] = useState("");
    const [inputPostalCode, setInputPostalCode] = useState("");


    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");

    const [showNewPassword, setShowNewPassword] = useState(false);

    const [stateDetailsReadOnly, setStateDetailsReadOnly] = useState(true)
    const [statePasswordReadOnly, setStatePasswordReadOnly] = useState(true)

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const toggleNewPasswordVisibility = (e) => {
        e.preventDefault()
        setShowNewPassword(!showNewPassword);
    };

    const toggleDetailsReadOnly = () => {
        console.log(stateDetailsReadOnly)
        setStateDetailsReadOnly(false)
    }

    const togglePasswordReadOnly = () => {
        console.log(statePasswordReadOnly)
        setStatePasswordReadOnly(false)
    }

    const saveChanges = async () => {
        if (inputNewPassword !== "") {
            if (inputNewPassword === inputConfirmPassword) {
                console.log(inputNewPassword)
                await actions.updateUser(store.activeUser.id, inputFirstName, inputLastName, inputEmail, inputUsername, inputPhone, inputCountry, inputPostalCode, inputNewPassword)
            }else{
                alert("Passwords do not match each other")
            }
        } else {
            await actions.updateUser(store.activeUser.id, inputFirstName, inputLastName, inputEmail, inputUsername, inputPhone, inputCountry, inputPostalCode)
        }
        setStateDetailsReadOnly(true)
        setStatePasswordReadOnly(true)
    }

    const handleDeleteAccount = async () => {
        // Mostrar el modal de confirmación antes de eliminar el contacto
        setShowDeleteModal(true)

    };

    const setInputs = () => {
        setInputFirstName(store.activeUser.firstName)
        setInputLastName(store.activeUser.lastName)
        setInputUsername(store.activeUser.userName)
        setInputEmail(store.activeUser.email)
        setInputPhone(store.activeUser.phone)
        setInputCountry(store.activeUser.country)
        setInputPostalCode(store.activeUser.postalCode)
    }

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

    useEffect(() => {

        actions.getUser()

    }, [])

    useEffect(() => {

        if (store.activeUser != "") {
            setInputs()
        }

    }, [store.activeUser])

    return (
        <>
            <Navbar />
            <div>
                <div className="container d-flex flex-column justify-content-center mt-4">
                    <div className=" d-flex flex-column bg-light border rounded-3">
                        <div className="col d-flex flex-column px-3 py-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h3>Account details</h3>
                                <button onClick={toggleDetailsReadOnly} className="btn btn-light d-flex justify-content-center align-items-center gap-2 fs-4">
                                    Edit <FaEdit className="fs-4" />
                                </button>

                            </div>

                            <div>
                                <form className="">

                                    <div className="row mt-2">
                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputFirstName">First name</label>
                                            <input type="text" id="inputFirstName" className="form-control w-100" placeholder="" readOnly={stateDetailsReadOnly} required="" autoFocus=""
                                                onChange={(event) => setInputFirstName(event.target.value)}
                                                value={inputFirstName} />

                                        </div>

                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputLastName">Last name</label>
                                            <input type="text" id="inputLastName" className="form-control w-100" placeholder="" readOnly={stateDetailsReadOnly} required="" autoFocus=""
                                                onChange={(event) => setInputLastName(event.target.value)}
                                                value={inputLastName} />

                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col form-label-group ">
                                            <label className="" htmlFor="inputEmail">Email</label>
                                            <input type="email" id="inputEmailLogin" className="form-control w-100" placeholder="" readOnly={stateDetailsReadOnly} required="" autoFocus=""
                                                onChange={(event) => setInputEmail(event.target.value)}
                                                value={inputEmail} />

                                        </div>

                                        <div className="col form-label-group ">
                                            <label className="" htmlFor="inputUsername">Username</label>
                                            <input type="text" id="inputUsername" className="form-control w-100" placeholder="" readOnly={stateDetailsReadOnly} required="" autoFocus=""
                                                onChange={(event) => setInputUsername(event.target.value)}
                                                value={inputUsername} />

                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputPhone">Phone</label>
                                            <input type="text" id="inputPhone" className="form-control " placeholder="" readOnly={stateDetailsReadOnly} required=""
                                                onChange={(event) => setInputPhone(event.target.value)}
                                                value={inputPhone} />

                                        </div>

                                        <div className="col form-label-group">

                                            <Countries value={inputCountry} readOnly={stateDetailsReadOnly} setInputCountry={setInputCountry} />
                                        </div>

                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputPostalCode">Postal Code</label>
                                            <input type="text" id="inputPostalCode" className="form-control" placeholder="" readOnly={stateDetailsReadOnly} autoFocus=""
                                                onChange={(event) => setInputPostalCode(event.target.value)}
                                                value={inputPostalCode} />

                                        </div>

                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>



                    <div className="d-flex flex-column bg-light border rounded-3 mt-4">
                        <div className="col d-flex flex-column px-3 py-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h3>Change Password</h3>
                                <button onClick={togglePasswordReadOnly} className="btn btn-light d-flex justify-content-center align-items-center gap-2 fs-4">
                                    Edit <FaEdit className="fs-4" />
                                </button>

                            </div>

                            <div>
                                <form className="">

                                    <div className="row mt-3">
                           
                                        <div className="col form-label-group">

                                            <label className="" htmlFor="inputPassword">New Password</label>
                                            <div className="d-flex flex-row">
                                                <input type={showNewPassword ? 'text' : 'password'}
                                                    onChange={(e) => {
                                                        setInputNewPassword(e.target.value);

                                                    }}
                                                    value={inputNewPassword}
                                                    readOnly={statePasswordReadOnly}
                                                    id="inputNewPassword" className="form-control w-100" required=""
                                                />
                                                <button className="bg-transparent border-0 ps-2  fs-4 pb-2" onClick={(e) => toggleNewPasswordVisibility(e)}>
                                                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>

                                        </div>

                                        <div className="col form-label-group">

                                            <label className="" htmlFor="inputPassword">Confirm Password</label>
                                            <input
                                                type="password"
                                                onChange={(e) => {
                                                    setInputConfirmPassword(e.target.value);

                                                }}
                                                value={inputConfirmPassword}
                                                readOnly={statePasswordReadOnly}
                                                id="inputConfirmPassword" className="form-control w-100" required=""
                                            />

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-content-between px-3 pb-2 pt-1">
                        <div className="d-flex w-50">
                            <button className="btnSave btn btn-primary btn-block boton-submit" type="submit" onClick={() => saveChanges()}>Save Changes</button>
                            <button className="btnCancel btn btn-light btn-block boton-submit" type="submit" onClick={() => navigate("/main/characters")}>Cancel</button>
                        </div>
                        <div className="">
                            <button className="btnDelete btn btn-danger btn-block boton-submit w-100" type="submit" onClick={() => handleDeleteAccount()}>Delete Account</button>
                        </div>
                    </div>
                    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>If you delete your account wou will lose all your information!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                No
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    // Llama a la acción para eliminar el contacto
                                    actions.deleteUser();

                                    // Cierra el modal de confirmación
                                    setShowDeleteModal(false);
                                   
                                }}
                            >
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </>
    )
}