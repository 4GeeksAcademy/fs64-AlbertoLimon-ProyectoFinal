import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


import "../../../styles/details.css"
import { useNavigate, useParams } from "react-router-dom";

export const CharacterDetails = () => {

	const { store, actions } = useContext(Context);

	const [character, setCharacter] = useState({})

	const [firstEpisode, setFirstEpisode] = useState("")


	const { id } = useParams();

	console.log("idCharacter ", id)

	const navigate = useNavigate()

	const goToEpisode = async (url) => {
		console.log("url: ", url)

		const id = await actions.getEpisodeId(url)
		console.log("id ", id)
		navigate(`/main/episodes/${id}`)
	}


	const goToLocation = async (url) => {
		console.log("url: ", url)

		const id = await actions.getLocationId(url)
		console.log("id ", id)
		navigate(`/main/locations/${id}`)
	}

	const fetchCharacter = async () => {
		const data = await actions.getSingleCharacter(id);
		setCharacter(data)
	}

	useEffect(() => {
		fetchCharacter()
	}, [])

	const firstEpisodeSeenIn = async () => {
		console.log(character)
		const url = character.episode ? character.episode[0] : "Loading episode"
		console.log("url ",url)
		// Separar la parte base de la URL y el número de episodio
		let baseUrl = "https://rickandmortyapi.com/api/episode/";
		let episodeNumber = url.replace(baseUrl, '').trim();

		console.log(baseUrl); // https://rickandmortyapi.com/api/episode/
		console.log("episode number ",episodeNumber); // 1
		
		setFirstEpisode(await actions.getSingleEpisode(episodeNumber))

	}

	useEffect(() => {
		
		if(!!character.name){
			console.log(character.episode ? character.episode[0] : "Loading episode")
			firstEpisodeSeenIn()
		}
	},[character])
	
	console.log(character)
	console.log("firstEpisode ",firstEpisode)

	return (
		<>

			<div className="mt-4 wrapperDetalles">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src={character.image} className="card-img-top" alt="..." />
					</div>


					<div className="card-body detallesSecundarios">
						<div className="mb-2">
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
								} else if (character.status === "unknown") {
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

							<span className="spanDetalle fw-bold">{character.status} - {character.species}</span>
						</div>
						<div className="">
							<span className="spanDetalle fw-bold">{character.gender}</span>
						</div>

						<div className="d-flex flex-column text-white pt-2">
							First seen in: <span className="spanDetalle fw-bold"><a className="fw-bold" onClick={() => goToEpisode(character.episode[0])}> {firstEpisode.name}  </a> </span>
						</div>

						<div className="">
							{(() => {
								if (character.origin?.name === "Unknown") {
									return (
										<div className="d-flex text-white flex-column pt-2">
											From: <span className="spanDetalle"> Unknown</span>
										</div>

									)
								} else {
									return (
										<div className="d-flex flex-column text-white pt-2">
											From: <span className="spanDetalle"><a className="fw-bold" onClick={() => goToLocation(character.origin.url)}>{character.origin ? character.origin.name : "Loading origin"}</a></span>
										</div>

									)
								}
							})()}

						</div>
						<div className="">
							{(() => {
								if (character.location?.name === "Unknown") {
									return (
										<div className="d-flex text-white flex-column pt-2">
											Actual location: <span className="spanDetalle"> Unknown</span>
										</div>

									)
								} else {
									return (
										<div className="d-flex text-white flex-column mt-2">
											Last known location: <span className="spanDetalle"><a className="fw-bold" onClick={() => goToLocation(character.location.url)}>{character.location ? character.location.name : "Loading location"}</a></span>
										</div>

									)
								}
							})()}

						</div>
					</div>


				</div>
			</div >

		</>
	)
}