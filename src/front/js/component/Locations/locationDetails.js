import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import "../../../styles/detalles.css"
import { useNavigate, useParams } from "react-router-dom";

export const LocationDetails = () => {

	const { store, actions } = useContext(Context);


	const { idLocation } = useParams();

	const navigate = useNavigate()

	useEffect(() => {

		const fetchLocation = async () => {
			const data = await actions.getSingleLocation(idLocation);
			console.log(data)

		}

		fetchLocation()
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

						<div className="detalleIndividual ">
							<span className=""></span>
							<h5>type</h5>
						</div>
						<div className="detalleIndividual">
							<h5>dimension</h5>
						</div>
						<div className="detalleIndividual">
							<h5>Some residents:</h5>
							
						</div>
					</div>


				</div>
			</div>


			<button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>

		</>
	)
}