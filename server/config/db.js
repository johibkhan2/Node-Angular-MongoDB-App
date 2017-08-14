var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/mean_db');
//https://stackoverflow.com/questions/38138445/node3341-deprecationwarning-mongoose-mpromise 
module.exports = connection;