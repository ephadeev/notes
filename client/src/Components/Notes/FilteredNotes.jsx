import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import Note from './Note';
import {getNotes} from '../../Redux/actions/notes-actions';

const FilteredNotes = ({notes, getNotes, ...ownProps}) => {
    const [filteredNotes, setFilteredNotes] = useState(null);
    useEffect(() => {
        setFilteredNotes(notes
                            .filter(note => note.text.includes(`#${ownProps.match.params.index}`))
                            .map(note => {
                                return <Note 
                                            username={note.username} 
                                            text={note.text}
                                            date={note.createdAt}
                                            id={note._id}
                                            key={note._id} />
                            }));
    }, [ownProps.match.params.index]);

    return (
        <>
            {filteredNotes}
        </>
    )
}

FilteredNotes.propTypes = {
    notes: PropTypes.array,
    getNotes: PropTypes.func
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}

const mapDispatchToProps = {
    getNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredNotes);