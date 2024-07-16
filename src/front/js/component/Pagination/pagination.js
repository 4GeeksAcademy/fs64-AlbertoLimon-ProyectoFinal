import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const Pagination = ({ type }) => {

    
    const next = () => {
        setPageNumber(actualPage => actualPage + 1)
    }
    const prev = () => {
        setPageNumber(actualPage => actualPage - 1)
    }

    return (
        
        <>
            <div className="container">
                <button onClick={prev} className="btn btn-primary">Prev</button>
                <button onClick={next} className="btn btn-primary">Next</button>
            </div>
        </>
    )
        /*
    const { store, actions } = useContext(Context);

    const getNumPages = () => {
        const numPages = actions.getPages(type)
        console.log("pages ", numPages)
        return numPages
    }
    
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div>
                            <h3>Item #{item}</h3>
                        </div>
                    ))}
            </>
        );
    }



    getNumPages()

    return (
        <>
            <div className="">

            </div>
        </>
    )
        */
}