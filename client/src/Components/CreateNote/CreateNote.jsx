import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../dist/App.css';
import {onChangeNote} from '../../Redux/actions/notes-actions';

const CreateNote = ({noteText, onChangeNote}) => {
    const addNoteHandler = text => {
        fetch('api/notes/add', {
            method: 'POST',
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    const addNote = event => {
        event.preventDefault();
        if (noteText) {
            addNoteHandler(noteText);
        }
    }

    const onChange = event => onChangeNote(event.target.value);

    return (
        <div className='create-note'>
            <form>
                <input 
                    type='text'
                    className='create-note__note-input'
                    placeholder='write some note'
                    onChange={onChange}
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
    onChangeNote: PropTypes.func
}

const mapStateToProps = state => {
    return {
        noteText: state.notes.newNoteText
    }
}

const mapDispatchToProps = {
    onChangeNote
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);