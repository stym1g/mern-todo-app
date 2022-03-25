const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type:String,
        maxlength:50
    },
    lastName: {
        type:String,
        maxlength: 50
    },
    age : {
        type:Number,
        default: 0 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User }