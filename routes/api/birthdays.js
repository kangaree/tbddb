const express = require("express");
const router = express.Router();
const Birthday = require('../../models/Birthday');

router.get("/test", (req, res) => res.json({ msg: "This is the birthdays route" }));

router.get('/:month/:day', (req, res) => {
    Birthday.find({ month: parseInt(req.params.month), day: parseInt(req.params.day) })
        .sort({ wikilinks: -1 })
        .then(birthday => res.json(birthday))
        .catch(err =>
            res.status(404).json({ nobirthdayfound: 'No birthday found with that date' })
        );
});

module.exports = router;