import { NavLink } from 'react-router-dom'

export function HomePage () {
    return(
        <>
        
        <h1>This is a Cat application</h1>

        <NavLink to="/oneRequest">
            OneRequest
        </NavLink>
        </>
    )
}