import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "./search.css"

export const SearchBar = ({setSearchText}) => {

    console.log(setSearchText())

    return (
        <>
            <form className="formSearch">
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Search for Characters..."
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}

                />
                <button className="btnSearch btn btn-secondary" onClick={(event) => {event.preventDefault()}}>Search</button>
            </form>
        </>
    )
}