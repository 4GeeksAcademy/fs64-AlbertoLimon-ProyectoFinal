import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "./search.css"

export const SearchBar = () => {

    const { store, actions } = useContext(Context);

    const [searchText, setSearchText] = useState("")


    const setFilter = (e) => {
        setSearchText(e.target.value)
        console.log("serach text :",searchText)
        const filtered = store.characters.filter((item) => {
            console.log("item :",item)
            
            item.name.includes(searchText)
        })

        actions.setFiltered(filtered)
        console.log("filtered:  ",filtered)
    }

    return (
        <>
            <form className="formSearch">
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Search for Characters..."
                    onChange={(e) => {
                        setFilter(e)
                    }}

                />
                <button className="btnSearch btn btn-secondary" onClick={(event) => {event.preventDefault()}}>Search</button>
            </form>
        </>
    )
}