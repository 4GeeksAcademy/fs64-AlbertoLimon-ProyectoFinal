import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharacterList } from "../component/Characters/characterList";
import "../../styles/main.css"
import { useNavigate } from "react-router-dom";

export const Characters = () => {

    const { actions } = useContext(Context);

    const navigate = useNavigate()
    
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

    return (
        <>
            
            <div className="container-fluid main">
                <div className="contenedorImagen d-flex justify-content-center align-items-center">
                    <img className="imagenTitulo" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/c50a4a55883023.5996f8afa3f5c.gif" />
                </div>  

                
                <div>
                    <CharacterList />
                </div>
            </div>

        </>
    )
}