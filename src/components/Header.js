// import react
import React from 'react';
import Search from './Search';
// Create functional header component
// Navbar maybe?
function Header(){
    return (
        <nav className='navbar navbar-dark bg-dark justify-content-left'>
            <span className='navbar-brand mb-01 h1'>
                React Employee Directory
            </span>
            <Search />
        </nav>
    )
}

// export Header as default
export default Header;