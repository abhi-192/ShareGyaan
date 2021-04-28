const express = require('express');
const port = 8000;

const app = express();

//set up ejs as view engine
app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require('./routes'));

// listening to port 8000
app.listen(port,function(err){
    if(err){
        console;log("ERROR: in runnning the server");
        return;
    }
    console.log("Server Started.");
})