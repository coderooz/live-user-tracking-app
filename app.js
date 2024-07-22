const express = require('express');
const path = require('path'); 
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

const users = {};
io.on("connection", function (socket){
    socket.on("send-location", function(data){
        console.log("User Connected:", socket.id, "Lat:",data.latitude, "Lng:", data.longitude);
        users[socket.id] = data;
        io.emit("receive-location", {id:socket.id, ...data});
    });
    socket.on("disconnect", function(){
        console.log("User Disconnected:", socket.id);
        delete users[socket.id];
        io.emit("user-disconnect", socket.id);
    })
}) 

app.get("/", function (req, res){
    res.render("index");
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});