import React from "react"
import { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export const FavoriteItems = ({ items }) => {

    const { store, actions } = useContext(Context);

    const getImgFavorite = async (type, name) => {
        let src = ""
        if (type === "character") {

        } else if (type === "episode") {

        } else if (type === "location") {

        }
    }

    return (
        <>
            <div className="scroll-container">
                <div className="d-inline-flex scroll mb-3">
                    {items.map((favorite, index) => (
                        <div className="cardFavorite" key={index}>
                            <img src="" />
                            <div className="card-body">
                                <h5 className="card-title mb-3 text-dark pb-1">{favorite.itemName}</h5>
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => navigate()} className="btn btn-outline-primary">Show details</button>
                                    <button className="btn btn-outline-danger" onClick={() => actions.deleteFavorite()}>
                                        <FaTrash className="iconoEliminarFavorito" />
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