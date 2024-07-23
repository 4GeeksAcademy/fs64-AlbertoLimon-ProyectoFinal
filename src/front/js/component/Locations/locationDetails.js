import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


import "../../../styles/details.css"
import { useNavigate, useParams } from "react-router-dom";

export const LocationDetails = () => {

	const { store, actions } = useContext(Context);
	const [location, setLocation] = useState([])

	const { id } = useParams();

	console.log("idLocation ", id)

	const navigate = useNavigate()

	useEffect(() => {

		const fetchLocation = async () => {
			const data = await actions.getSingleLocation(id);
			setLocation(data)
		}

		fetchLocation()
	}, [])

	console.log(location)

	return (
		<>

			<div className="mt-4 mb-4">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src="" className="card-img-top" alt="..." />
					</div>


					<div className="card-body detallesSecundarios">
						<div className="mb-2">
							<span className="spanDetalle fs-2 fw-bold">{location.name}</span>
						</div>

						<div className="text-white">
							Type: <span className="spanDetalle fw-bold"> {location.type}</span>
						</div>
						<div className="text-white">
							Dimension:<span className="spanDetalle fw-bold"> {location.dimension}</span>
						</div>

					</div>


				</div>
			</div>

		</>
	)
}