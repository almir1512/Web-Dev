const express= require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/",function(req,res){
var feet = Number(req.body.num1);
var inches = Number(req.body.num2);
var finch= (feet*12)+inches;
var m = finch/39.3701;
var m2= m*m;

var kg =Number(req.body.num3);

var result = kg / m2;
result = result.toFixed(2);
res.send("The output is "+result);
});
app.listen (3000,function (){
  console.log("Server ported to port 3000");
});
