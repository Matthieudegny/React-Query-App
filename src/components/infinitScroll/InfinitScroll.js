import { NavLink } from "react-router-dom";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useRef } from "react";
import useIntersectionObserver from "../hook/useIntersectionObserver"

import './infiniteScroll.css'

export function InfinteScroll () {
    //pageParam is link to fetchNextPage, is gonne be set up by it
    const fetchInfinitCats = ({ pageParam = 1 }) => {
        return axios.get(`https://api.thecatapi.com/v1/images/search?limit=2&page=${pageParam}&api_key=f942e190-c2bd-40cf-b9e3-81edabebc86b`)
    }

    const {
        isLoading,
        isError,
        error,
        data,
        //fetchNextPage is called with intersectionObserver
        fetchNextPage,
        //hasNextPage undefined when pages.length > 6
        hasNextPage,
        isFetching,
        isFetchingNextPage
      } = useInfiniteQuery(['infinitScroll'], fetchInfinitCats, {
        getNextPageParam: (_lastPage, pages) => {
          //hasNextPage become true -> useEffect useIntersectionObserver
          if (pages.length < 6) {
            return pages.length + 1
          } else {
            //hasNextPage become false
            return undefined
          }
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      })

      const loadMoreButtonRef = useRef()

      useIntersectionObserver({
        target: loadMoreButtonRef,
        onIntersect: fetchNextPage,
        enabled: hasNextPage,
      })
    

    if (isLoading) {
      return <h2>Loading...</h2>
    }

    if (isError) {
      return <h2>{error.message}</h2>
    }

    return (
        <div className="infiniteScroll-container">

            <NavLink to="/">
                Back Home page
            </NavLink>

            <h1>ceci est infinitScroll</h1>

            <div>
              {data?.pages.map((group, i) => {
                return (
                  < div key={i}>
                    {group.data.map(cat => (
      
                        <img key={cat.id} src={cat.url} alt="" />
                    
                    ))}
                  </div>
                )
              })}
            </div>
            
            <button
              ref={loadMoreButtonRef}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
            <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>

            
        </div>
    )
}