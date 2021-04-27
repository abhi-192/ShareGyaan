const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ShareGyaan_Database');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "ERROR: unable to connect MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;