import {
    GET_NOTES_STARTED, GET_NOTES, GET_NOTES_FAILURE,
    ON_CHANGE_NOTE_TEXT, ON_CHANGE_NOTE_AUTHOR, DELETE_NOTES, GET_TAGS} from '../types';

let initialState = {
    notes: [],
    error: null,
    newNoteAuthor: '',
    newNoteText: '',
    isLoading: false,
    tags: []
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
        case ON_CHANGE_NOTE_TEXT: {
            return {
                ...state,
                newNoteText: action.payload
            }
        }
        case ON_CHANGE_NOTE_AUTHOR : {
            return {
                ...state,
                newNoteAuthor: action.payload
            }
        }
        // delete notes
        case DELETE_NOTES: {
            return {
                ...state,
                notes: [...state.notes.filter(note => note['_id'] !== action.payload)]
            }
        }
        // get tags
        case GET_TAGS: {
            let arr = [...state.tags, ...action.payload].reduce((acc, tag) => {
                if (acc.indexOf(tag) === -1) {
                    acc.push(tag);
                }
                return acc;
            }, []);
            return {
                ...state,
                tags: arr
            }
        }
        // default
        default: {
            return state
        }
    }
}

export default notesReducer;