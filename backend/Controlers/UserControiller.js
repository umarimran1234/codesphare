const bcrypt  = require('bcrypt')
const User = require('../models/Scheema'); // Assuming `Scheema` contains your user schema
const jwt = require('jsonwebtoken')
const bodyparser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyparser.json())
class UsrCOntroller {
    static userREgistration = async (req , res) => {
const {name,lastname,email,passoword} = req.body;

const user = await User.findOne({email:email})
if (user) {
    res.sed({"status":"faild", "massege":"Email already exist"})
}else{
    if (name && email && lastname && passoword) {
       const bcript = await bcrypt.genSalt(12)
       const hashpassword = await  bcrypt.hash(passoword, bcript)
       try {
            const doc = new User({
                name:name,
                email:email,
                passoword: passoword,
            })
            await doc.save()
        } catch (error) {
            res.send({"status":"faild", "massege":"Un able to registerd"})
        }
    }else{
        res.send({"status":"faild", "massege":"All feilds are required "})
    }
}
    }
}
module.exports = UsrCOntroller