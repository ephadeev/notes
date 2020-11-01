const router = require('express').Router();
let Notes = require('../models/notes.model');

// api/notes/
router.route('/').get((req, res) => {
    Notes.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err))
})

// api/notes/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const text = req.body.text;

    const newNote = new Notes(
        {
            username,
            text,
        }
    );

    newNote.save()
        .then(() => res.json('Note added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// api/notes/update/:id
router.route('/update/:id').post((req, res) => {
    Notes.findById(req.params.id)
    .then(note => {
        note.username = req.body.username;
        note.text = req.body.text;

        note.save()
            .then(() => res.json('Note updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

// api/notes/:id
router.route('/:id').delete((req, res) => {
    Notes.findByIdAndDelete(req.params.id)
        .then(() => res.json('Note deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;