const express = require('express');
const port = 8000;
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-session')(session);

const app = express();

//set up ejs as view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);


app.use(session({
    name: 'ShareGyaan',
    secret: 'fO4RU4T9UT46P4hfoy604RGFBPbiksBf9n6y498246tr9CIAtGH0764t576Y',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*100
    },
    store: new MongoStore({
            mongooseConnection: db,
            autoRemove:'disabled'
        },
        function(err){
            if(err)
            console.log('ERROR: ',err);
            else console.log('connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser());

app.use('/',require('./routes'));

// listening to port 8000
app.listen(port,function(err){
    if(err){
        console;log("ERROR: in runnning the server");
        return;
    }
    console.log("Server Started.");
})