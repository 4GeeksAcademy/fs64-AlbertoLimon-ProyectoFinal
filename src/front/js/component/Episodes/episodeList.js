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

    const img = "https://episode.eu/wp-content/uploads/2020/04/logo-episode-zwart.jpg"

    const navigate = useNavigate()

    const fetchInfoPages = async () => {

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

        fetchInfoPages()

        fetchEpisodes()

    }, [pageNumber, search])

    return (
        <>

            <SearchBar type={"episode"} setSearch={setSearch} setPageNumber={setPageNumber} />

            {store.episodes ?

                <div className="card-container container">
                    <div className="row d-flex justify-content-center align-items-center gap-4">
                        {store.episodes.map((episode, index) => (

                            <div className="card col-3" key={index}>
                                <img src={img} />
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-dark">{episode.name}</h5>

                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/main/episodes/${episode.id}`)} className="btn btn-outline-primary">Show details</button>
                                        <button className="btn btn-outline-danger" >
                                            <MdFavorite className="iconoFavorito" onClick={() => actions.addFavorite("episode", episode.id, episode.name, img)} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <Pagination totalPages={store.numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />

                </div>

                :
                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <h3 className="text-white font-monospace text-center">Episodes not found!! </h3>
                    <img className="w-25 mb-4" src="https://img.goodfon.com/original/1920x1080/4/5f/rick-morty-rick-sad-season-2-s2-sad-rick.jpg" />
                </div>
            }

        </>
    )
}
