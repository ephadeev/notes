import {
    GET_NOTES_STARTED, GET_NOTES, GET_NOTES_FAILURE,
    ON_CHANGE_NOTE, DELETE_NOTES} from '../types';

let initialState = {
    notes: [],
    error: null,
    newNoteText: '',
    isLoading: false
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        // get notes
        case GET_NOTES_STARTED: {
            return {
                ...state,
                isLoading: true,
                newNoteText: ''
            }
        }
        case GET_NOTES: {
            return {
                ...state,
                isLoading: false,
                notes: [...action.notes],
                newNoteText: ''
            }
        }
        case GET_NOTES_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // create new notes
        case ON_CHANGE_NOTE: {
            return {
                ...state,
                newNoteText: action.payload
            }
        }
        // delete notes
        case DELETE_NOTES: {
            return {
                ...state,
                notes: [...state.notes.filter(note => note.noteId !== action.payload)]
            }
        }
        // default
        default: {
            return state
        }
    }
}

export default notesReducer;