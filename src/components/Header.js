// import react
import React from 'react';
import Search from './Search';
// Create functional header component
// Navbar maybe?
function Header(props){
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <span className='navbar-brand mb-01 h1 left'>
                React Employee Directory
            </span>
            <Search searchFunct={props.searchFunct} />
        </nav>
    )
}

// export Header as default
export default Header;