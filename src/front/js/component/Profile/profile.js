import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/profile.css"
import { useNavigate } from "react-router-dom";
import { Countries } from "./countries";
import { Navbar } from "../Navbar/navbar";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Profile = () => {

    const { store, actions } = useContext(Context);

    const [inputFirstName, setInputFirstName] = useState(store.activeUser.firstName);
    const [inputLastName, setInputLastName] = useState(store.activeUser.lastName);
    const [inputUsername, setInputUsername] = useState(store.activeUser.userName);
    const [inputEmail, setInputEmail] = useState(store.activeUser.email);
    const [inputPhone, setInputPhone] = useState(store.activeUser.phone);
    const [inputBirthDate, setInputBirthDate] = useState(store.activeUser.birthDate);
    const [inputCountry, setInputCountry] = useState(store.activeUser.country);
    const [inputPostalCode, setInputPostalCode] = useState(store.activeUser.postalCode);

    const [inputActualPassword, setActualInputPassword] = useState("");
    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");


    const [showActualPassword, setShowActualPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    console.log(inputFirstName)
    console.log(inputLastName)
    console.log(inputUsername)
    console.log(inputEmail)
    console.log(inputBirthDate)
    console.log(inputCountry)
    console.log(inputPostalCode)

    console.log(store.token)

    const navigate = useNavigate()

    const [stateDetailsReadOnly, setStateDetailsReadOnly] = useState(true)
    const [statePasswordReadOnly, setStatePasswordReadOnly] = useState(true)

    const toggleActualPasswordVisibility = (e) => {
        e.preventDefault()
        setShowActualPassword(!showActualPassword);
    };

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
        if(inputNewPassword !== ""){
            if(inputNewPassword === inputConfirmPassword){
                await actions.updateUser(store.activeUser.id, inputFirstName, inputLastName, inputEmail, inputUsername, inputPhone, inputCountry, inputBirthDate, inputPostalCode)
            }
        }else{
            await actions.updateUser(store.activeUser.id, inputFirstName, inputLastName, inputEmail, inputUsername, inputPhone, inputCountry, inputBirthDate, inputPostalCode)
        }
    }

    const deleteAccount = async () => {
        await actions.deleteUser()
        await actions.logout()
        navigate("/welcome")
    }

    useEffect(() => {

        actions.getUserFromBack()
        
        
    }, [])

    console.log("id : ",store.activeUser.id);
        

 

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
                                            <input type="email" id="inputEmailLogin" className="form-control w-75" placeholder="" readOnly={stateDetailsReadOnly} required="" autoFocus=""
                                                onChange={(event) => setInputEmail(event.target.value)}
                                                value={inputEmail} />

                                        </div>

                                        <div className="col form-label-group ">
                                            <label className="" htmlFor="inputUsername">Username</label>
                                            <input type="text" id="inputUsername" className="form-control w-75" placeholder="" readOnly={stateDetailsReadOnly} required="" autoFocus=""
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

                                            <Countries setInputCountry={setInputCountry} />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputDate">Birth Date</label>
                                            <input type="date" id="inputDate" className="form-control w-50" readOnly={stateDetailsReadOnly} placeholder=""
                                                onChange={(event) => setInputBirthDate(event.target.value)}
                                                value={inputBirthDate} />

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

                                            <label className="" htmlFor="inputPassword">Actual Password</label>
                                            <div className="d-flex flex-row align-items-center">
                                                <input type={showActualPassword ? 'text' : 'password'}
                                                    onChange={(e) => {
                                                        setActualInputPassword(e.target.value);

                                                    }}
                                                    value={inputActualPassword}
                                                    readOnly={statePasswordReadOnly}
                                                    id="inputActualPassword" className="form-control w-75" required=""
                                                />
                                                <button className="bg-transparent border-0 ps-2 fs-4 pb-2" onClick={(e) => toggleActualPasswordVisibility(e)}>
                                                    {showActualPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>


                                        </div>


                                        <div className="col form-label-group">

                                            <label className="" htmlFor="inputPassword">New Password</label>
                                            <div className="d-flex flex-row">
                                                <input type={showNewPassword ? 'text' : 'password'}
                                                    onChange={(e) => {
                                                        setInputNewPassword(e.target.value);

                                                    }}
                                                    value={inputNewPassword}
                                                    readOnly={statePasswordReadOnly}
                                                    id="inputNewPassword" className="form-control w-75" required=""
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
                                                id="inputConfirmPassword" className="form-control w-75" required=""
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
                            <button className="btnDelete btn btn-danger btn-block boton-submit w-100" type="submit" onClick={() => deleteAccount()}>Delete Account</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}