import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ totalPages, pageNumber, setPageNumber }) => {


    return (

        <>
            <ReactPaginate
                className="pagination justify-content-center gap-4 my-4"
                pageCount={totalPages}
                forcePage={pageNumber === 1? 0 : pageNumber - 1} 
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName="btn btn-primary"
                previousClassName="btn btn-primary"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                onPageChange={(data) => {setPageNumber(data.selected + 1)}}
            />

        </>
    )

}