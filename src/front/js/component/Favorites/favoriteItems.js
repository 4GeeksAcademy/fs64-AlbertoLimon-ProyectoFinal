import React, { useState } from "react"
import { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export const FavoriteItems = ({ items }) => {

    const { store, actions } = useContext(Context);
    const [ img, setImg ] = useState("")
    const navigate = useNavigate()

   /* 
    const getImgFavorite = async (type, apiId) => {
        console.log("img")
        const src = ""
        if (type === "character") {
            src = await actions.getImageFavorite(apiId)
        } else if (type === "episode") {
            src = ""
        } else if (type === "location") {
            src = ""
        }
        console.log(src)
        return `${src}`
    }
*/
    
    const getImgFavorite = async (apiId) => {
        let src = await actions.getImageFavorite(apiId)
        setImg(src)
        
    }
    
     getImgFavorite(1)
    console.log(img)
    

    const showDetails = (type, apiId) => {
        navigate(`/main/${type}s/${apiId}`)
    }

    return (
        <>
            <div className="scroll-container">
                <div className="d-inline-flex scroll mb-3 gap-4">
                    {items.map((favorite, index) => (
                        <div className="card favorite" key={index}>
                            {(() => {
								
                                
							})()}
                            <img src={`${img}`}/> 
                            <div className="card-body">
                                <h5 className="card-title mb-3 text-dark">{favorite.itemName}</h5>
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => showDetails(favorite.type, favorite. apiId)} className="btn btn-outline-primary">Show details</button>
                                    <button className="btn btn-outline-danger" onClick={() => actions.deleteFavorite(favorite.id)}>
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