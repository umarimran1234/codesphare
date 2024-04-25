const mongos = require('mongoose')
const bcrypt = require('bcrypt')

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
userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('Password')) return next();

    try{
        const salt = bcrypt.genSalt(10)
     const hashpasword = await  bcrypt.hash(user.Password, parseInt(salt));
     user.Password = hashpasword;
     next()
    } catch (err){
        console.log(err);
     next(err)
    }
})

const User = mongos.model('User', userSchema);
module.exports = User;

