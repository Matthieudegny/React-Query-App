import React, { useRef, useState } from 'react'
import { useCatDynamic } from '../../requests/requests'

export const DynamicRequest = () => {

    const catNumberRef = useRef()

    const [numberCats, setNumberCats] = useState()

    const submit = (event) => {
        event.preventDefault();
        const numberOfCats = catNumberRef.current.value
        setNumberCats(numberOfCats)
        console.log(numberCats)
        cats(numberCats)
    }

    const { mutate: cats, data } = useCatDynamic(numberCats)
    //const { mutate : cats , data } = useCatDynamic(numbercats)

  
    if (data) console.log(data)

    //const arrayCats = data.data

    return (
    <div className='container-dynamicRequest'>

        <form action="" onSubmit={(e) => submit(e)}>

            <label htmlFor="tentacles">Number of Cats (1-5):</label>
            <input type="number" name="catNumber" min="1" max="5" placeholder='0' ref={catNumberRef}/>

            <button type='submit'>Ready to adopt</button>

            {data?.data.map((cat) => {
                return (
                    <img key={cat.id} src={cat.url} alt="" />
                )
            })}

        </form>
    </div>
  )
}
