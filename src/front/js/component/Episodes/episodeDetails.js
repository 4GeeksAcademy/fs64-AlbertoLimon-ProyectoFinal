import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


import "../../../styles/details.css"
import { useNavigate, useParams } from "react-router-dom";

export const EpisodeDetails = () => {

	const { store, actions } = useContext(Context);
	const [episode, setEpisode] = useState([])

	const { id } = useParams();

	console.log("idEpisode ", id)

	const navigate = useNavigate()

	useEffect(() => {

		const fetchEpisode = async () => {
			const data = await actions.getSingleEpisode(id);
			setEpisode(data)
		}

		fetchEpisode()
	}, [])

	console.log("episode ",episode)

	return (
		<>

			<div className="mt-4 mb-4">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src="" className="card-img-top" alt="..." />
					</div>


					<div className="card-body detallesSecundarios">
						<div className="mb-2">
							<span className="spanDetalle fs-2 fw-bold">{episode.name}</span>
						</div>

						<div className="text-white mt-2">
							Air date: <span className="spanDetalle fw-bold">{episode.air_date}</span>
						</div>
						<div className="text-white mt-2">
							Episode: <span className="spanDetalle fw-bold">{episode.episode}</span>
						</div>

						<div className="text-white mt-2">
							Some residents: <span className="spanDetalle fw-bold"></span>
						</div>

					</div>


				</div>
			</div>

		</>
	)
}