import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCat = async() => {
    return await axios.get('https://api.thecatapi.com/v1/images/search')
}

export const useRandomCatData = () => {
        return useQuery('random-cat', fetchCat, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
        })
    }