import React from "react"

export const Pagination = ({ setPageNumber}) => {

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
}