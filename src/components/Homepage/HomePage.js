import { useState } from 'react';
import { NavLink } from 'react-router-dom'

import { useCatDataMount } from '../../requests/requests';

import './homePage.css'

export function HomePage () {

    const [homeReady, setHomeReady] = useState(false)

    const onSuccess = (data) => {
        console.log('Perform side effect after encountering success, the background is now grey', data)
        setHomeReady(true)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const {  data } = useCatDataMount(onSuccess,onError)

    

    return(
        
        <div className={`homePage ${ homeReady ? "homePageReady" : ''}`}>
         <h1>This is a Cat application</h1>
        {data && (

            <div>
                <img src={data.data[0].url} alt='' className='homePage-img' />
            </div>

        )}
       

        <NavLink to="/oneRequest">
            OneRequest
        </NavLink>
        </div>
    )
}