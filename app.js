const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const birthdays = require("./routes/api/birthdays");
const passport = require('passport');

// config
const db = require('./config/keys').mongoURI;

// Heroku
const path = require("path");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Api Routes
app.use("/api/users", users);
app.use("/api/birthdays", birthdays);

app.listen(port, () => console.log(`Server is running on port ${port}`));