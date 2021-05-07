// import react
import React from 'react';
// Create functional Search component
// Function to search data in the table
function Search(props){

    return (
        <form className='d-flex'>
            <input className='form-control me-2' type='search' placeholder='Search...' aria-label='Search'></input>
            <button className='btn btn-outline-primary' type='submit'>Search</button>
        </form>
    )
}
// Potentially have this component combined with Header?

// export Search as default
export default Search;