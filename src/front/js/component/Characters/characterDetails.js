import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


import "../../../styles/details.css"
import { useNavigate, useParams } from "react-router-dom";

export const CharacterDetails = () => {

	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState([])

	const { id } = useParams();

	console.log("idCharacter ", id)

	const navigate = useNavigate()

	useEffect(() => {

		const fetchCharacter = async () => {
			const data = await actions.getSingleCharacter(id);
			setCharacter(data)
		}

		fetchCharacter()
	}, [])


	return (
		<>

			<div className="mt-4 mb-4">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src={character.image} className="card-img-top" alt="..." />
					</div>


					<div className="card-body detallesSecundarios">
						<div className="">
							<span className="spanDetalle fs-2 fw-bold">{character.name}</span>
						</div>

						<div className="status">
							{(() => {
								if (character.status === "Alive") {
									return (
										<span style={{
											height: "0.5rem",
											width: "0.5rem",
											marginRight: "0.375rem",
											backgroundColor: "green",
											borderRadius: "50%"
										}} ></span>
									)
								} else if (character.status === "Dead") {
									return (
										<span style={{
											height: "0.5rem",
											width: "0.5rem",
											marginRight: "0.375rem",
											backgroundColor: "red",
											borderRadius: "50%"
										}} ></span>
									)
								} else if (character.status === "Unknown") {
									return (
										<span style={{
											height: "0.5rem",
											width: "0.5rem",
											marginRight: "0.375rem",
											backgroundColor: "grey",
											borderRadius: "50%"
										}} ></span>
									)
								}
							})()}

							<span className="spanDetalle fw-bold">{character.status}</span>
						</div>
						<div className="">
							<span className="spanDetalle">Specie: {character.species}</span>
						</div>
						<div className="">
							<span className="spanDetalle">Gender: {character.gender}</span>

						</div>
						<div className="">
							<span className="spanDetalle">From: </span>

						</div>
						<div className="">
							<span className="spanDetalle">Actual location = </span>
						</div>
					</div>


				</div>
			</div>

		</>
	)
}