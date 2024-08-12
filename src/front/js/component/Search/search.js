import React from "react";
import "../../../styles/search.css"

export const SearchBar = ({ type, setSearch, setPageNumber }) => {

    let inputPlaceholder;
    if(type === "character"){
        inputPlaceholder = "Search for Characters..."
    }else if(type === "location"){
        inputPlaceholder = "Search for Locations..."
    }else if(type === "episode"){
        inputPlaceholder = "Search for Episodes..."
    }

    return (
        <>
            <form className="formSearch">
                <input
                    className="inputSearch font-monospace"
                    type="text"
                    placeholder={inputPlaceholder}
                    onChange={(e) => {
                        setPageNumber(1)
                        setSearch(e.target.value)
                    }}

                />
                <button className="btnSearch btn btn-secondary font-monospace" onClick={(event) => { event.preventDefault() }}>Search</button>
            </form>
        </>
    )
}