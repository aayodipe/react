let express = require("express");
let app = express();
app.use(express.static(__dirname));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/step16-modules.html");
});
app.listen(1010, "localhost", function(error){
    if(error){
        console.log("Error : ",error);
    }else{
        console.log("server is now live on localhost:1010 ");
    }
})