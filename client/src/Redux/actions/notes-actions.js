import {
    GET_NOTES_STARTED, GET_NOTES, GET_NOTES_FAILURE,
    ON_CHANGE_NOTE, DELETE_NOTES} from '../types';

// get notes
const getNotesStarted = () => ({type: GET_NOTES_STARTED});
const setNotes = notes => ({type: GET_NOTES, notes});
const getNotesFailure = error => ({type: GET_NOTES_FAILURE, payload: {error}});
export const getNotes = () => {
    return dispatch => {
        dispatch(getNotesStarted);
        // fetch notes
        // catch failure
    }
};

// create new notes
export const onChangeNote = note => ({type: ON_CHANGE_NOTE, payload: note});

// delete notes
export const deleteNotes = noteId => ({type: DELETE_NOTES, payload: noteId});