const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/calendar",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connection");

}).catch((e)=>{
    console.log("no connection")

});