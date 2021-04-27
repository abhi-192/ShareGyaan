const Question = require("../models/question")

module.exports.all = function(req,res){
    Question.find({},function(err,Question){
        if(err){
            console.log("ERROR : unable to send all question list");
            return;
        }
        return res.render('question');
    });
}