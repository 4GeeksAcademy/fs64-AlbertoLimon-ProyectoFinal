import React from "react";
import "../../../styles/search.css"

export const SearchBar = ({ setSearch, setPageNumber }) => {

    return (
        <>
            <form className="formSearch">
                <input
                    className="inputSearch font-monospace"
                    type="text"
                    placeholder="Search for Characters..."
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