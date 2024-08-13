import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


import "../../../styles/details.css"
import { useNavigate, useParams } from "react-router-dom";

export const EpisodeDetails = () => {

	const { store, actions } = useContext(Context);
	const [episode, setEpisode] = useState([])

	const { id } = useParams();

	const navigate = useNavigate()

	const token = localStorage.getItem("jwt-token")

    useEffect(() => {
       
        const verification = async () => {
            const verify = await actions.verifyToken()
            if (!verify) {
                localStorage.removeItem("jwt-token")
                navigate("/welcome")
                alert("You have to log in")
            }
        }
        verification()
        
    }, [token])
	
	useEffect(() => {

		const fetchEpisode = async () => {
			const data = await actions.getSingleEpisode(id);
			setEpisode(data)
		}

		fetchEpisode()
	}, [])

	return (
		<>

			<div className="mt-4 mb-4">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src="https://episode.eu/wp-content/uploads/2020/04/logo-episode-zwart.jpg" className="card-img-top" alt="..." />
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

					</div>


				</div>
			</div>

		</>
	)
}