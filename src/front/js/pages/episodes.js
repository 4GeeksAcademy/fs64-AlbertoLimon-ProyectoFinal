import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { CharacterList } from "../component/Characters/characterList";
import "../../styles/main.css"


export const Episodes = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            
            <div className="container-fluid main">
                <h1>Esta es a pagina de episodios</h1>
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