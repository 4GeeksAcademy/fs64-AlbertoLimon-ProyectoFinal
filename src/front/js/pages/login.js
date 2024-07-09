import React, { useState, useContext } from "react";
import "../../styles/login.css";

export const Login = () => {

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-5">
            <form className="form-login">
                <div className="text-center mb-4">
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
                    <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
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
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary w-100 btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
            </form>
        </div>
    );
};
