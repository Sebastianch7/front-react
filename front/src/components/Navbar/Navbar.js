import React from 'react';
import Input from '../Input/Input';
function Navbar(props) {
    return (
        <nav className="nav">
            <div className='navbar'>
                <input type="text" placeholder='Search...' />
            </div>
        </nav>
    );
}

export default Navbar;