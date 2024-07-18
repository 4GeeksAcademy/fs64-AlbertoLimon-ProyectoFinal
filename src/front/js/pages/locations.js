import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/main.css"
import { LocationList } from "../component/Locations/locationList";


export const Locations = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            
            <div className="container-fluid main">
                <div className="contenedorImagen d-flex justify-content-center align-items-center">
                    <img className="imagenTitulo" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/c50a4a55883023.5996f8afa3f5c.gif" />
                </div>

                <div>
                    <LocationList />
                </div>
            </div>

        </>
    )
}