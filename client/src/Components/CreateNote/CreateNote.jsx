import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../dist/App.css';
import {onChangeNoteText, onChangeNoteAuthor, getNotes} from '../../Redux/actions/notes-actions';

const CreateNote = ({noteAuthor, noteText, onChangeNoteText, onChangeNoteAuthor, getNotes}) => {
    const addNoteHandler = text => {
        let note = {
            username: noteAuthor,
            text: noteText
        }

        fetch('http://localhost:5000/api/notes/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(note)
        })
                .then(response => response.json())
                .then(() => getNotes())
                .catch(err => console.log(err.message))
    }

    const addNote = event => {
        event.preventDefault();
        if (noteText) {
            addNoteHandler(noteText);
        }
    }

    const onChangeAuthor = event => onChangeNoteAuthor(event.target.value);
    const onChangeText = event => onChangeNoteText(event.target.value);

    return (
        <div className='create-note'>
            <form>
            <input 
                    type='text'
                    className='create-note__note-input'
                    placeholder='Your Name...'
                    onChange={onChangeAuthor}
                    value={noteAuthor}
                    required />
                <input 
                    type='text'
                    className='create-note__note-input'
                    placeholder='write some note'
                    onChange={onChangeText}
                    value={noteText}
                    required />
            </form>
            <button type='submit' 
                    onClick={addNote}>
                Create Note
            </button>
        </div>
    )
}

CreateNote.propTypes = {
    noteText: PropTypes.string,
    onChangeNoteText: PropTypes.func,
    onChangeNoteAuthor: PropTypes.func,
    getNotes: PropTypes.func
}

const mapStateToProps = state => {
    return {
        noteText: state.notes.newNoteText,
        noteAuthor: state.notes.newNoteAuthor
    }
}

const mapDispatchToProps = {
    onChangeNoteText,
    onChangeNoteAuthor,
    getNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);