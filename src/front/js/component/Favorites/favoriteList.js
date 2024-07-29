import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";

export const FavoriteList = () => {

    const { store, actions } = useContext(Context);

    const [pageNumber, setPageNumber] = useState(1)

    const [search, setSearch] = useState("")

    const navigate = useNavigate()


    useEffect(() => {
        

    }, [])




    return (
        <>
            
            <div className="card-container container">
                <h1 className="text-white fs-1">Favorites</h1>
                <div className="row d-flex justify-content-center align-items-center gap-4">
                    {store.episodes.map((episode, index) => (

                        <div className="card col-3" key={index}>
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





            </div>
        </>
    )
}
