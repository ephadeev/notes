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
    const date = Date.parse(req.body.date);

    Notes.findOne({username}).then(findedUserName => {
        if (findedUserName) {
            return res.status(400).json({message: 'Such username already exists'})
        }

        const newNote = new Notes(
            {
                username,
                text,
                date
            }
        );
    
        newNote.save()
        .then(() => res.json('Note added'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
});

module.exports = router;