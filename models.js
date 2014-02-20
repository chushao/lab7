
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
    "title" : { type: String }
  , "date" : Date
  , "summary" : { type: String }
  , "image" : { type: String }
});

exports.Project = Mongoose.model('Project', ProjectSchema);


