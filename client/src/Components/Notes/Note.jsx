import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {deleteNotes, getTags} from '../../Redux/actions/notes-actions';

const Note = ({username, text, date, id, deleteNotes, getTags}) => {
    // надо пробежаться по text и все слова начинающиеся с # записать в переменную tag и в ставить
    // эту переменную в <p className='note__tags'></p>

    let tags = '';
    if (text.includes('#')) {
        let tagsArray = text.split(' ').filter(word => word.startsWith('#'));
        getTags(tagsArray);
        tags = tagsArray.join(' ');
    }

    const deleteNoteHandler = () => {
        fetch(`api/notes/${id}`, {method: 'DELETE'})
            .then(() => deleteNotes(id))
            .catch(err => console.log(err.message));
    }

    return (
        <div className='note'>
            <div className='note__content'>
                <h2 className='note__author'>{username}</h2>
                <p>{text}</p>
                <p className='note__tags'>{tags}</p>
            </div>
            <div className='note__settings'>
                <div 
                    className='note__icon-container' 
                    onClick={deleteNoteHandler}>
                    <i className="fas fa-times"></i>
                </div>
                <div className='note__icon-container'><i className="fas fa-edit"></i></div>
            </div>
        </div>
    )
}

Note.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    deleteNotes: PropTypes.func,
    getTags: PropTypes.func
}

const mapDispatchToProps = {
    deleteNotes,
    getTags
}

export default connect(null, mapDispatchToProps)(Note);