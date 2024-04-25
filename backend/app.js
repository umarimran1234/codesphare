const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/mongodb');
const path = require('path');
const User = require('./models/Scheema'); // Assuming your Schema file is named Schema.js
const passport = require('passport');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const port = 9000;
const usrRoutes = require('./routes/Routes');
app.use('/api/user', usrRoutes);
app.use(cors());
app.use(bodyParser.json());

const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request is for this: ${req.originalUrl}`);
  next();
};
app.use(logRequest);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

passport.use(new localStrategy(async (email, password, done) => {
  try {
    console.log('Received credentials', email, password);
    const user = await User.findOne({ Email: email });
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.Password);
    if (!passwordMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.post('/Signup', async (req, res) => {
  try {
    const { name, lastname, Email, Password, username } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = new User({
      name,
      lastname,
      Email,
      Password: hashedPassword,
      username
    });
    const response = await newUser.save();
    console.log("Data is saved");
    res.status(200).json(response);
  } catch (err) {
    console.log("Got an internal error:", err);
    res.status(500).json({ err: "Internal server error" });
  }
});

app.post('/Signin', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // If user is found and password is correct, generate a token
    const token = jwt.sign({ userId: user._id }, 'personskey', { expiresIn: '1h' });
    // Return the token as a response
    res.status(200).json({ token });
  })(req, res, next);
});
// Success route

