import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";

export const CharacterDetail = () => {

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
            <div className="card-container container contenedorDetalles">
				<div className="card detallesPrincipal">
					<img src="https://www.cinemascomics.com/wp-content/uploads/2021/06/Destructor-Estelar-Interdictor.jpg" className="card-img-top imagenDetalles" alt="..."/>
					<div className="card-body text-center">
						<h5 className="card-title">name</h5>
						<p>status</p>	
					</div>
				</div>
				
				<hr className="separadorDetalles" />

				<div className="detallesSecundario">
					<div className="detalleIndividual">
						<h5>Class</h5>
                        <p></p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Cargo capacity</h5>
                        <p></p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Crew</h5>
                        <p></p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Length</h5>
                        <p></p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Model</h5>
                        <p></p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Passengers</h5>
                        <p></p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>

        </>
    )
}