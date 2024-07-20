import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import "./search.css"

export const SearchBar = ({setSearch, setPageNumber}) => {


    const { store, actions } = useContext(Context);
    

    
    //    const [searchQuery, setSearchQuery] = useState("")
    
    /*
        const handleSearch = async (query) => {
            setSearchQuery(query)
            if (query.trim().length >= 2) {
                try{
                    let allResults = [];
                    let url = `https://rickandmortyapi.com/api/character/?name=${query}`;
                    
                    while (url) {
                        const response = await fetch(url, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        if (response.ok) {
                            const data = await response.json();
                            allResults = [...allResults, ...data.results];
                            url = data.info.next;
                        } else {
                            url = null;
                        }
                    }
                    setSearchResults(allResults);
                }catch(error){
                    console.log(error)
                }
            }else{
                setSearchResults([])
            }
    
        }
*/

    
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
    /*
    console.log(store.characters)
    const setFilter = (e) => {
        setSearchText(e)
        console.log("search text :", searchText)
        const filtered = store.characters.filter((item) => {
            console.log("item :", item)

            item.name.includes(searchText)
        })

        actions.setFiltered(filtered)
        console.log("filtered:  ", filtered)
    }

    return (
        <>
            <form className="formSearch">
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Search for Characters..."
                    onChange={(e) => {
                        handleSearch(e.target.value)
                    }}

                />
                <button className="btnSearch btn btn-secondary" onClick={(event) => { event.preventDefault() }}>Search</button>
            </form>
        </>
    )


    
}
*/
}