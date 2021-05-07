// import react
import React from 'react';
// Create functional Search component
// Function to search data in the table
function Search(props){

    const searchFunct = (e) => {
        // Converts whatever is typed in the search bar into a lower case string
        const fullName = e.target.value.trim().toLowerCase();
        // If backspace is pressed to remove part of the search query, re-render
        if(e.keycode === 8){
            props.searchFunct(fullName);
        }
        props.searchFunct(fullName);
    }

    return (
        <form className='d-flex'>
            <input className='form-control me-2' type='search' placeholder='Search...' aria-label='Search' onKeyUp={searchFunct}></input>
        </form>
    )
}
// Potentially have this component combined with Header?

// export Search as default
export default Search;