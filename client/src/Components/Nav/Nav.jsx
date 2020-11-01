import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../dist/App.css';

const Nav = ({tags}) => {
    let liTags = tags.map((tag, index) => {
        return <li key={index}><NavLink to={`/tag/${tag}`}>{tag}</NavLink></li>
    })

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <i className="fas fa-chevron-down"></i><span>Tags</span>
                    <ul>
                        {liTags}
                    </ul>
                </li>
                {/* <li>
                    <i className="fas fa-chevron-down"></i><span>Names</span>
                    <ul>
                        <li>name1</li>
                        <li>name2</li>
                    </ul>
                </li> */}
            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        tags: state.notes.tags
    }
}

export default connect(mapStateToProps)(Nav);