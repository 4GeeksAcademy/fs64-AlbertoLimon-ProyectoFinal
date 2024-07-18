import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";


import "../../../styles/details.css"
import { useNavigate, useParams } from "react-router-dom";

export const EpisodeDetails = () => {

	const { store, actions } = useContext(Context);

    const [pageNumber, setPageNumber] = useState(0)

    const [searchText, setSearchText] = useState("")
   
    const navigate = useNavigate()

    const fetchEpisodes = async () => {
        await actions.getEpisodes(pageNumber);
    }

    const fetchInfoPages =  () => {
        actions.getPages("episodes")
    }

    useEffect(() => {
        fetchInfoPages()
        fetchEpisodes()
        
    }, [pageNumber])


	return (
		<>

			<div className="mt-4 mb-4">
				<div className="card-container container contenedorDetalles">

					<div className="card imagenDetalles">
						<img src="" className="card-img-top" alt="..." />
					</div>


					<div className="card-body detallesSecundarios">
						<div className="">
							<span className="spanDetalle fs-2 fw-bold">{episode.name}</span>
						</div>

						<div className="">
							<span className="spanDetalle">Air date: {episode.air_date}</span>
						</div>
						<div className="">
							<span className="spanDetalle">Episode: {episode.episode}</span>
						</div>

					</div>


				</div>
			</div>

		</>
	)
}