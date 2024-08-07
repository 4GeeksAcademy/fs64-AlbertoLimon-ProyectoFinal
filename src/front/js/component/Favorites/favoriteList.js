import React, { useState } from "react"
import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";
import { FavoriteItems } from "./favoriteItems";

export const FavoriteList = () => {

    const { store, actions } = useContext(Context);

    const [favoriteCharacters, setFavoriteCharacters] = useState([])
    const [favoriteEpisodes, setFavoriteEpisodes] = useState([])
    const [favoriteLocations, setFavoriteLocations] = useState([])

    const fetchFavorites = async () => {
        await actions.getFavorites();
        filtrarFavoritos()
    }

    const filtrarFavoritos = () => {

        let characters = []
        let episodes = []
        let locations = []

        store.favorites.forEach(favorite => {
            if (favorite.type === "character") {
                characters.push(favorite)
            } else if (favorite.type === "episode") {
                episodes.push(favorite)
            } else if (favorite.type === "location") {
                locations.push(favorite)
            }
        });

        setFavoriteCharacters(characters)
        setFavoriteEpisodes(episodes)
        setFavoriteLocations(locations)
    }

    useEffect(() => {

        fetchFavorites()

    }, [])
    console.log(store.favorites)


    return (
        <>

            <div className="card-container container">
                <div>
                    <h1 className="text-white fs-1 text-start font-monospace underline">Favorites characters</h1>
                    <FavoriteItems items={favoriteCharacters} />
                </div>

                <div>
                    <h1 className="text-white fs-1 text-start font-monospace underline">Favorites episodes</h1>
                    <FavoriteItems items={favoriteEpisodes} />
                </div>

                <div>
                    <h1 className="text-white fs-1 text-start font-monospace underline">Favorites locations</h1>
                    <FavoriteItems items={favoriteLocations} />
                </div>

            </div>
        </>
    )
}
