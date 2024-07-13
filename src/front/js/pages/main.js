import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar/navbar"
import { Footer } from "../component/Footer/footer";
import { CharacterList } from "../component/Characters/characterList";


export const Main = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <h1>Rick & Morty</h1>
                <div>
                    <CharacterList />
                </div>
            </div>

            <Footer />
        </>
    )
}