import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import Note from './Note';

const FilteredNotes = ({notes, ownProps}) => {
    let notesFromProps;

    useEffect((notesFromProps) => {
        console.log(ownProps.match.params.index);
        notesFromProps = notes
                            .filter(note => note.text.includes(ownProps.match.params.index))
                            .map(note => {
                                return <Note 
                                            username={note.username} 
                                            text={note.text}
                                            date={note.createdAt}
                                            id={note._id}
                                            key={note._id} />
                            });
    }, [ownProps.match.params.index])

    return (
        <>
            {notesFromProps}
        </>
    )
}

FilteredNotes.propTypes = {
    notes: PropTypes.array
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps)(FilteredNotes);