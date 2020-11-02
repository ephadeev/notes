"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTags = exports.deleteNotes = exports.onChangeNoteAuthor = exports.onChangeNoteText = exports.getNotes = void 0;

var _types = require("../types");

// get notes
var getNotesStarted = function getNotesStarted() {
  return {
    type: _types.GET_NOTES_STARTED
  };
};

var setNotes = function setNotes(notes) {
  return {
    type: _types.GET_NOTES,
    notes: notes
  };
};

var getNotesFailure = function getNotesFailure(error) {
  return {
    type: _types.GET_NOTES_FAILURE,
    payload: {
      error: error
    }
  };
};

var getNotes = function getNotes() {
  return function (dispatch) {
    dispatch(getNotesStarted);
    fetch('http://localhost:5000/api/notes/').then(function (response) {
      return response.json();
    }).then(function (data) {
      return dispatch(setNotes(data));
    })["catch"](function (err) {
      return dispatch(getNotesFailure(err));
    });
  };
}; // create new notes


exports.getNotes = getNotes;

var onChangeNoteText = function onChangeNoteText(note) {
  return {
    type: _types.ON_CHANGE_NOTE_TEXT,
    payload: note
  };
};

exports.onChangeNoteText = onChangeNoteText;

var onChangeNoteAuthor = function onChangeNoteAuthor(note) {
  return {
    type: _types.ON_CHANGE_NOTE_AUTHOR,
    payload: note
  };
}; // delete notes


exports.onChangeNoteAuthor = onChangeNoteAuthor;

var deleteNotes = function deleteNotes(noteId) {
  return {
    type: _types.DELETE_NOTES,
    payload: noteId
  };
}; // get tags


exports.deleteNotes = deleteNotes;

var getTags = function getTags(tagsArray) {
  return {
    type: _types.GET_TAGS,
    payload: tagsArray
  };
};

exports.getTags = getTags;