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

    const [pageNumber, setPageNumber] = useState(1)

    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const fetchInfoPages = async () => {

        if (search.length > 0) {
            await actions.getElementPages("locations", search)
            await actions.getLocationsSearched(pageNumber, search);

        } else {
            await actions.getTotalPages("locations")

        }

    }

    const fetchLocations = async () => {
        await actions.getLocations(pageNumber);
    }


    useEffect(() => {

        fetchInfoPages()

        fetchLocations()

    }, [pageNumber, search])

    console.log("num pages  ", pageNumber)
    console.log("locations ", store.locations)


    return (
        <>

            <SearchBar setSearch={setSearch} setPageNumber={setPageNumber} />

            <div className="card-container container">

                <div className="row d-flex justify-content-center align-items-center gap-4">
                    {store.locations.map((location, index) => (

                        <div className="card col-3" key={index}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Map_symbol_location_02.png" />
                            <div className="card-body">
                                <h5 className="card-title mb-3 text-dark">{location.name}</h5>

                                <div className="d-flex justify-content-between">
                                    <button onClick={() => navigate(`/main/locations/${location.id}`)} className="btn btn-outline-primary">Show details</button>
                                    <button className="btn btn-outline-danger" >
                                        <MdFavorite className="iconoFavorito" onClick={() => actions.addFavorite("location", location.id, location.name)}/>
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
