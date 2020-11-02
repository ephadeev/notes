import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {deleteNotes, getTags, getNotes} from '../../Redux/actions/notes-actions';

const Note = ({username, text, date, id, deleteNotes, getTags, getNotes}) => {
    let [note, setNote] = useState({username, text});

    let tags = '';
    if (text.includes('#')) {
        let tagsArray = text.split(' ').filter(word => word.startsWith('#'));
        getTags(tagsArray);
        tags = tagsArray.join(' ');
    }

    const deleteNoteHandler = () => {
        fetch(`http://localhost:5000/api/notes/${id}`, {method: 'DELETE'})
            .then(() => deleteNotes(id))
            .catch(err => console.log(err.message));
    }

    const sendUpdatedNote = () => {
        fetch(`http://localhost:5000/api/notes/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(note)
        })
                .then(response => response.json())
                .then(() => {
                    getNotes();
                    editNoteHandler(noteContent);
                    editNoteHandler(editContent);
                })
                .catch(err => console.log(err.message));
    }


    let noteContent = React.createRef();
    let editContent = React.createRef();
    const editNoteHandler = (container) => {
        if (container.current.classList.contains('note__unvisible')) {
            container.current.classList.remove('note__unvisible');
            container.current.classList.add('note__visible');
        } else {
            container.current.classList.remove('note__visible');
            container.current.classList.add('note__unvisible');
        }
    }

    const onChangeAuthor = event => {
        setNote({
            ...note,
            username: event.target.value
        });
    }

    const onChangeText = event => {
        setNote({
            ...note,
            text: event.target.value
        });
    }

    return (
        <div className='note'>
            <div className='note__content note__visible' ref={noteContent}>
                <h2 className='note__author'>{username}</h2>
                <p>{text}</p>
                <p className='note__tags'>{tags}</p>
            </div>
            <div className='note__unvisible' ref={editContent}>
                <form>
                    <input 
                        type='text'
                        className='create-note__note-input'
                        placeholder='Your Name...'
                        onChange={onChangeAuthor}
                        value={note.username}
                        required />
                    <input 
                        type='text'
                        className='create-note__note-input'
                        placeholder='write some note'
                        onChange={onChangeText}
                        value={note.text}
                        required />
                </form>
                <button type='submit' 
                        onClick={sendUpdatedNote}>
                    Save
                </button>
            </div>
            <div className='note__settings'>
                <div 
                    className='note__icon-container' 
                    onClick={deleteNoteHandler}
                >
                    <i className="fas fa-times"></i>
                </div>
                <div 
                    className='note__icon-container' 
                    onClick={() => {
                        editNoteHandler(noteContent);
                        editNoteHandler(editContent);
                    }}
                >
                    <i className="fas fa-edit"></i>
                </div>
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
    getTags: PropTypes.func,
    getNotes: PropTypes.func
}

const mapDispatchToProps = {
    deleteNotes,
    getTags,
    getNotes
}

export default connect(null, mapDispatchToProps)(Note);