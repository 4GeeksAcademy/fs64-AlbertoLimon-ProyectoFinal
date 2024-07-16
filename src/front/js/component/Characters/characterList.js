import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";
import { Pagination } from "../Pagination/pagination";
import { SearchBar } from "../Search/search";

export const CharacterList = () => {

    
    const { store, actions } = useContext(Context);

    const [pageNumber, setPageNumber] = useState(1)

    const [characters, setCharacters] = useState([])

    const [searchText, setSearchText] = useState("")

    const navigate = useNavigate()

    useEffect(() => {

        const fetchCharacters = async () => {
            
            await actions.getCharacters(pageNumber);
            console.log(store.characters)
        }

        fetchCharacters()

    }, [])

    return (
        <>
        <SearchBar />

            <div className="card-container container-fluid row">
                <div className="col-3">
                    <h1>Aqui va la barra de filtrado</h1>
                </div>
                <div className="col-9">
                    <div className="row d-flex justify-content-center align-items-center gap-4">
                        {store.characters.map((character, index) => (

                            <div className="card col-3">
                                <img src={character.image} />
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-dark">{character.name}</h5>

                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/characterDetails/${character.id}`)} className="btn btn-outline-primary">Show details</button>
                                        <button className="btn btn-outline-danger" >
                                            <MdFavorite className="iconoFavorito" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <Pagination type={"characters"} />

                </div>
                
                
            </div>

        </>
    )
}