const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
	title: String
})

module.exports = mongoose.model('project', projectSchema);