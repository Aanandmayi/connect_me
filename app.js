const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app=express();

//router intialisation
const user=require('./routes/users.js')

app.get('/home',(req,res)=>{
	res.send('its the first page')
})

//calling routing functions
app.use('/',user);


app.listen(5000,(req,res)=>{
	console.log("connected on 5000");
})