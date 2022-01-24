const express= require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var n1=Number(req.body.n1);
  var n2=Number(req.body.n2);
  var submit = n1+n2 ;
   res.send("The result is "+submit);
});

app.listen(3000,function(){
  console.log("Calculator server set at port 3000");
})