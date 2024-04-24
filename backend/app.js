const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')
const db = require('./database/mongodb');
const path = require('path')
const User = require('./models/Scheema');
const passport = require('passport')
const localstratigy = require('passport-local').Strategy
const port = 9000 ;
const usrRouts = require('./routes/Routes');
app.use('/api/user' , usrRouts)
app.use(cors())
app.use(bodyparser.json()); 

const logrequest = (req , res , next) =>{
  console.log(`[${new Date().toLocaleString()}]Request is for this : ${req.originalUrl}`);
  next()
}
app.use(logrequest)

app.get("/",(req , res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend","build")));
  res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
})

passport.use(new localstratigy(async (email , password , done )=>{
  try{
     console.log('Recived credentials' , email , password);
      const User = await User.findOne({Email:email, Password:password  })
  }catch{

  }
}))

app.listen(port, () => {
  console.log(`Server is running on ${port}` );
});


const saltRounds = 10; // You can adjust the number of salt rounds as needed
const bycritpt = require('bcrypt')

app.post('/Signup', async (req, res) => {
  try {
    const data = req.body;
    const newuser = new User(data);
    const response = await newuser.save();
    console.log("data is saved");
    res.status(200).json(response);
  } catch (err) {
    console.log("got an internal error:", err);
    res.status(500).json({ err: "internal server error" });
  }
});

app.post('/Signin', async (req, res) => {
  try {
     const { Email, Password } = req.body;
     console.log(req.body);
    // Use async/await to wait for User.findOne() to complete
     const user = await User.findOne({ Email: Email, Password: Password });
  console.log();
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
