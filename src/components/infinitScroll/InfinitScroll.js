import { NavLink } from "react-router-dom";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

export function InfinteScroll () {

    const fetchInfinitCats = ({ pageParam = 1 }) => {
        return axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&page=1&api_key=f942e190-c2bd-40cf-b9e3-81edabebc86b`)
    }

    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage
      } = useInfiniteQuery(['infinitScroll'], fetchInfinitCats, {
        getNextPageParam: (_lastPage, pages) => {
          if (pages.length < 4) {
            return pages.length + 1
          } else {
            return undefined
          }
        }
      })

    return (
        <div>

            <NavLink to="/">
                Back Home page
            </NavLink>

            <h1>ceci est infinitScroll</h1>
            
        </div>
    )
}