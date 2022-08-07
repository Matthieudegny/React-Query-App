import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import { useCatDataMount } from '../../requests/requests';

import './homePage.css'

export function HomePage () {

    const [homeReady, setHomeReady] = useState(false)


    //thanks useEffects hooks and session storage i can maintain the state homeReady after a page refresh
    //at each mount of the component i change the value of homeReady(state) to the value of homeReady(localStorage) 
    useEffect(() => {
        setHomeReady(JSON.parse(window.sessionStorage.getItem("homeReady")));
      }, []);
    //at each time homeReady change, i update the value of homeReady(localStorage)
    useEffect(() => {
        window.sessionStorage.setItem("homeReady", homeReady);
    }, [homeReady]);
    //i save the value of homeReadu(localStorage) and use it in my JSX
    const valueStorage =  window.sessionStorage.getItem("homeReady")

    const onSuccess = (data) => {
        console.log('Perform side effect after encountering success, the background is now grey', data)
        setHomeReady(true)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const {  data } = useCatDataMount(onSuccess,onError)

    

    return(
        
        <div className={`homePage ${ valueStorage ? "homePageReady" : ''}`}>
         <h1>This is a Cat application</h1>
        {data && (

            <div>
                <img src={data.data[0].url} alt='' className='homePage-img' />
            </div>

        )}
       

        <NavLink to="/oneRequest">
            OneRequest
        </NavLink>
        <NavLink to="/dynamicRequest">
            dynamicRequest
        </NavLink>
        </div>
    )
}