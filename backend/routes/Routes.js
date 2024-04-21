const express = require('express')
const routs = express.Router()
const UsrCOntroller = require('../Controlers/UserControiller.js')


routs.post('/Register', UsrCOntroller.userREgistration)


module.exports = routs