import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import './paginatedCats.css'

const fetchPaginatedCats = pageNumber => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?limit=2&page=${pageNumber}&api_key=f942e190-c2bd-40cf-b9e3-81edabebc86b`)
  }

export function PaginatedCats () {

    const [pageNumber, setPageNumber] = useState(1)

    const { isLoading, isError, error, data, isFetching } = useQuery(
        ['colors', pageNumber],
        () => fetchPaginatedCats(pageNumber),
        {
          keepPreviousData: true
        }
    )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    console.log(data)
    
    
    return (
        <div className="paginatedCats-container">

        <NavLink to="/">
            Back Home page
        </NavLink>

        <h1>ceci est paginatedCats</h1>

        <div>
            {data?.data.map((cat) => {
            return (
                <div key={cat.id}>
                    <h2>
                        <img key={cat.id} src={cat.url} alt="" />
                    </h2>
                </div>
            )
            })}
        </div>

        <div>
            <button
            onClick={() => setPageNumber(page => page - 1)}
            disabled={pageNumber === 1}>
            Prev Page
            </button>
            <button
            onClick={() => setPageNumber(page => page + 1)}
            disabled={pageNumber === 4}>
            Next Page
            </button>
        </div>
        {isFetching && 'Loading'}
        
    </div>
    )
}