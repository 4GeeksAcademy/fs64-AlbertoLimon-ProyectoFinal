import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";

export const CharacterList = () => {

    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const fetchCharacters = async () => {
            const data = await actions.getCharacters();
            const personajes = data.results
            setCharacters(personajes)
            console.log("results,  ", data.results)
            console.log("caracteres,  ", characters)
        }

        fetchCharacters()
    }, [])

    return (
        <>
            <div className="card-container">
                {characters.map((character, index) => (
                    <div className="card">
                        <img src=""/>
                        <div className="card-body">
                            <h5 className="card-title mb-3">aaaaaa</h5>

                            <div className="d-flex justify-content-between">
                                <button onClick={() => navigate('/')} className="btn btn-outline-primary">Show details</button>
                                <button className="btn btn-outline-warning" >
                                    <MdFavorite className="iconoFavorito" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}