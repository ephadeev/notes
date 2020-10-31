import React from 'react';
import '../../App.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    V Tags
                    <ul>
                        <li>tag1</li>
                        <li>tag2</li>
                    </ul>
                </li>
                <li>
                    V Names
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