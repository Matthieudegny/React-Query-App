import { useRandomCatData } from '../../requests/requests'
import './fetchOneRequest.css'
import { NavLink } from 'react-router-dom'

export const OneRequest = () => {
    
    const { isLoading, data, error,isError, refetch } = useRandomCatData()

    return (
    <div className='container-OneRequest'>

      <NavLink to="/">
        Back Home page
      </NavLink>

      {isLoading && (

        <h2>Loading...</h2>

      )}

      {data ? (
        <>
          {isError&& (
            <h2>{error.message}</h2>
          )}
          <img src={data.data[0].url} alt='' />
          <h2>you can keep clicking if you want meet an other cat</h2>
        </>
      ) : (
        "Click on fetch to have a random cat"
      ) }
      <button onClick={refetch} className="container-OneRequest-btn">Fetch cat</button>
        
    </div>
  )
}
