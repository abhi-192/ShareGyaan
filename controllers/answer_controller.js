const Answer = require("../models/answer");
const Question = require("../models/question");
const User = require("../models/user");

module.exports.me = function(req,res){
    //redirect to '/users/answers/__'

    let path = "/users/answers/"+req.body._id;
    res.redirect(path);
}

module.exports.add = function(req,res){
    //check if user is logged in or not

    Question.findById({_id:req.body._id},function(err,question){
        if(err){
            console.log("ERROR: no such question exist ");
            return;
        }
        Answer.create(req.body,function(err,answer){
            if(err){
                console.log("ERROR: unable to create a new entry");
                return;
            }
            question.answer_id.push(answer._id);
            User.findById({_id:req.body.user_id},function(err,user){
                if(err){
                    console.log("ERROR: unable to find specified user ");
                    return;
                }
                user.answer_id.push(answer._id);
                let path = "/answer/"+answer._id;
                return res.redirect(path);
            });
        });
    });

}