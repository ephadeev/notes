import React from 'react';
import '../../dist/App.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <i className="fas fa-chevron-down"></i><span>Tags</span>
                    <ul>
                        <li>tag1</li>
                        <li>tag2</li>
                    </ul>
                </li>
                <li>
                    <i className="fas fa-chevron-down"></i><span>Names</span>
                    <ul>
                        <li>name1</li>
                        <li>name2</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;