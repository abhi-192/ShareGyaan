const Question = require("../models/question");
const User = require("../models/user");

module.exports.all = function(req,res){
    Question.find({},function(err){
        if(err){
            console.log("ERROR : unable to send all question list");
            return;
        }
        return res.render('question');
    });
}

module.exports.ask  =function(req,res){
    //chack if user is logged in or not

    Question.find({content: req.body.content} ,function(err,question){
        if(err){
            console.log("ERROR: unable to search question");
            return;
        }
        if(!question){

            //adding a question to db if it doesnt exist.
            Question.create(req.body,function(err, question){
                if(err)
                {
                    console.log("ERROR: unable create new queestion");
                    return;
                }
                console.log("Question created succesfully");
                User.findById({_id: question.user_id},function(err,user){
                    if(err){
                        console.log('Unable to find user.');
                        return ;
                    }
                    user.question_id.push(_id);
                });
                res.redirect('./question/question._id');
            });
        }
    });
}

module.exports.me = function(req,res){

    ///redirect to './users/questions/__'

    let path = './users/questions/' + req.body._id;
    res.redirect(path);
}

