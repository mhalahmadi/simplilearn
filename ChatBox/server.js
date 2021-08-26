//load expreess module
let express = require("express")
let objj = require("mongoose");
let url = "mongodb://localhost:27017/mern"; // load and connect databasse
let app = express()
var ObjectID = require('mongodb').ObjectID;

 
let http = require("http").Server(app);

let io = require("socket.io")(http);
let options ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
objj.connect(url,options).then(res=>console.log("Database Connected")).catch(error=>console.log(erroe));
let db = objj.connection; //get the connection refrence.

db.once("open", ()=>{
    // create the schema
    var chatBoxSchema = objj.Schema({
        _id:Number,
        name:String,
        msg:String
    });
let chatBoxModel = objj.model("",chatBoxSchema, "ChatBox");

//http;localhost:9099
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")   
})


io.on("connection", (socket) => {
        console.log("Client connected");
        // to get the message from a client 
        socket.on("obj", (msg) => {
           console.log("User: "+ msg.name); 
           console.log("MSG: "+msg.msg);
           
           let cbox = new chatBoxModel({name:msg.name,msg:msg.msg});
           chatBoxModel.insertMany([cbox],(err,result)=>{
            if(!err){
                console.log(result);
            }
            objj.disconnect();
        })
        
           
        })
    })
})
http.listen(9090, () => console.log("Server is running on port 9090"))