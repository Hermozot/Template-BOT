const mongoose = require('mongoose');

 const GUILD = new mongoose.Schema({  
    statue: {type: Boolean, default: 0},
    server_id: {type: String, unique: true},
    user_id: {type: String, unique: true}

 })
const model = mongoose.model('config', GUILD);
module.exports = model;