import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import notesReducer from './reducers/notes-reducer';

let reducers = combineReducers({
    notes: notesReducer,
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;