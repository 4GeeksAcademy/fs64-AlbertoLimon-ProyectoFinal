import React from "react"
import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { MdFavorite } from "react-icons/md";
import "../../../styles/cards.css"
import { useNavigate } from "react-router-dom";
import { Pagination } from "../Pagination/pagination";
import { SearchBar } from "../Search/search";

export const LocationList = () => {

    const { store, actions } = useContext(Context);

    const [pageNumber, setPageNumber] = useState(0)

    const [searchText, setSearchText] = useState("")
   
    const navigate = useNavigate()

    const fetchLocations = async () => {
        await actions.getLocations(pageNumber);
    }

    const fetchInfoPages =  () => {
        actions.getPages("locations")
        
    }

    useEffect(() => {
        fetchInfoPages()
        fetchLocations()
        
    }, [pageNumber])

    console.log("paginas lugares ",store.numPages)
    console.log("  ",store.locations)

    return (
        <>
            <SearchBar />

            <div className="card-container container-fluid row">
                <div className="col-3">
                    <h1>Aqui va la barra de busqueda</h1>
                </div>
                <div className="col-9">
                    <div className="row d-flex justify-content-center align-items-center gap-4">
                        {store.locations.map((location, index) => (

                            <div className="card col-3">
                                <img src="" />
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-dark">{location.name}</h5>

                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/main/locations/${location.id}`)} className="btn btn-outline-primary">Show details</button>
                                        <button className="btn btn-outline-danger" >
                                            <MdFavorite className="iconoFavorito" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <Pagination totalPages={store.numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />

                </div>


            </div>

        </>
    )
}