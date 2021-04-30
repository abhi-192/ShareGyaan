const express = require('express');
const port = 8000;
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');


const app = express();

//set up ejs as view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);


app.use('/',require('./routes'));

// listening to port 8000
app.listen(port,function(err){
    if(err){
        console;log("ERROR: in runnning the server");
        return;
    }
    console.log("Server Started.");
})