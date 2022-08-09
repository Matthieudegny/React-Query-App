import React, { useRef, useState } from 'react'
import { useCatDynamic } from '../../requests/requests'
import { NavLink } from 'react-router-dom'

import './dynamicRequest.css'

export const DynamicRequest = () => {

    const catNumberRef = useRef()

    const [numberCats, setNumberCats] = useState('')
    const [arrayCats, setArrayCats] = useState('')

    const submit = (event) => {
        event.preventDefault();
        const numberOfCats = catNumberRef.current.value
        setNumberCats(numberOfCats)
        //function catDynamic is from react query useCatDynamic function with refetch:catDynamic
        catDynamic()
    }

    const onSuccess = (catObject) => {
        setArrayCats(catObject.data)
      }

    const {isLoading, data, refetch:catDynamic } = useCatDynamic(numberCats, onSuccess)

    return (
    <div className='container-dynamicRequest'>       

        <NavLink to="/">
            Back Home page
        </NavLink>

        <form action="" onSubmit={(e) => submit(e)}>

            <label htmlFor="tentacles">Number of Cats (1-5):</label>
            <input type="number" name="catNumber" min="1" max="5" placeholder='0' ref={catNumberRef}/>
            <button type='submit'>Ready to adopt</button>

        </form>

        
         {isLoading && (

            <h2>Loading...</h2>

        )}

        {arrayCats ? (

           <div className='container-dynamicRequest-carContainer'>

            {arrayCats.map((cat) => {
                return(
                    <img key={cat.id} src={cat.url} alt="" />
                    )
            })}
            
           </div>

        ) : (

            <h2>Please selct how many cats do you want</h2>

        ) }

    

    </div>
  )
}
