import React, { useState, useContext } from "react";
import "../../../styles/profile.css"
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const navigate = useNavigate()

    return (
        <>
            <div className="">
                <h1 className="text-dark">
                    My profile
                </h1>
                <div className="container d-flex flex-column">
                    <div class="row d-flex">
                        <div class="col border d-flex flex-column px-3 py-3 bg-light">
                            <h3>Personal information</h3>
                            <div>
                                <form className="form-login bg-transparent">
                                    <button >Edit</button>
                                    <div className="row mt-3">
                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputFirstName">First name</label>
                                            <input type="text" id="inputEmailLogin" className="form-control w-100" placeholder="" required="" autoFocus=""
                                                onChange={(event) => setInputEmail(event.target.value)}
                                                value={inputEmail} />

                                        </div>

                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputLastName">Last name</label>
                                            <input type="text" id="inputEmailLogin" className="form-control w-100" placeholder="" required="" autoFocus=""
                                                onChange={(event) => setInputEmail(event.target.value)}
                                                value={inputEmail} />

                                        </div>
                                    </div>

                                    <div className="form-label-group mt-3">
                                        <label className="" htmlFor="inputUsername">Username</label>
                                        <input type="text" id="inputinputUsername" className="form-control w-75" placeholder="" required="" autoFocus=""
                                            onChange={(event) => setInputEmail(event.target.value)}
                                            value={inputEmail} />

                                    </div>

                                    <div className="form-label-group mt-3">
                                        <label className="" htmlFor="inputEmail">Email</label>
                                        <input type="email" id="inputEmailLogin" className="form-control w-75" placeholder="" readOnly required="" autoFocus=""
                                            onChange={(event) => setInputEmail(event.target.value)}
                                            value={inputEmail} />

                                    </div>

                                    <div className="form-label-group mt-4">
                                        <label className="" htmlFor="inputPhone">Phone</label>
                                        <input type="text" id="inputPhone" className="form-control w-50" placeholder="" required=""
                                            onChange={(event) => setInputPassword(event.target.value)}
                                            value={inputPassword} />

                                    </div>

                                    <div className="form-label-group mt-4">
                                        <label className="" htmlFor="inputDate">Birth date</label>
                                        <input type="date" id="inputDate" className="form-control w-50" placeholder=""
                                            onChange={(event) => setInputPassword(event.target.value)}
                                            value={inputPassword} />

                                    </div>

                                </form>
                            </div>
                        </div>

                        <div class="col border d-flex flex-column px-3 py-3 bg-light">
                            <h3>Address</h3>
                            <div className="">
                                <form className="form-login bg-transparent">

                                    <div className="row mt-3">
                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputFirstName">First name</label>
                                            <input type="text" id="inputEmailLogin" className="form-control" placeholder="" required="" autoFocus=""
                                                onChange={(event) => setInputEmail(event.target.value)}
                                                value={inputEmail} />

                                        </div>

                                        <div className="col form-label-group">
                                            <label className="" htmlFor="inputLastName">Last name</label>
                                            <input type="text" id="inputEmailLogin" className="form-control" placeholder="" required="" autoFocus=""
                                                onChange={(event) => setInputEmail(event.target.value)}
                                                value={inputEmail} />

                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-around mt-3">
                        <button className="btnCancel btn btn-light btn-block boton-submit" type="submit" onClick={() => navigate("/main/characters")}>Cancel</button>
                        <button className="btnSave btn btn-primary btn-block boton-submit" type="submit" onClick={() => navigate("/main")}>Save changes</button>
                    </div>


                </div>
            </div>

        </>
    )
}