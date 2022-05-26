const dotenv = require('dotenv');
dotenv.config();

require('./conn');

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

const port = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api/calendar", require(".//calendar"));

app.listen(port,()=>{
    console.log(port);

})