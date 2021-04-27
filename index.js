const express = require('express');
const port = 8000;

const app = express();

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console;log("ERROR: in runnning the server");
        return;
    }
    console.log("Server Started.");
})