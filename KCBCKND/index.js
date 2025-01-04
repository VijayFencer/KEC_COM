var express = require('express');
var path = require('path');
var mdb = require('mongoose');

var User = require('./models/users');

var app = express();
const PORT = 3001;

app.use(express.json());

mdb.connect("mongodb://localhost:27017/").then(()=>{
    console.log("MongoDB Connection Successful");
}).catch(()=>{
    console.log("Check your connection string");
});

app.listen(PORT,()=>{
    console.log(Backend server started\nUrl: http://localhost:${PORT})
});

app.get('/',(req,res)=>{
    res.send("Hello this is the backend speaking");
});

app.get('/static',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'../kecComputing/index.html'));
});


app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords = await User.find();
        res.json(allSignUpRecords);
        console.log("All data fetched");
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})


app.post('/signup',(req,res)=>{
    // console.log(req.body);
    var{firstName,lastName,email}=req.body;
    // console.log(firstName,lastName,email);
    try{
        var newUser = new User({
            firstName:firstName,
            lastName:lastName,
            email:email
        })
        console.log(firstName,lastName,email);
        newUser.save();
        console.log("User Added Successfully");
        res.status(200).send("User Added Successfully");
    }
    catch(err){
        console.log(err);
    }
});