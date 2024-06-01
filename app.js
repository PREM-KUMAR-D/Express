const http  = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("In the middleware!");
    next();
});

app.use((req,res,next)=>{
    console.log("In the next middleware!");
    res.send({num:1});
});

app.listen(4000);

