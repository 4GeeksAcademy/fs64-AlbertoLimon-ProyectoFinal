import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";
import { Pagination } from "../Pagination/pagination";
import { SearchBar } from "../Search/search";

export const EpisodeList = () => {

    const { store, actions } = useContext(Context);

    const [pageNumber, setPageNumber] = useState(0)

    const [searchText, setSearchText] = useState("")
   
    const navigate = useNavigate()

    const fetchEpisodes = async () => {
        await actions.getEpisodes(pageNumber);
    }

    const fetchInfoPages =  () => {
        actions.getTotalPages("episodes")
        
    }

    useEffect(() => {
        fetchInfoPages()
        fetchEpisodes()
        
    }, [pageNumber])

    console.log("paginas episodios ",store.numPages)

    return (
        <>
            <SearchBar />

            <div className="card-container container-fluid row">
                <div className="col-3">
                    <h1>Aqui va la barra de busqueda</h1>
                </div>
                <div className="col-9">
                    <div className="row d-flex justify-content-center align-items-center gap-4">
                        {store.episodes.map((episode, index) => (

                            <div className="card col-3">
                                <img src="" />
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-dark">{episode.name}</h5>

                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/main/episodes/${episode.id}`)} className="btn btn-outline-primary">Show details</button>
                                        <button className="btn btn-outline-danger" >
                                            <MdFavorite className="iconoFavorito" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <Pagination totalPages={store.numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />

                </div>


            </div>

        </>
    )
}