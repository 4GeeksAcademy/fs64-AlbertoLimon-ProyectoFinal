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

    //Falta añadir el id del ususario actual
    const addFavoriteCharacter = async (id, type, name, userId) => {
        await actions.addFavorite(id, type, name, userId)
    }

    useEffect(() => {

        console.log("Usuario: ",actions.getUserFromBack());

        fetchInfoPages()

        fetchCharacters()

    }, [pageNumber, search])


    return (
        <>

            <SearchBar setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className="card-container container">
                <h1>{store.message}</h1>
                <div className="row d-flex justify-content-center align-items-center gap-4">
                    {store.characters.map((character, index) => (

                        <div className="card col-3" key={index}>
                            <img src={character.image} />
                            <div className="card-body">
                                <h5 className="card-title mb-3 text-dark">{character.name}</h5>

                                <div className="d-flex justify-content-between">
                                    <button onClick={() => navigate(`/main/characters/${character.id}`)} className="btn btn-outline-primary">Show details</button>
                                    <button className="btn btn-outline-danger"  >
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
