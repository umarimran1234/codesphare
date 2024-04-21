const mongos = require('mongoose')

const userSchema = mongos.Schema({
    Name:{
        type:String,
        require:true,
     },
    lastname:{
        type:String,
        require:true,
    },

    Email:{
        type:String,
        require:true,
    },
    
    Password:{
        type:String,
        require:true,
    },
    username:{
     type:String,
     require:true,
    }
})

const User = mongos.model('User', userSchema);
module.exports = User;

