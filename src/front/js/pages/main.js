import React, { useState, useContext } from "react";
import { Navbar } from "../component/Navbar/navbar"
import { Footer } from "../component/Footer/footer";


export const Main = () => {

    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <h1>Rick & Morty</h1>
            </div>

            <Footer />
        </>
    )
}