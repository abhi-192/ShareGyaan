module.exports.home = function(req,res){
    return res.render('home',{
        title: "Home Page"
    });
}

//sign in and create a session
module.exports.createSession = function(req,res){
    res.redirect('/question/me');
}