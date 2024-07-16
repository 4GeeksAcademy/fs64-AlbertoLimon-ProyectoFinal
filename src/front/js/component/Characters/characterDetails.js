import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import "../../../styles/detalles.css"
import { useNavigate, useParams } from "react-router-dom";

export const CharacterDetails = () => {

	const { store, actions } = useContext(Context);
	const [characters, setCharacters] = useState([])

	const { idCharacter } = useParams();

	const navigate = useNavigate()

	useEffect(() => {

		const fetchCharacter = async () => {
			const data = await actions.getSingleCharacter(idCharacter);
			console.log(data)

		}

		fetchCharacter()
	}, [])

	return (
		<>
			<div className="">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src="https://www.cinemascomics.com/wp-content/uploads/2021/06/Destructor-Estelar-Interdictor.jpg" className="card-img-top" alt="..." />
					</div>


					<div className="card-body detallesSecundarios">
						<div className="detalleIndividual">
							<h5 className="name">name</h5>
						</div>

						<div className="detalleIndividual status">
							<span className="status-icon"></span>
							<h5>status</h5>
						</div>
						<div className="detalleIndividual">
							<h5>species</h5>
						</div>
						<div className="detalleIndividual">
							<h5>Gender</h5>
							
						</div>
						<div className="detalleIndividual">
							<h5>Origin</h5>

						</div>
						<div className="detalleIndividual">
							<h5>Location</h5>
						</div>
					</div>


				</div>
			</div>


			<button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>

		</>
	)
}