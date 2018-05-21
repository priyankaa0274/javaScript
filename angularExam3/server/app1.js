var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongoose://localhost/Testser");
const db = mongoose.connection;
db.on('open',function(){
	console.log("connection established");
});
db.on('error',function(){
	console.log("connection not good");
});

const UserSchema = mongoose.Schema({
	username :{
		type:String,
		required:true
	},
	password :{
		type:String,
		required:true
	},
	location :{
		type:String,
		required:true
	}
});

const User = mongoose.model('users',UserSchema);
app.post('/login', function(req, res) {
    console.log(req.body);


    res.json({
        success : true,
        username : req.body.username
    });
});


app.post('/registration', function(req, res) {
    console.log(req.body);
    var user1 = new User(req.body);
    user1.save();
    res.json({
        success : true,
        username : req.body.username
    });
});

app.listen(2000, ()=> {
    console.log("runnning on 2000");
})