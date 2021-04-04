const router = require('express').Router();
const Notes = require('../model/Notes');
const { notesValidation } = require('../validation/validation');


// http://localhost:3000/api/notes/

router.post('/', async(req, res) => {
    // To check if the notes entered details are valid or not
    const { error } = notesValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const notes = new Notes({
        heading: req.body.heading,
        description: req.body.description,
        likes: req.body.likes,
    });

    try {
        const savedNotes = await notes.save();
        res.status(200).json(savedNotes);
    } catch (e) {
        res.status(400).json({ message: e });
    }
});


// http://localhost:3000/api/notes/id
// to load a specific post 

router.get("/:id", async(req, res) => {
    try {
        const note = await Notes.findById(req.params.id);
        return res.status(200).json(note);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

// http://localhost:3000/api/notes/id
// to delete a specific post 

router.delete("/:id", async(req, res) => {
    try {
        const removeNotes = await Notes.remove({ _id: req.params.id });
        return res.status(200).json(removeNotes);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

// http://localhost:3000/api/notes/id
// to edit a specific post 

router.patch("/:id", async(req, res) => {
    try {
        const updateNotes = await Notes.updateOne({ _id: req.params.id }, {
            $set: {
                heading: "Hello I just got Changed"
            }
        });
        return res.status(200).json(updateNotes);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

// http://localhost:3000/api/notes/
// to get all the Notes 

router.get("/", async(req, res) => {
    try {
        const note = await Notes.find();
        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

module.exports = router;