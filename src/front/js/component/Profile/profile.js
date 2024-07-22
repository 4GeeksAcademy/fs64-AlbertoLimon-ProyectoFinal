import React, { useState, useContext } from "react";
import "../../../styles/profile.css"
import { useNavigate } from "react-router-dom";
import { Countries } from "./countries";
import { Navbar } from "../Navbar/navbar";

export const Profile = () => {


    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputBirthDate, setInputBirthDate] = useState("");
    const [inputCountry, setInputCountry] = useState("");
    const [inputPostalCode, setInputPostalCode] = useState("");

    console.log(inputFirstName)
    console.log(inputLastName)
    console.log(inputUsername)
    console.log(inputEmail)
    console.log(inputBirthDate)
    console.log(inputCountry)
    console.log(inputPostalCode)

    const navigate = useNavigate()

    const saveChanges = () => {

    }

    const deleteAccount = () => {
        
    }


    return (
        <>  
            <Navbar />
            <div>
                <div className="container d-flex flex-column justify-content-center mt-4">
                    <div className=" d-flex flex-column bg-light border rounded-3">
                        <div className="col  d-flex flex-column px-3 py-3">
                            <h3>Account details</h3>
                            <div>
                                <form className="">

                                    <div className="row mt-3">
                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputFirstName">First name</label>
                                            <input type="text" id="inputFirstName" className="form-control w-100" placeholder="" required="" autoFocus=""
                                                onChange={(event) => setInputFirstName(event.target.value)}
                                                value={inputFirstName} />

                                        </div>

                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputLastName">Last name</label>
                                            <input type="text" id="inputLastName" className="form-control w-100" placeholder="" required="" autoFocus=""
                                                onChange={(event) => setInputLastName(event.target.value)}
                                                value={inputLastName} />

                                        </div>
                                    </div>

                                    <div className="form-label-group mt-3">
                                        <label className="" htmlFor="inputUsername">Username</label>
                                        <input type="text" id="inputUsername" className="form-control w-75" placeholder="" required="" autoFocus=""
                                            onChange={(event) => setInputUsername(event.target.value)}
                                            value={inputUsername} />

                                    </div>

                                    <div className="form-label-group mt-3">
                                        <label className="" htmlFor="inputEmail">Email</label>
                                        <input type="email" id="inputEmailLogin" className="form-control w-75" placeholder="" readOnly required="" autoFocus=""
                                            onChange={(event) => setInputEmail(event.target.value)}
                                            value={inputEmail} />

                                    </div>
                                    <div className="row">
                                        <div className="col form-label-group mt-4">
                                            <label className="" htmlFor="inputPhone">Phone</label>
                                            <input type="text" id="inputPhone" className="form-control " placeholder="" required=""
                                                onChange={(event) => setInputPhone(event.target.value)}
                                                value={inputPhone} />

                                        </div>

                                        <div className="col form-label-group mt-4">

                                            <Countries setInputCountry={setInputCountry} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col form-label-group mt-4">
                                            <label className="" htmlFor="inputDate">Birth date</label>
                                            <input type="date" id="inputDate" className="form-control w-50" placeholder=""
                                                onChange={(event) => setInputBirthDate(event.target.value)}
                                                value={inputBirthDate} />

                                        </div>

                                        <div className="col form-label-group mt-4">
                                            <label className="" htmlFor="inputPostalCode">Postal Code</label>
                                            <input type="text" id="inputPostalCode" className="form-control" placeholder="" autoFocus=""
                                                onChange={(event) => setInputPostalCode(event.target.value)}
                                                value={inputPostalCode} />

                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between px-3 pb-2 pt-1">
                            <div className="d-flex w-50">
                                <button className="btnSave btn btn-primary btn-block boton-submit" type="submit" onClick={() => navigate("/main")}>Save Changes</button>
                                <button className="btnCancel btn btn-light btn-block boton-submit" type="submit" onClick={() => navigate("/main/characters")}>Cancel</button>
                            </div>
                            <div className="">
                                <button className="btnDelete btn btn-danger btn-block boton-submit w-100" type="submit" onClick={() => navigate("/main")}>Delete Account</button>
                            </div>
                        </div>

                    </div>





                </div>
            </div>

        </>
    )
}