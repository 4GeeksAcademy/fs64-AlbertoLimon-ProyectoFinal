import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "./search.css"

export const SearchBar = ({ setSearch, setPageNumber }) => {

    return (
        <>
            <form className="formSearch">
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Search for Characters..."
                    onChange={(e) => {
                        setPageNumber(1)
                        setSearch(e.target.value)
                    }}

                />
                <button className="btnSearch btn btn-secondary" onClick={(event) => { event.preventDefault() }}>Search</button>
            </form>
        </>
    )
}