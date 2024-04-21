const mongos = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/codesphare'
mongos.connect(mongoUrl,{
    useNewURLParser:true,
    useUnifiedTopology:true,
})

const db = mongos.connection

db.on('connection',()=>{
    console.log('connnected database');

})

db.on('disconnect',()=>{
    console.log('mongodb disconnect');
})

db.on('error',(err)=>{
    console.log("Mongodb connection error", err);
})


module.exports = db