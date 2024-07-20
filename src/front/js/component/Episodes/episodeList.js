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

    const [pageNumber, setPageNumber] = useState(1)

    const [search, setSearch] = useState("")

    const navigate = useNavigate()



    const fetchInfoPages = async () => {
        console.log("search ", search)
        if (search.length > 0) {
            await actions.getElementPages("episodes", search)
            await actions.getEpisodesSearched(pageNumber, search);

        } else {
            await actions.getTotalPages("episodes")

        }

    }

    const fetchEpisodes = async () => {
        await actions.getEpisodes(pageNumber);

    }

    /*
            const fetchCharacters = async () => {
                await actions.getCharacters(pageNumber);
            }
        
            const fetchInfoPages =  () => {
                actions.getTotalPages("characters")
            }
        */
    useEffect(() => {

        fetchInfoPages()

        fetchEpisodes()

    }, [pageNumber, search])

    console.log("search ", search)


    console.log("episodes ", store.episodes)

    return (
        <>

            <SearchBar setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className="card-container container">

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

                <Pagination totalPages={store.numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />




            </div>

        </>
    )
}
