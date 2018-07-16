
var express=require('express');
var app=express();
const port = process.env.PORT || 3000;

app.get("/",function(req,res){
	res.send("helo welcome to heroku...");
});


app.listen(port);