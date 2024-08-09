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

    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const fetchInfoPages = async () => {

        if (search.length > 0) {
            await actions.getElementPages("characters", search)
            await actions.getCharactersSearched(pageNumber, search);

        } else {
            await actions.getTotalPages("characters")

        }

    }

    const fetchCharacters = async () => {
        await actions.getCharacters(pageNumber);

    }

    useEffect(() => {

        fetchInfoPages()

        fetchCharacters()

    }, [pageNumber, search])


    return (
        <>

            <SearchBar setSearch={setSearch} setPageNumber={setPageNumber} />
            {store.characters ?

                <div className="card-container container">
                    <div className="row d-flex justify-content-center align-items-center gap-4">
                        {store.characters.map((character, index) => (

                            <div className="card col-3" key={index}>
                                <img src={character.image} />
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-dark">{character.name}</h5>

                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/main/characters/${character.id}`)} className="btn btn-outline-primary">Show details</button>
                                        <button className="btn btn-outline-danger" onClick={() => actions.addFavorite("character", character.id, character.name, character.image)} >
                                            <MdFavorite className="iconoFavorito" />
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
                    <h3 className="text-white font-monospace text-center">Characters not found!! </h3>
                    <img className="w-25 mb-4" src="https://img.goodfon.com/original/1920x1080/4/5f/rick-morty-rick-sad-season-2-s2-sad-rick.jpg" />
                </div>

            }

        </>
    )
}
