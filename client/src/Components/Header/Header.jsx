import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__link'><h1 className='header__title'>Notes</h1></Link>
        </header>
    )
}

export default Header;