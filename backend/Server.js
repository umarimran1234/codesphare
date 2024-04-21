const express = require('express');
const User = require('./models/Scheema'); 
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')
const bycritpt = require('bcrypt')
const db = require('./database/mongodb');
const passport = require('passport')
const localstratigy = require('passport-local').Strategy
const dotenv = require('dotenv') 
dotenv.config()
const port = process.env.PORT;
const usrRouts = require('./routes/Routes')


app.use('/api/user' , usrRouts)
app.use(cors())
app.use(bodyparser.json()); 

const logrequest = (req , res , next) =>{
  console.log(`[${new Date().toLocaleString()}]Request is for this : ${req.originalUrl}`);
  next()
}
app.use(logrequest)

app.listen(port, () => {
  console.log(`Server is running on ${port}` );
});


app.post('/Signup', async (req, res) => {
  try {
     const  data = req.body;
     const { name, lastname, email, password } = req.body;
    const bcript = 

     console.log(data);
     const newuser = new User(data); // Use the correct variable name
     console.log(newuser);
     const response = await newuser.save();
     console.log("data is saved");
     res.status(200).json(response);
  }  catch (err) {
     console.log("got an internal error");
     res.status(500).json({err: "internal server error" });
  }
});

app.post('/Signin', async (req, res) => {
  try {
     const { Email, Password } = req.body;
     console.log(req.body);
    // Use async/await to wait for User.findOne() to complete
     const user = await User.findOne({ Email: Email, Password: Password });
  
    if (user) {
      // Check if the password matches
      if (user.Password === Password) {
        // Password is correct, send success response
        res.status(200).json('Password is Correct');
      } else {
        // Password is incorrect, send unauthorized response
        res.status(401).json('Password is wrong');
      }
    } else {
      // User not found, send unauthorized response
      res.status(401).json('User not found');
    }
  } catch (err) {
    // Handle any errors that occur during async operations
    console.error('Error during sign-in:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
