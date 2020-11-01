import {
    GET_NOTES_STARTED, GET_NOTES, GET_NOTES_FAILURE,
    ON_CHANGE_NOTE_TEXT, ON_CHANGE_NOTE_AUTHOR, DELETE_NOTES, GET_TAGS} from '../types';

// get notes
const getNotesStarted = () => ({type: GET_NOTES_STARTED});
const setNotes = notes => ({type: GET_NOTES, notes});
const getNotesFailure = error => ({type: GET_NOTES_FAILURE, payload: {error}});
export const getNotes = () => {
    return dispatch => {
        dispatch(getNotesStarted);
        fetch('api/notes/')
            .then(response => response.json())
            .then(data => dispatch(setNotes(data)))
            .catch(err => dispatch(getNotesFailure(err)))
    }
};

// create new notes
export const onChangeNoteText = note => ({type: ON_CHANGE_NOTE_TEXT, payload: note});
export const onChangeNoteAuthor = note => ({type: ON_CHANGE_NOTE_AUTHOR, payload: note});

// delete notes
export const deleteNotes = noteId => ({type: DELETE_NOTES, payload: noteId});

// get tags
export const getTags = tagsArray => ({type: GET_TAGS, payload: tagsArray});