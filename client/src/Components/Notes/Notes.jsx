import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Note from './Note';
import CreateNote from '../CreateNote/CreateNote';

const Notes = ({notes}) => {

    let notesFromProps = notes.map(note => {
        return <Note 
                    username={note.username} 
                    text={note.text}
                    date={note.createdAt}
                    id={note._id}
                    key={note._id} />
    })

    return (
        <>
            <CreateNote />
            {notesFromProps}
        </>
    )
}

Notes.propTypes = {
    notes: PropTypes.array
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
  }

export default connect(mapStateToProps)(Notes);