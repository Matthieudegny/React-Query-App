import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

const fetchCat = async() => {
    return await axios.get('https://api.thecatapi.com/v1/images/search')
}

const fetchSeveralCats = async(numberCats) => {
    console.log(`https://api.thecatapi.com/v1/images/search?limit=${numberCats}`)
    console.log(numberCats, typeof(numberCats))
    return await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${numberCats}`)
}

//request on click
export const useRandomCatData = () => {
        return useQuery('random-cat', fetchCat, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
        })
    }

//request on the mount of the component
export const useCatDataMount = (onSuccess, onError) => {
    return useQuery('App-cat', fetchCat, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess,
    onError,
    })
}

//request on the mount of the component
export const useCatDynamic = (numberCats) => {
    return useMutation(['several-cats',numberCats],() => fetchSeveralCats(numberCats), {
        enabled: false,
        keepPreviousData: false,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    })
}