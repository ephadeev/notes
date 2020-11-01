import React from 'react';
import * as PropTypes from 'prop-types';
import Note from './Note';

const Notes = (props) => {
    console.log(props);
    let notesFromProps = props.notes.map((note, index) => {
        return <Note 
                    username={note.username} 
                    text={note.text}
                    date={note.createdAt}
                    id={note._id}
                    key={note._id} />
    })

    return (
        <>
            {notesFromProps}
        </>
    )
}

Notes.propTypes = {
    notes: PropTypes.array
}

export default Notes;