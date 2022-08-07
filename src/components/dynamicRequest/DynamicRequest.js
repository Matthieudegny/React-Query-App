import React, { useRef, useState } from 'react'

export const DynamicRequest = () => {

    const [cats, setCats ] = useState('')

    const catNumberRef = useRef('')
   
    const submit = () => {
        setCats(catNumberRef.current)
    }

    return (
    <div className='container-dynamicRequest'>

        <form action="" onSubmit={submit}>

            <label for="tentacles">Number of Cats (1-5):</label>
            <input type="number" name="catNumber" min="1" max="5" placeholder='1' ref={catNumberRef}/>

            <button onClick={submit}>Ready to adopt</button>

        </form>
    </div>
  )
}
